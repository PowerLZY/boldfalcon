# Copyright (C) 2010-2013 Claudio Guarnieri.
# Copyright (C) 2014-2016 Cuckoo Foundation.
# Copyright (C) 2020-2021 PowerLZY.
# This file is part of Cuckoo Sandbox - http://www.cuckoosandbox.org
# See the file 'docs/LICENSE' for copying permission.



from lib.cuckoo.common.abstracts import Processing


class DroppedBuffer(Processing):
    """Dropped buffer analysis."""

    def run(self):
        """
        Run analysis.
        :return: list of dropped files with related information.
        """
        self.key = "buffer"
        dropped_files = []

        for dir_name, dir_names, file_names in os.walk(self.buffer_path):
            for file_name in file_names:
                file_path = os.path.join(dir_name, file_name)
                file_info = File(file_path=file_path).get_all()
                dropped_files.append(file_info)

        return dropped_files
