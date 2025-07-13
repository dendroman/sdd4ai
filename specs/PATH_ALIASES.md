# Path Aliases Configuration

This document explains the path alias system used in the SDD4AI project for clean navigation between code and specifications.

## 🎯 Available Path Aliases

| Alias | Maps To | Description |
|-------|---------|-------------|
| `@spec/*` | `specs/*` | All specification files |
| `@spec/components/*` | `specs/components/*` | Component specifications |
| `@spec/features/*` | `specs/features/*` | Feature specifications |
| `@src/*` | `src/*` | Source code files |
| `@lib/*` | `src/lib/*` | Library modules |

## 📝 Usage in JSDoc Comments

### Before (Relative Paths)
```typescript
/**
 * @specification ../../specs/components/command-handler.md
 * @feature ../../specs/features/interactive-project-setup.md
 */
```

### After (Path Aliases)
```typescript
/**
 * @specification @spec/components/command-handler.md
 * @feature @spec/features/interactive-project-setup.md
 */
```

## ⚙️ Configuration Files

### TypeScript Configuration (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@spec/*": ["specs/*"],
      "@spec/components/*": ["specs/components/*"],
      "@spec/features/*": ["specs/features/*"],
      "@src/*": ["src/*"],
      "@lib/*": ["src/lib/*"]
    }
  }
}
```

### VS Code Settings (`.vscode/workspace.code-workspace`)
```json
{
  "settings": {
    "path-intellisense.mappings": {
      "@spec": "${workspaceRoot}/specs",
      "@spec/components": "${workspaceRoot}/specs/components",
      "@spec/features": "${workspaceRoot}/specs/features",
      "@src": "${workspaceRoot}/src",
      "@lib": "${workspaceRoot}/src/lib"
    }
  }
}
```

## 🚀 Benefits

### ✅ **Cleaner Code**
- Shorter, more readable paths in JSDoc comments
- Consistent navigation patterns across all files
- Less visual clutter in code headers

### ✅ **Better Maintainability**
- No need to calculate relative paths (`../../`)
- Paths work from any file location
- Easy to refactor directory structure

### ✅ **IDE Integration**
- IntelliSense support for path completion
- Ctrl+Click navigation works seamlessly
- Better error detection for broken links

### ✅ **Developer Experience**
- Intuitive path structure (`@spec/components/`)
- Self-documenting alias names
- Faster navigation and file discovery

## 🔧 Setup for New Files

When creating new implementation files, use this JSDoc template:

```typescript
/**
 * [Component Name] for SDD4AI CLI Tool
 * [Brief description of component purpose]
 * 
 * @specification @spec/components/[component-name].md
 * @feature @spec/features/[feature-name].md
 * @see {@link @spec/components/[component-name].md | Component Specification}
 */
```

## 🎯 Navigation Examples

### From Implementation to Specification
```typescript
// In src/lib/commands.ts
/**
 * @specification @spec/components/command-handler.md  // Ctrl+Click here
 */
```

### Cross-referencing Components
```typescript
// In src/lib/template-engine.ts
/**
 * Uses FileSystemManager (@spec/components/file-system-manager.md)
 * Implements TemplateSystem (@spec/features/template-system.md)
 */
```

## 📚 Related Documentation

- [Navigation Guide](./NAVIGATION.md) - Complete navigation instructions
- [Implementation Index](../IMPLEMENTATION.md) - Spec-to-code mapping
- [Project Specifications](./_manifest.md) - Main specification index
- [TypeScript Handbook - Path Mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)
