# sans

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/rustamyusupov/sans/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/sans-cli.svg)](https://badge.fury.io/js/sans-cli)
[![Build Status](https://travis-ci.org/rustamyusupov/sans.svg?branch=master)](https://travis-ci.org/rustamyusupov/sans)

set StAtus iN Slack from the command line interface

## Install

    npm i sans-cli -g

## Environment variables

To set status you need set the SLACK_TOKEN as environment variable

    export SLACK_TOKEN="slack-token"

You can get the Slack token from [authentication](https://api.slack.com/web#authentication) or [legacy token](https://api.slack.com/custom-integrations/legacy-tokens)

## Usage

    Usage: sans [options]

    Options:
      -V, --version               output the version number
      -m, --message <text>        add text to the status
      -e, --emoji <type>          add emoji to the status
      -d, --duration <minutes>    clear message, emoji and presence after time frame
      -p, --presence <auto|away>  set presence
      -h, --help                  output usage information

## Examples

Set a message

    sans -m eating

Set an emoji

    sans -e fork_and_knife

Set a presence

    sans -p away

Set a message, an emoji, a presence and clean up in 25 minutes

    sans -m eating -e fork_and_knife -p away -d 25

Clear status and presence

    sans -m ''

You can also pass token as ENV variable

    SLACK_TOKEN=token sans -m surfing -e surfer
