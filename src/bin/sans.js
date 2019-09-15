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
    .option('-p, --presence', 'set precense away (default: "auto")')
    .option('-d, --duration [minutes]', 'clear after time frame', 0)
    .parse(process.argv);

  const { message, emoji, presence, duration } = program;

  if (!(message || emoji || presence)) {
    program.outputHelp();

    return;
  }

  sans({ message, emoji, presence, duration });
};

run();
