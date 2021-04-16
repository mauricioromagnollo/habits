#!/bin/bash
chmod +x run.sh

DOCKER_CONTAINER_ID="1b5ff63fc8da"
PATH_SERVER="./packages/server"
PATH_CLIENT_WEB="./packages/client/web"

docker start $DOCKER_CONTAINER_ID

xfce4-terminal -e "bash -c 'cd $PATH_SERVER && npm run dev'"
xfce4-terminal -e "bash -c 'cd $PATH_CLIENT_WEB && npm run dev'"

unset DOCKER_CONTAINER_ID
unset PATH_SERVER
unset PATH_CLIENT_WEB
