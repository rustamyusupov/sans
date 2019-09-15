# sans

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/rustamyusupov/sans/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/sans.svg)](https://badge.fury.io/js/sans)
[![Build Status](https://travis-ci.org/rustamyusupov/sans.svg?branch=master)](https://travis-ci.org/rustamyusupov/sans)

set StAtus iN Slack from the command line interface

## Install

    npm i sans -g

## Environment variables

To set status you need set the SLACK_TOKEN as environment variable

    export SLACK_TOKEN="slack-token"

You can get the Slack token from [https://api.slack.com/web#auth](https://api.slack.com/web#auth)

## Usage

    Usage: sans [options]

    Options:
      -V, --version             output the version number
      -m, --message [text]      add text to the status (default: "")
      -e, --emoji [type]        add emoji to the status (default: "")
      -p, --presence            set precense away (default: "auto")
      -d, --duration [minutes]  clear after time frame (default: 0)
      -h, --help                output usage information

## Examples

Set a message

    sans -m eating

Set a emoji

    sans -e fork_and_knife

Set a presence as away

    sans -p

Set a message, emoji, presence and clean up in 25 minutes

    sans -m eating -e fork_and_knife -p -d 25

You can also pass token as ENV variable

    SLACK_TOKEN=token sans -m eating -e fork_and_knife -p -d 25
