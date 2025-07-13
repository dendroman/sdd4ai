/**
 * User Prompt Interface for SDD4AI CLI Tool
 * Interactive input handling designed for AI agents
 * 
 * @specification ../specs/components/user-prompt-interface.md
 * @feature ../specs/features/interactive-project-setup.md
 */

import chalk from 'chalk';
import { ProjectConfig, TemplateVariables } from './types';

export class UserPromptInterface {
  private silent: boolean;

  constructor(silent = false) {
    this.silent = silent;
  }

  /**
   * Collect project configuration through interactive prompts
   * @param projectName - Initial project name (optional)
   * @param defaultOwner - Default spec owner
   * @returns Complete project configuration
   */
  async collectProjectConfig(
    projectName?: string,
    defaultOwner?: string
  ): Promise<ProjectConfig> {
    if (!this.silent) {
      this.displayWelcome();
    }

    const name = projectName || await this.promptForProjectName();
    const specOwner = defaultOwner || await this.promptForSpecOwner();
    
    return {
      name,
      description: `Spec-driven development project: ${name}`,
      specOwner,
      template: 'default',
      features: {
        ui: true,
        git: true,
        examples: true
      },
      metadata: {
        created: new Date(),
        version: '0.1.0'
      }
    };
  }

  /**
   * Generate template variables from project configuration
   * @param config - Project configuration
   * @returns Template variables for processing
   */
  generateTemplateVariables(config: ProjectConfig): TemplateVariables {
    return {
      projectName: config.name,
      specOwner: config.specOwner,
      createdDate: config.metadata.created,
      description: config.description || '',
      packageName: this.sanitizePackageName(config.name),
      version: config.metadata.version,
      author: config.specOwner
    };
  }

  /**
   * Display welcome message
   */
  private displayWelcome(): void {
    console.log(chalk.blue.bold('🚀 Welcome to SDD4AI!'));
    console.log(chalk.gray('Creating a new spec-driven development project with AI optimization...\n'));
  }

  /**
   * Prompt for project name
   * @returns Project name
   */
  private async promptForProjectName(): Promise<string> {
    // For now, return a default. In full implementation, this would use inquirer or similar
    console.log(chalk.yellow('📝 Please provide a project name:'));
    return 'my-sdd-project';
  }

  /**
   * Prompt for spec owner
   * @returns Spec owner name
   */
  private async promptForSpecOwner(): Promise<string> {
    // For now, return a default. In full implementation, this would use inquirer or similar
    console.log(chalk.yellow('👤 Please provide a spec owner:'));
    return 'Development Team';
  }

  /**
   * Sanitize project name for use as package name
   * @param name - Original project name
   * @returns Sanitized package name
   */
  private sanitizePackageName(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  /**
   * Display progress message
   * @param message - Message to display
   */
  displayProgress(message: string): void {
    if (!this.silent) {
      console.log(chalk.cyan('⚡'), message);
    }
  }

  /**
   * Display success message
   * @param message - Message to display
   */
  displaySuccess(message: string): void {
    if (!this.silent) {
      console.log(chalk.green('✅'), message);
    }
  }

  /**
   * Display error message
   * @param message - Message to display
   */
  displayError(message: string): void {
    console.log(chalk.red('❌'), message);
  }
}
