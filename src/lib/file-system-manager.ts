/**
 * File System Manager for SDD4AI CLI Tool
 * Handles file and directory operations with AI-friendly structure
 * 
 * @specification ../specs/components/file-system-manager.md
 */

import { promises as fs } from 'fs';
import path from 'path';
import { FileSystemOperation, CommandResult } from './types';

export class FileSystemManager {
  private basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  /**
   * Execute a file system operation
   * @param operation - The operation to execute
   * @returns Result of the operation
   */
  async executeOperation(operation: FileSystemOperation): Promise<CommandResult> {
    try {
      const fullDestination = path.resolve(this.basePath, operation.destination);
      
      // Ensure destination directory exists
      await this.ensureDirectory(path.dirname(fullDestination));

      switch (operation.type) {
        case 'create':
          await this.createFile(fullDestination, '');
          break;
        case 'copy':
          if (!operation.source) {
            throw new Error('Source path required for copy operation');
          }
          await this.copyFile(operation.source, fullDestination);
          break;
        case 'template':
          // Template processing would be handled by TemplateEngine
          throw new Error('Template operations should be handled by TemplateEngine');
        default:
          throw new Error(`Unknown operation type: ${operation.type}`);
      }

      return {
        success: true,
        message: `Successfully executed ${operation.type} operation`,
        data: { destination: fullDestination }
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to execute ${operation.type} operation: ${error}`,
        data: { error }
      };
    }
  }

  /**
   * Ensure a directory exists, creating it if necessary
   * @param dirPath - Path to the directory
   */
  async ensureDirectory(dirPath: string): Promise<void> {
    try {
      await fs.access(dirPath);
    } catch {
      await fs.mkdir(dirPath, { recursive: true });
    }
  }

  /**
   * Create a file with content
   * @param filePath - Path to the file
   * @param content - Content to write
   */
  async createFile(filePath: string, content: string): Promise<void> {
    await fs.writeFile(filePath, content, 'utf-8');
  }

  /**
   * Copy a file from source to destination
   * @param source - Source file path
   * @param destination - Destination file path
   */
  async copyFile(source: string, destination: string): Promise<void> {
    await fs.copyFile(source, destination);
  }

  /**
   * Check if a path exists
   * @param filePath - Path to check
   * @returns True if path exists, false otherwise
   */
  async exists(filePath: string): Promise<boolean> {
    try {
      await fs.access(path.resolve(this.basePath, filePath));
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get the resolved absolute path
   * @param relativePath - Relative path from base
   * @returns Absolute path
   */
  getAbsolutePath(relativePath: string): string {
    return path.resolve(this.basePath, relativePath);
  }
}
