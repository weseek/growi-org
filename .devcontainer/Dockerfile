#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-18

# The node image includes a non-root user with sudo access. Use the
# "remoteUser" property in devcontainer.json to use it. On Linux, update
# these values to ensure the container user's UID/GID matches your local values.
# See https://aka.ms/vscode-remote/containers/non-root-user for details.
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN mkdir -p /growi-org/node_modules

RUN apt-get update && apt-get -y install --no-install-recommends git-lfs

# [Optional] Update UID/GID if needed
RUN if [ "$USER_GID" != "1000" ] || [ "$USER_UID" != "1000" ]; then \
        groupmod --gid $USER_GID $USERNAME \
        && usermod --uid $USER_UID --gid $USER_GID $USERNAME; \
    fi
RUN chown -R $USER_UID:$USER_GID /home/$USERNAME /growi-org;
