#!/usr/bin/env node

import program from 'commander';

import { version } from '../../package.json';
import sans from '..';

const run = () => {
  program
    .description('set StAtus iN Slack from the command line interface')
    .version(version)
    .option('-m, --message <text>', 'add text to the status')
    .option('-e, --emoji <type>', 'add emoji to the status')
    .option('-d, --duration <minutes>', 'clear message and emoji after time frame')
    .option('-p, --presence <auto|away>', 'set presence')
    .parse(process.argv);

  const { message, emoji, duration, presence } = program;
  console.log({ message, emoji, duration, presence });

  if (message === undefined && emoji === undefined && presence === undefined) {
    program.outputHelp();

    return;
  }

  sans({ message, emoji, duration, presence });
};

run();
