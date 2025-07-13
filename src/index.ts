#!/usr/bin/env node

/**
 * SDD4AI CLI Tool - CLI Entry Point
 * Bootstrap spec-driven development projects with AI-optimized structure
 * 
 * @specification @spec/components/cli-entry-point.md
 * @feature @spec/features/cli-command-parser.md
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { createProject } from './lib/commands';
import { CLI_NAME, CLI_VERSION, CLI_DESCRIPTION, ProjectOptions } from './lib/constants';

const program = new Command();

program
  .name(CLI_NAME)
  .description(CLI_DESCRIPTION)
  .version(CLI_VERSION, '-v, --version', 'display version number');

program
  .argument('[project-name]', 'name of the project to create')
  .option('--no-ui', 'skip Docusaurus installation')
  .option('--no-git', 'skip git repository initialization')
  .option('--no-examples', 'skip example specifications')
  .option('--template <name>', 'use custom template', 'default')
  .option('--spec-owner <name>', 'set default spec owner')
  .option('--silent', 'minimal output mode')
  .action(async (projectName: string | undefined, options: ProjectOptions) => {
    try {
      await createProject(projectName, options);
    } catch (error) {
      console.error(chalk.red('✖'), 'An error occurred:', error);
      process.exit(1);
    }
  });

// Handle unrecognized commands
program.on('command:*', () => {
  console.error(
    chalk.red('✖'),
    `Invalid command: ${program.args.join(' ')}`
  );
  console.log('See --help for a list of available commands.');
  process.exit(1);
});

// Parse command line arguments
program.parse();
