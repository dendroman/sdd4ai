/**
 * Enhanced Navigation Utilities for SDD4AI
 * Provides multiple ways to navigate from code to specifications using path aliases
 */

/**
 * Custom JSDoc tags for enhanced IDE navigation with path aliases
 * Usage: Add these to any file header JSDoc comment
 * 
 * @example
 * ```typescript
 * /**
 *  * Component Description
 *  * 
 *  * @specification @spec/components/component-name.md
 *  * @feature @spec/features/feature-name.md
 *  * @see {@link @spec/components/component-name.md | Component Specification}
 *  * @see {@link @spec/features/feature-name.md | Feature Specification}
 *  * /
 * ```
 */

// Path Aliases Configuration
export const PATH_ALIASES = {
  '@spec': 'specs',
  '@spec/components': 'specs/components',
  '@spec/features': 'specs/features',
  '@src': 'src',
  '@lib': 'src/lib'
} as const;

// VS Code Navigation Methods Available:

// 1. CTRL+Click on relative paths in JSDoc comments (works now!)
// 2. Command Palette: "Go to Symbol in Workspace" -> search for spec names
// 3. File Explorer: Use the IMPLEMENTATION.md index
// 4. Extensions: Install "Path Intellisense" for better path completion

// Custom Navigation Commands (can be added to VS Code tasks):
export const NAVIGATION_COMMANDS = {
  // Open specification from JSDoc
  openSpec: 'Open Component Specification',
  openFeature: 'Open Feature Specification',
  
  // VS Code commands to add to keybindings.json:
  commands: [
    {
      key: 'ctrl+shift+s',
      command: 'workbench.action.quickOpen',
      args: '../../specs/components/'
    },
    {
      key: 'ctrl+shift+f',
      command: 'workbench.action.quickOpen', 
      args: '../../specs/features/'
    }
  ]
};

// File patterns for VS Code navigation
export const FILE_PATTERNS = {
  specifications: '**/*.md',
  components: '**/specs/components/*.md',
  features: '**/specs/features/*.md',
  implementation: '**/src/**/*.ts'
};
