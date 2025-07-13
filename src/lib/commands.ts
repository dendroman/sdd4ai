/**
 * Command Handlers for SDD4AI CLI Tool
 * Orchestrates project creation and setup operations
 * 
 * @specification @spec/components/command-handler.md
 * @feature @spec/features/interactive-project-setup.md
 * @see {@link @spec/components/command-handler.md | Component Specification}
 * @see {@link @spec/features/interactive-project-setup.md | Feature Specification}
 * 
 * Navigation:
 * - Ctrl+Click on paths above to open specs
 * - Use Command Palette: "Go to File" -> type "command-handler"
 * - Check IMPLEMENTATION.md for complete mapping
 */

import chalk from 'chalk';
import path from 'path';
import { ProjectOptions } from './constants';
import { UserPromptInterface } from './user-prompt-interface';
import { FileSystemManager } from './file-system-manager';
import { TemplateEngine } from './template-engine';
import { ProjectConfig } from './types';

/**
 * Main command handler for creating a new spec-driven project
 * Implements the interactive project setup workflow
 */
export async function createProject(
  projectName: string | undefined,
  options: ProjectOptions
): Promise<void> {
  const promptInterface = new UserPromptInterface(options.silent);
  
  try {
    promptInterface.displayProgress('Initializing project setup...');

    // Collect project configuration
    const config = await promptInterface.collectProjectConfig(
      projectName,
      options.specOwner
    );

    // Apply CLI options to configuration
    applyOptionsToConfig(config, options);

    promptInterface.displayProgress(`Creating project: ${config.name}`);

    // Setup project structure
    await setupProjectStructure(config, promptInterface);

    promptInterface.displaySuccess(`Project ${config.name} created successfully!`);
    displayNextSteps(config, promptInterface);

  } catch (error) {
    promptInterface.displayError(`Failed to create project: ${error}`);
    throw error;
  }
}

/**
 * Apply CLI options to project configuration
 * @param config - Project configuration to modify
 * @param options - CLI options
 */
function applyOptionsToConfig(config: ProjectConfig, options: ProjectOptions): void {
  config.features.ui = options.ui !== false;
  config.features.git = options.git !== false;
  config.features.examples = options.examples !== false;
  
  if (options.template) {
    config.template = options.template;
  }
}

/**
 * Setup the project directory structure and files
 * @param config - Project configuration
 * @param promptInterface - User prompt interface for progress updates
 */
async function setupProjectStructure(
  config: ProjectConfig,
  promptInterface: UserPromptInterface
): Promise<void> {
  const projectPath = path.resolve(process.cwd(), config.name);
  const fsManager = new FileSystemManager(projectPath);
  const templateEngine = new TemplateEngine('./templates');

  promptInterface.displayProgress('Creating project directory...');
  await fsManager.ensureDirectory('.');

  promptInterface.displayProgress('Setting up specifications structure...');
  await setupSpecsStructure(fsManager);

  if (config.features.examples) {
    promptInterface.displayProgress('Adding example specifications...');
    await setupExampleSpecs(fsManager, templateEngine, config);
  }

  if (config.features.ui) {
    promptInterface.displayProgress('Setting up Docusaurus documentation...');
    await setupDocusaurus(fsManager, config);
  }

  if (config.features.git) {
    promptInterface.displayProgress('Initializing git repository...');
    await setupGitRepository(fsManager);
  }

  promptInterface.displayProgress('Creating package.json...');
  await setupPackageJson(fsManager, config);
}

/**
 * Setup the specs directory structure
 * @param fsManager - File system manager
 */
async function setupSpecsStructure(fsManager: FileSystemManager): Promise<void> {
  await fsManager.ensureDirectory('specs');
  await fsManager.ensureDirectory('specs/components');
  await fsManager.ensureDirectory('specs/features');
  await fsManager.ensureDirectory('specs/templates');
}

/**
 * Setup example specifications
 * @param fsManager - File system manager
 * @param _templateEngine - Template engine (reserved for future use)
 * @param _config - Project configuration (reserved for future use)
 */
async function setupExampleSpecs(
  fsManager: FileSystemManager,
  _templateEngine: TemplateEngine,
  _config: ProjectConfig
): Promise<void> {
  // This would process templates and create example specs
  // For now, create placeholder files
  await fsManager.createFile('specs/_manifest.md', '# Project Specifications\n\nTODO: Add project specifications');
  await fsManager.createFile('specs/index.md', '# Specification Overview\n\nTODO: Add specification index');
}

/**
 * Setup Docusaurus documentation
 * @param fsManager - File system manager
 * @param _config - Project configuration (reserved for future use)
 */
async function setupDocusaurus(fsManager: FileSystemManager, _config: ProjectConfig): Promise<void> {
  // Placeholder for Docusaurus setup
  await fsManager.createFile('docusaurus.config.js', '// Docusaurus configuration\n// TODO: Implement Docusaurus setup');
}

/**
 * Setup git repository
 * @param fsManager - File system manager
 */
async function setupGitRepository(fsManager: FileSystemManager): Promise<void> {
  // Placeholder for git initialization
  await fsManager.createFile('.gitignore', 'node_modules/\n.env\n*.log\n');
}

/**
 * Setup package.json
 * @param fsManager - File system manager
 * @param config - Project configuration
 */
async function setupPackageJson(fsManager: FileSystemManager, config: ProjectConfig): Promise<void> {
  const packageJson = {
    name: config.name,
    version: config.metadata.version,
    description: config.description,
    scripts: {
      'spec:new': 'echo "TODO: Implement spec creation"',
      'docs:dev': 'echo "TODO: Implement docs development"',
      'docs:build': 'echo "TODO: Implement docs build"'
    },
    author: config.specOwner,
    license: 'MIT'
  };

  await fsManager.createFile('package.json', JSON.stringify(packageJson, null, 2));
}

/**
 * Display next steps to the user
 * @param config - Project configuration
 * @param _promptInterface - User prompt interface (reserved for future use)
 */
function displayNextSteps(config: ProjectConfig, _promptInterface: UserPromptInterface): void {
  console.log(chalk.blue.bold('\n🎉 Next Steps:'));
  console.log(chalk.cyan(`   cd ${config.name}`));
  console.log(chalk.cyan('   npm install'));
  
  if (config.features.ui) {
    console.log(chalk.cyan('   npm run docs:dev'));
  }
  
  console.log(chalk.gray('\n📚 Documentation: specs/_manifest.md'));
  console.log(chalk.gray('🔗 Specifications are linked to implementation files for easy navigation\n'));
}
