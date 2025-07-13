# SDD4AI Specifications Index

Welcome to the SDD4AI (Spec-Driven Development for AI) specifications directory. This folder contains all the authoritative specifications for the project.

**Project:** SDD4AI - Spec-Driven Development for AI  
**Description:** A Command Line Interface (CLI) tool published as an NPM package to bootstrap spec-driven development projects with AI-optimized structure  
**Owner:** dendroman  
**Created:** July 13, 2025  
**Last Updated:** July 13, 2025  
**Status:** In Development  
**Current Version:** 0.1.0  

---

## 📂 Specifications Structure

### 📋 Main Documentation
- [`_manifest.md`](./_manifest.md) - Complete project specification manifest
- [`index.md`](./index.md) - This file - specifications overview

### 🧩 Component Specifications
- [`components/`](./components/) - Individual component specifications
  - [CLI Entry Point](./components/cli-entry-point.md)
  - [Command Handler](./components/command-handler.md)
  - [Template Engine](./components/template-engine.md)
  - [File System Manager](./components/file-system-manager.md)
  - [User Prompt Interface](./components/user-prompt-interface.md)
  - [Project Configuration](./components/project-configuration.md)
  - [Template Variables](./components/template-variables.md)

### 🎯 Feature Specifications
- [`features/`](./features/) - Feature-level specifications
  - [CLI Command Parser](./features/cli-command-parser.md)
  - [Interactive Project Setup](./features/interactive-project-setup.md)
  - [Template System](./features/template-system.md)
  - [Docusaurus Integration](./features/docusaurus-integration.md)
  - [Git Repository Initialization](./features/git-repo-init.md)

### 📄 Template Specifications
- [`templates/`](./templates/) - Template and example specifications

## 🧭 Navigation & Development

### Navigation Documentation
- [**PATH_ALIASES.md**](./PATH_ALIASES.md) - Path alias configuration (@spec/*)
- [**NAVIGATION.md**](./NAVIGATION.md) - Complete navigation guide
- [**Implementation Index**](../IMPLEMENTATION.md) - Spec-to-code mapping

### Development Principles
1. **Specifications are the source of truth** - All implementation follows specs
2. **One-way linking** - Code links to specs, not vice versa
3. **Path aliases** - Use @spec/* for clean navigation
4. **AI-optimized** - Structured for LLM understanding

## 🎯 Quick Navigation

### From Code to Specifications
Use JSDoc comments with path aliases:
```typescript
/**
 * @specification @spec/components/component-name.md
 * @feature @spec/features/feature-name.md
 */
```

### From Specifications to Code
Check the [Implementation Index](../IMPLEMENTATION.md) for complete mapping.

## 🚀 Quick Actions

- **Create new feature spec:** `npm run spec:new feature`
- **Create new component spec:** `npm run spec:new component`
- **View documentation:** `npm run docs:dev`
- **Build documentation:** `npm run docs:build`
- **Build CLI:** `npm run build`
- **Test CLI:** `npm test`
- **Run CLI in dev mode:** `npm run dev`

## 📖 Writing Specifications

Follow the established patterns in existing specifications:
- Clear overview with purpose and responsibilities
- Interface definitions with inputs/outputs
- Implementation details and status
- Testing strategy
- Notes and decisions

For detailed guidelines, see [`_manifest.md`](./_manifest.md).

## 🏗️ Specification Standards

### AI-Optimized Structure
- **AI Clarity:** Each spec should be optimally structured for LLM understanding
- **LLM Completeness:** Include all necessary context for AI agent implementation
- **Structured Traceability:** Link related specifications with machine-readable references
- **AI Version Control:** Track changes with AI-friendly commit patterns and metadata

### Quality Guidelines
1. **Clarity:** Each spec should be clear and unambiguous
2. **Completeness:** Include all necessary details for implementation
3. **Traceability:** Link related specifications
4. **Version Control:** Track changes and decisions
5. **Status Tracking:** Keep implementation status up-to-date
