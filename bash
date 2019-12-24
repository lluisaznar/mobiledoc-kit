#!/usr/bin/env bash

echo

docker-compose exec -u $(id -u ${USER}):$(id -g ${USER}) $@ sh

echo
echo
