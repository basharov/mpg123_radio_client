#!/usr/bin/env bash

mpg123 -v --remote --fifo /tmp/mpg123in 2> /dev/null > /tmp/mpg123out &
