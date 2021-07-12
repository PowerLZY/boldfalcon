#!/usr/bin/env python
# coding=utf-8
# Copyright (C) 2010-2013 Claudio Guarnieri.
# Copyright (C) 2014-2016 Cuckoo Foundation.
# This file is part of Cuckoo Sandbox - http://www.cuckoosandbox.org
# See the file 'docs/LICENSE' for copying permission.


def cuckoo_init(quiet=False, debug=False, artwork=False, test=False, ml=False):
    """Cuckoo initialization workflow.

    :param quiet: if set enable silent mode, it doesn't print anything except warnings
    :param debug: if set enable debug mode, it print all debug messages
    :param artwork: if set it will print only artworks, forever
    :param test: enable integration test mode, used only for testing
    :param ml: do CuckooML analysis of locally stored samples
    """
    cur_path = os.getcwd()
    os.chdir(CUCKOO_ROOT)

    logo()
    check_working_directory()
    check_configs()
    check_version()
    create_structure()

    if artwork:
        import time
        try:
            while True:
                time.sleep(1)
                logo()
        except KeyboardInterrupt:
            return

    init_logging()

    if quiet:
        log.setLevel(logging.WARN)
    elif debug:
        log.setLevel(logging.DEBUG)

    if ml:
        init_cuckooml()
        return
    # Todo: init_detection()
    init_modules()
    init_tasks()
    init_yara()
    init_binaries()
    init_rooter()
    init_routing()

    # TODO: This is just a temporary hack, we need an actual test suite to
    # integrate with Travis-CI.
    if test:
        return
    # 启动结果监听器
    ResultServer()

    os.chdir(cur_path)

def cuckoo_main(max_analysis_count=0):
    """Cuckoo main loop.

    :param max_analysis_count: kill cuckoo after this number of analyses
    """
    cur_path = os.getcwd()
    os.chdir(CUCKOO_ROOT)

    try:
        sched = Scheduler(max_analysis_count)
        sched.start()
    except KeyboardInterrupt:
        sched.stop()

    os.chdir(cur_path)
