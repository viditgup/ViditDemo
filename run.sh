#!/bin/bash

java -jar /truetryout-0.0.1-SNAPSHOT.jar > nohup.out &

tail -f /dev/null
