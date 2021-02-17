#!/usr/bin/env bash
set -eu

SSH_USER=webmaster_chrissnijder_nl

sshHost="${SSH_USER}@shell.greenhost.nl"
targetPath="/domains/chrissnijder.nl/cv/"

rsync -avzr --delete -e ssh ./build/ ${sshHost}:${targetPath}