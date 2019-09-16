#!/usr/bin/env node

import program from 'commander';

import { version } from '../../package.json';
import sans from '..';

const run = () => {
  program
    .description('set StAtus iN Slack from the command line interface')
    .version(version)
    .option('-m, --message [text]', 'add text to the status', '')
    .option('-e, --emoji [type]', 'add emoji to the status', '')
    .option('-d, --duration [minutes]', 'clear after time frame', 0)
    .parse(process.argv);

  const { message, emoji, duration } = program;

  if (!message && !emoji) {
    program.outputHelp();

    return;
  }

  sans({ message, emoji, duration });
};

run();
