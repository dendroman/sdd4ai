/**
 * Type Definitions for SDD4AI CLI Tool
 * Centralized type definitions for AI-optimized development workflows
 * 
 * @specification ../specs/components/template-variables.md
 * @specification ../specs/components/project-configuration.md
 */

export interface TemplateVariables {
  [key: string]: string | number | boolean | Date;
  projectName?: string;
  specOwner?: string;
  createdDate?: Date;
  description?: string;
  packageName?: string;
  version?: string;
  author?: string;
}

export interface ProjectConfig {
  name: string;
  description?: string;
  specOwner: string;
  template: string;
  features: {
    ui: boolean;
    git: boolean;
    examples: boolean;
  };
  metadata: {
    created: Date;
    version: string;
  };
}

export interface FileSystemOperation {
  type: 'create' | 'copy' | 'template';
  source?: string;
  destination: string;
  variables?: TemplateVariables;
}

export interface CommandResult {
  success: boolean;
  message: string;
  data?: unknown;
}
