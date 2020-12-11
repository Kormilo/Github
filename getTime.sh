#!/bin/bash
#This is a script for recording the time

count=0
for getTime in {0..350..1}
  do
    date >> date.txt
    ls
    count=$((count+1))
    echo "Number of times ran" $count
    sleep 1
done
