#!/usr/bin/env bash

PIPE_FILE='/tmp/mpg123in'

echo "Will play $1"

case $1 in

  1)
    echo 'LOAD http://ice4.somafm.com/vaporwaves-128-mp3' >> $PIPE_FILE
    ;;

  2)
    echo 'LOAD http://ice4.somafm.com/bootliquor-128-mp3' >> $PIPE_FILE
    ;;
  3)
    echo 'LOAD http://ice6.somafm.com/u80s-256-mp3' >> $PIPE_FILE
    ;;
  4)
    echo 'LOAD http://ice6.somafm.com/specials-128-mp3' >> $PIPE_FILE
    ;;
  5)
    echo 'LOAD http://ice4.somafm.com/covers-128-mp3' >> $PIPE_FILE
    ;;
  6)
    echo 'LOAD http://icecast-vgtrk.cdnvideo.ru/mayakfm_mp3_128kbps' >> $PIPE_FILE
    ;;
esac