#!/usr/bin/env bash
set -eu

SSH_USER=webmaster_chrissnijder_nl

# eval $(ssh-agent -s)
# ssh-add <(echo "$SSH_KEY")

sshHost="${SSH_USER}@shell.greenhost.nl"
# sshHostPubKey="ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBG8u/CiKMIgbEEaRHFCYHB00vtPhrcRHjLGCCRAGUAoxOFGQHi0+vcR43WFmGFKUIyJH04wqLPlErjCJ/GPxKI0="
targetPath="/domains/chrissnijder.nl/cv/"

# Add server's ssh host key to known hosts.
# mkdir -p ~/.ssh
# echo "$sshHostPubKey" > ~/.ssh/known_hosts

# Set r+w to user only
# chmod 600 ~/.ssh/key

# Do deployment
rsync -avzr --delete -e ssh ./build/ ${sshHost}:${targetPath}