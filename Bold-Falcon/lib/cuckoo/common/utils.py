# Copyright (C) 2010-2013 Claudio Guarnieri.
# Copyright (C) 2014-2016 Cuckoo Foundation.
# Copyright (C) 2020-2021 PowerLZY.
# This file is part of Cuckoo Sandbox - http://www.cuckoosandbox.org
# See the file 'docs/LICENSE' for copying permission.



def create_folders(root=".", folders=[]):
    """Create directories.

    :param root: root path.
    :param folders: folders list to be created.
    :raise CuckooOperationalError: if fails to create folder.
    """
    for folder in folders:
        create_folder(root, folder)

def create_folder(root=".", folder=None):
    """Create directory.

    :param root: root path.
    :param folder: folder name to be created.
    :raise CuckooOperationalError: if fails to create folder.
    """
    folder_path = os.path.join(root, folder)
    if folder and not os.path.isdir(folder_path):
        try:
            os.makedirs(folder_path)
        except OSError:
            raise CuckooOperationalError("Unable to create folder: %s" %
                                         folder_path)

def delete_folder(folder):
    """Delete a folder and all its subdirectories.

    :param folder: path to delete.
    :raise CuckooOperationalError: if fails to delete folder.
    """
    if os.path.exists(folder):
        try:
            shutil.rmtree(folder)
        except OSError:
            raise CuckooOperationalError("Unable to delete folder: "
                                         "{0}".format(folder))


def convert_char(c):
    """Escapes characters.

    :param c: dirty char.
    :return: sanitized char.
    """
    if c in PRINTABLE_CHARACTERS:
        return c
    else:
        return "\\x%02x" % ord(c)

def is_printable(s):
    """ Test if a string is printable."""
    for c in s:
        if c not in PRINTABLE_CHARACTERS:
            return False
    return True

def convert_to_printable(s):
    """Convert char to printable.

    :param s: string.
    :return: sanitized string.
    """
    if is_printable(s):
        return s
    return "".join(convert_char(c) for c in s)

def datetime_to_iso(timestamp):
    """Parse a datatime string and returns a datetime in iso format.

    :param timestamp: timestamp string
    :return: ISO datetime
    """
    return datetime.strptime(timestamp, "%Y-%m-%d %H:%M:%S").isoformat()

def get_filename_from_path(path):
    """Cross-platform filename extraction from path.

    :param path: file path.
    :return: filename.
    """
    dirpath, filename = ntpath.split(path)
    return filename if filename else ntpath.basename(dirpath)

def store_temp_file(filedata, filename, path=None):
    """Store a temporary file.

    :param filedata: content of the original file.
    :param filename: name of the original file.
    :param path: optional path for temp directory.
    :return: path to the temporary file.
    """
    filename = get_filename_from_path(filename)

    # Reduce length (100 is arbitrary).
    filename = filename[:100]

    options = Config()
    # Create temporary directory path.
    if path:
        target_path = path
    else:
        tmp_path = options.cuckoo.get("tmppath", "/tmp")
        target_path = os.path.join(tmp_path, "cuckoo-tmp")
    if not os.path.exists(target_path):
        os.mkdir(target_path)

    tmp_dir = tempfile.mkdtemp(prefix="upload_", dir=target_path)
    tmp_file_path = os.path.join(tmp_dir, filename)
    with open(tmp_file_path, "wb") as tmp_file:
        # If filedata is file object, do chunked copy.
        if hasattr(filedata, "read"):
            chunk = filedata.read(1024)
            while chunk:
                tmp_file.write(chunk)
                chunk = filedata.read(1024)
        else:
            tmp_file.write(filedata)

    return tmp_file_path


def to_unicode(s):
    """Attempt to fix non uft-8 string into utf-8. It tries to guess input encoding,
    if fail retry with a replace strategy (so undetectable chars will be escaped).

    :see: fuller list of encodings at http://docs.python.org/library/codecs.html#standard-encodings
    """

    def brute_enc(s2):
        """Trying to decode via simple brute forcing."""
        encodings = ("ascii", "utf8", "latin1")
        for enc in encodings:
            try:
                return unicode(s2, enc)
            except UnicodeDecodeError:
                pass
        return None

    def chardet_enc(s2):
        """Guess encoding via chardet."""
        enc = chardet.detect(s2)["encoding"]

        try:
            return unicode(s2, enc)
        except UnicodeDecodeError:
            pass
        return None

    # If already in unicode, skip.
    if isinstance(s, unicode):
        return s

    # First try to decode against a little set of common encodings.
    result = brute_enc(s)

    # Try via chardet.
    if not result and HAVE_CHARDET:
        result = chardet_enc(s)

    # If not possible to convert the input string, try again with
    # a replace strategy.
    if not result:
        result = unicode(s, errors="replace")

    return result

def cleanup_value(v):
    """Cleanup utility function, strips some unwanted parts from values."""
    v = str(v)
    if v.startswith("\\??\\"):
        v = v[4:]
    return v

def classlock(f):
    """Classlock decorator (created for database.Database).
    Used to put a lock to avoid sqlite errors.
    """
    def inner(self, *args, **kwargs):
        curframe = inspect.currentframe()
        calframe = inspect.getouterframes(curframe, 2)

        if calframe[1][1].endswith("database.py"):
            return f(self, *args, **kwargs)

        with self._lock:
            return f(self, *args, **kwargs)

    return inner


def hash_file(method, filepath):
    """Calculates an hash on a file by path.

    :param method: callable hashing method
    :param path: file path
    :return: computed hash string
    """
    f = open(filepath, "rb")
    h = method()
    while True:
        buf = f.read(1024 * 1024)
        if not buf:
            break
        h.update(buf)
    return h.hexdigest()
