/**
 * Constants and Type Definitions for SDD4AI CLI Tool
 * Centralized configuration and interface definitions
 * 
 * @specification ./specs/components/project-configuration.md
 * @specification ./specs/components/template-variables.md
 */

export const CLI_NAME = 'create-spec-driven-project';
export const CLI_VERSION = '0.1.0';
export const CLI_DESCRIPTION =
  'Bootstrap spec-driven development projects with ease';

export const DEFAULT_SPEC_OWNER = 'Development Team';
export const DEFAULT_TEMPLATE = 'default';

export const SPECS_DIRECTORY = 'specs';
export const TEMPLATES_DIRECTORY = 'templates';

export interface ProjectOptions {
  ui?: boolean;
  git?: boolean;
  examples?: boolean;
  template?: string;
  specOwner?: string;
  silent?: boolean;
}
