/**
 * Template Engine for SDD4AI CLI Tool
 * Handles template processing with AI-readable variable replacement
 * 
 * @specification ../specs/components/template-engine.md
 * @feature ../specs/features/template-system.md
 */

import { promises as fs } from 'fs';
import path from 'path';
import { TemplateVariables } from './types';

export class TemplateEngine {
  private templateDir: string;

  constructor(templateDir: string) {
    this.templateDir = templateDir;
  }

  /**
   * Process a template file with given variables
   * @param templatePath - Path to the template file
   * @param variables - Variables to replace in the template
   * @returns Processed template content
   */
  async processTemplate(templatePath: string, variables: TemplateVariables): Promise<string> {
    const fullPath = path.join(this.templateDir, templatePath);
    const templateContent = await fs.readFile(fullPath, 'utf-8');
    
    return this.replaceVariables(templateContent, variables);
  }

  /**
   * Replace template variables with actual values
   * @param content - Template content with variables
   * @param variables - Variables to replace
   * @returns Content with variables replaced
   */
  private replaceVariables(content: string, variables: TemplateVariables): string {
    let result = content;
    
    for (const [key, value] of Object.entries(variables)) {
      const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
      result = result.replace(regex, String(value));
    }
    
    return result;
  }

  /**
   * Get list of available templates
   * @returns Array of template file names
   */
  async getAvailableTemplates(): Promise<string[]> {
    try {
      const files = await fs.readdir(this.templateDir);
      return files.filter(file => file.endsWith('.template.md') || file.endsWith('.template'));
    } catch (error) {
      return [];
    }
  }
}
