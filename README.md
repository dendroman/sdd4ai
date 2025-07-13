<div align="center">

# SDD4AI (Spec-Driven Development for AI)

[![npm version](https://badge.fury.io/js/sdd4ai.svg)](https://badge.fury.io/js/sdd4ai)
[![Build Status](https://github.com/dendroman/sdd4ai/workflows/CI/badge.svg)](https://github.com/dendroman/sdd4ai/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/sdd4ai.svg)](https://npmjs.org/package/sdd4ai)

**🚀 Bootstrap AI-optimized spec-driven development projects with ease**

*A modern CLI tool that sets up comprehensive specification-driven development workflows optimized for LLMs and AI agents*

[**Get Started**](#-quick-start) • [**Documentation**](http://localhost:3000/sdd4ai/) • [**Examples**](#-examples) • [**Contributing**](#-contributing) • [**Roadmap**](#-roadmap)

</div>

---

## 🎯 What is Spec-Driven Development for AI?

Spec-Driven Development for AI (SDD4AI) is a methodology specifically designed for **AI agents and LLMs** to work with comprehensive specifications created **before** implementation begins. This approach ensures:

- **🤖 AI-Optimized Structure** - Specifications formatted for optimal LLM understanding
- **📋 Agent Collaboration** - AI agents align on specifications before coding
- **🔍 Context-Rich Documentation** - Detailed context that AI models can leverage effectively
- **📚 Living AI Knowledge Base** - Specs that evolve with AI-assisted development
- **⚡ Accelerated AI Development** - Clear implementation paths for autonomous agents
- **🧠 Enhanced AI Reasoning** - Structured information that improves AI decision-making

---

## ✨ Features

<table>
<tr>
<td>

### 🏗️ **AI-Optimized Scaffolding**
- Complete `/specs` directory structure optimized for AI agents
- Pre-configured templates with AI-readable formatting
- Git repository initialization with AI-friendly commit patterns
- Package.json with AI development helper scripts

</td>
<td>

### 📖 **AI-Enhanced Documentation**
- Automatic Docusaurus integration with AI-optimized navigation
- Beautiful, searchable documentation that LLMs can parse
- Mobile-responsive design with AI agent accessibility
- Dark/light theme support with structured metadata

</td>
</tr>
<tr>
<td>

### 🎨 **AI-Ready Templates**
- Feature specification templates optimized for LLM understanding
- Component specification templates with structured AI context
- Data model documentation with machine-readable schemas
- Testing strategy templates designed for AI-assisted testing

</td>
<td>

### ⚡ **AI Developer Experience**
- Interactive CLI prompts designed for AI agent workflows
- TypeScript support with AI-optimized type definitions
- Modern tooling integration with AI development patterns
- Customizable workflows for autonomous development

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Installation & Usage

```bash
# Create a new AI-optimized spec-driven project
npx sdd4ai my-ai-project

# Or install globally
npm install -g sdd4ai
sdd4ai my-ai-project
```

### AI-Enhanced Interactive Setup

```bash
? Project Name: my-ai-project
? Project Description: An AI-assisted application with structured specifications
? Spec Owner: AI Development Team
? AI Agent Compatibility: Enhanced (recommended)
? Initialize git repository? Yes
? Set up Docusaurus documentation? Yes
? Include AI-optimized example specifications? Yes
```

### What You Get (AI-Optimized Structure)

```
my-ai-project/
├── 📁 specs/                    # AI-optimized specification directory
│   ├── 📄 index.md             # Main project manifest (AI-readable)
│   ├── 📁 features/            # Feature specifications (structured for LLMs)
│   ├── 📁 components/          # Component specifications (AI-parseable)
│   └── 📁 templates/           # Reusable templates (AI-friendly)
├── 📄 docusaurus.config.js     # Documentation configuration (AI-enhanced)
├── 📄 package.json             # Project configuration (AI development scripts)
└── 📄 README.md                # Project documentation (LLM-optimized)
```

---

## 📋 Requirements

- **Node.js** ≥ 14.0.0
- **npm** ≥ 6.0.0 or **yarn** ≥ 1.22.0
- **Git** (for repository initialization)

---

## 💻 Examples

### Basic Project Creation

```bash
# Minimal setup for AI development
npx sdd4ai my-ai-project --no-ui --no-examples

# Enterprise AI setup with all features
npx sdd4ai enterprise-ai-app \
  --spec-owner="AI Architecture Team" \
  --template="ai-enterprise" \
  --ai-enhanced
```

### Working with AI-Optimized Specifications

```bash
# Start AI-enhanced documentation server
npm run docs:dev

# Create new AI-optimized specifications
npm run spec:new:feature "AI User Authentication"
npm run spec:new:component "Smart Login Form"

# Build AI-parseable documentation
npm run docs:build

# Generate AI context summaries
npm run ai:context:generate
```

### AI-Enhanced CLI Options

```bash
sdd4ai <project-name> [options]

Options:
  --ai-enhanced        Enable AI-optimized templates and structure
  --no-ui              Skip Docusaurus installation
  --no-git             Skip git repository initialization  
  --no-examples        Skip AI example specifications
  --template <name>    Use AI template (default: "ai-default")
  --spec-owner <name>  Set default specification owner
  --ai-context         Generate AI context files
  --silent             Minimal output mode
  -h, --help           Display help information
  -v, --version        Display version number
```

---

## 🏗️ Architecture

### Technology Stack

| Technology | Purpose | Why We Chose It for AI |
|------------|---------|-------------------------|
| **TypeScript** | Core development | Type safety enables better AI code understanding and generation |
| **Commander.js** | CLI framework | Industry standard with excellent TypeScript support for AI tooling |
| **Inquirer** | Interactive prompts | Rich, accessible user interaction optimized for AI agent workflows |
| **Docusaurus** | Documentation | Modern, fast, and highly customizable with AI-parseable structure |
| **Jest** | Testing | Comprehensive testing with AI-friendly output and reporting |

### Project Structure

```
sdd4ai/
├── 📁 src/                     # Source code
│   ├── 📄 index.ts            # CLI entry point
│   ├── 📁 lib/                # Core functionality
│   │   ├── 📄 commands.ts     # Command handlers
│   │   ├── 📄 prompts.ts      # User interaction
│   │   ├── 📄 templates.ts    # Template processing
│   │   └── 📄 utils.ts        # Utility functions
│   └── 📁 __tests__/          # Test suites
├── 📁 templates/              # Project templates
├── 📁 specs/                  # Project specifications
└── 📁 docs/                   # Documentation source
```

---

## 📊 Status & Roadmap

### Current Status: `v0.1.0` - **In Development**

| Phase | Component | Status | Progress |
|-------|-----------|--------|----------|
| **Phase 1** | Project Structure | ✅ Complete | 100% |
| **Phase 1** | CLI Foundation | 🚧 In Progress | 70% |
| **Phase 2** | Template System | 📋 Planned | 0% |
| **Phase 3** | Docusaurus Integration | ✅ Complete | 100% |
| **Phase 4** | Advanced Features | 📋 Planned | 0% |
| **Phase 5** | NPM Publishing | 📋 Planned | 0% |

### 🎯 Upcoming Releases

#### v0.2.0 - **Core CLI** (Q3 2025)
- ✅ Interactive project setup
- ✅ Template system with variable substitution
- ✅ File system operations
- ✅ Input validation and error handling

#### v0.3.0 - **Enhanced Features** (Q4 2025)
- 🔄 Custom template support
- 🔄 Git hooks integration
- 🔄 CI/CD template generation
- 🔄 Plugin system

#### v1.0.0 - **Production Ready** (Q1 2026)
- � Comprehensive testing suite
- 🎯 Performance optimizations
- 🎯 Enterprise features
- 🎯 Complete documentation

---

## 🧪 Development

### Getting Started

```bash
# Clone the repository
git clone https://github.com/dendroman/sdd4ai.git
cd sdd4ai

# Install dependencies
npm install

# Start development
npm run dev

# Run tests
npm test

# Build the project
npm run build
```

### Development Commands

```bash
npm run dev          # Run CLI in development mode
npm run build        # Build TypeScript to JavaScript
npm run test         # Run test suite
npm run test:watch   # Run tests in watch mode
npm run lint         # Lint code with ESLint
npm run format       # Format code with Prettier
npm run docs:dev     # Start documentation server
npm run docs:build   # Build documentation
```

### Testing

We maintain high test coverage and use modern testing practices:

```bash
# Unit tests
npm run test

# Integration tests
npm run test:integration

# End-to-end tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

- 🐛 **Report bugs** via [GitHub Issues](https://github.com/dendroman/sdd4ai/issues)
- 💡 **Suggest features** through [GitHub Discussions](https://github.com/dendroman/sdd4ai/discussions)
- 📖 **Improve documentation** with pull requests
- 🔧 **Submit code** following our contribution guidelines

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Follow** our [specification-first development process](./specs/index.md)
4. **Write** tests for your changes
5. **Ensure** all tests pass: `npm test`
6. **Commit** using [Conventional Commits](https://conventionalcommits.org/)
7. **Submit** a pull request

### Code Style

- **TypeScript** for all source code
- **ESLint** + **Prettier** for formatting
- **Conventional Commits** for commit messages
- **100% test coverage** for new features

---

## 📚 Documentation

### 📖 **Comprehensive Guides**
- [**📋 Specifications**](http://localhost:3000/sdd4ai/) - Complete project specifications
- [**🚀 Getting Started**](#-quick-start) - Quick setup guide
- [**🏗️ Architecture**](#-architecture) - Technical overview
- [**🔧 API Reference**](./docs/api.md) - Detailed API documentation

### 🎯 **Examples & Tutorials**
- [**Basic Usage**](./docs/examples/basic.md) - Simple project setup
- [**Advanced Configuration**](./docs/examples/advanced.md) - Custom templates and workflows
- [**Enterprise Setup**](./docs/examples/enterprise.md) - Large-scale team usage
- [**Integration Guide**](./docs/examples/integration.md) - CI/CD and tooling

---

## 📈 Community & Support

<div align="center">

### Join Our Community

[![Discord](https://img.shields.io/discord/123456789?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/sdd4ai)
[![Twitter](https://img.shields.io/twitter/follow/sdd4ai?style=for-the-badge&logo=twitter)](https://twitter.com/sdd4ai)
[![GitHub Discussions](https://img.shields.io/github/discussions/dendroman/sdd4ai?style=for-the-badge&logo=github)](https://github.com/dendroman/sdd4ai/discussions)

</div>

### Getting Help

- 💬 **Chat** with us on [Discord](https://discord.gg/sdd4ai)
- 🐛 **Report issues** on [GitHub](https://github.com/dendroman/sdd4ai/issues)
- 💡 **Start discussions** in [GitHub Discussions](https://github.com/dendroman/sdd4ai/discussions)
- 📧 **Email** us at support@sdd4ai.com

### Statistics

<div align="center">

![GitHub Stars](https://img.shields.io/github/stars/dendroman/sdd4ai?style=social)
![GitHub Forks](https://img.shields.io/github/forks/dendroman/sdd4ai?style=social)
![GitHub Contributors](https://img.shields.io/github/contributors/dendroman/sdd4ai)
![GitHub Issues](https://img.shields.io/github/issues/dendroman/sdd4ai)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/dendroman/sdd4ai)

</div>

---

## � License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

```
MIT License

Copyright (c) 2025 SDD4AI contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

### Special Thanks

- **Contributors** - All the amazing developers who have contributed to this project
- **Community** - Our growing community of spec-driven development practitioners
- **Docusaurus Team** - For creating an amazing documentation framework
- **Open Source Community** - For the incredible tools and libraries we build upon

### Inspiration

This project was inspired by the need for better specification management in **AI-assisted software development**. We believe that clear, comprehensive, and **AI-optimized specifications** lead to better software and more effective collaboration between human developers and AI agents.

The rise of LLMs and AI coding assistants has created a unique opportunity to revolutionize how we structure and maintain project specifications, making them not just human-readable, but optimally structured for artificial intelligence to understand, reason about, and act upon.

---

<div align="center">

### ⭐ **Star us on GitHub!**

*If this project helped you, please consider giving it a star ⭐*

**Made with ❤️ by the SDD4AI team**

[**🏠 Homepage**](https://github.com/dendroman/sdd4ai) • [**📚 Documentation**](http://localhost:3000/sdd4ai/) • [**💼 Support**](mailto:support@sdd4ai.com)

</div>
| **`inquirer`** | Interactive prompts | Best UX for user input collection |
| **`fs-extra`** | File system operations | Enhanced file/directory management |
| **`chalk`** | Terminal styling | Professional, colored output |

### Optional Dependencies

- **`validate-npm-package-name`**: Ensure valid project names
- **`ora`**: Elegant terminal spinners for long operations
- **`boxen`**: Beautiful terminal boxes for success messages

---

## 🎪 User Experience Flow

### 1. Initial Command
```bash
npx create-spec-driven-project my-cool-app
```

### 2. Interactive Setup
```text
? Project Name: (my-cool-app)
? Project Description: A revolutionary new application
? Spec Owner: (e.g., Product Team) John Doe
? Initialize git repository? (Y/n) y
? Set up Docusaurus documentation UI? (Y/n) y
? Include example specifications? (Y/n) y
```

### 3. Execution Feedback
```text
✨ Creating spec-driven project: my-cool-app

✔︎ Creating project directory structure
✔︎ Generating /specs folder hierarchy
✔︎ Creating _manifest.md from template
✔︎ Setting up feature and component templates
✔︎ Installing Docusaurus dependencies
✔︎ Configuring documentation site
✔︎ Adding helper scripts to package.json
✔︎ Initializing git repository

🚀 Success! Your spec-driven project is ready.

📁 Project created at: ./my-cool-app

🏃‍♂️ Get started:
   cd my-cool-app
   npm run docs:dev    # Start documentation server
   npm run spec:new    # Create a new specification

📚 Learn more: https://github.com/your-org/create-spec-driven-project
```

---

## 📄 File Templates

### `specs/_manifest.md.template`
```markdown
# Project Specification: {{projectName}}

**Description:** {{projectDescription}}  
**Owner:** {{specOwner}}  
**Created:** {{createdDate}}  
**Status:** Planning  

---

## 📋 Specification Index

This manifest provides a complete index of all specifications for {{projectName}}.

### 🎯 Features
*(Feature specifications will be linked here)*

### 🧩 Components  
*(Component specifications will be linked here)*

### 📊 Data Models
*(Data model specifications will be linked here)*

---

## 🚀 Quick Actions

- **Create new feature spec:** `npm run spec:new feature`
- **Create new component spec:** `npm run spec:new component`
- **View documentation:** `npm run docs:dev`
- **Build documentation:** `npm run docs:build`

---

## 📖 Specification Guidelines

1. **Clarity:** Each spec should be clear and unambiguous
2. **Completeness:** Include all necessary details for implementation
3. **Traceability:** Link related specifications
4. **Version Control:** Track changes and decisions
```

### `specs/templates/feature.template.md`
```markdown
# Feature Specification: {{featureName}}

**Status:** {{status}}  
**Owner:** {{owner}}  
**Created:** {{createdDate}}  
**Last Updated:** {{updatedDate}}  

---

## 🎯 Overview

### Purpose
*Brief description of what this feature accomplishes*

### Success Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

---

## 📋 Requirements

### Functional Requirements
1. **REQ-F-001:** [Requirement description]
2. **REQ-F-002:** [Requirement description]

### Non-Functional Requirements
1. **REQ-NF-001:** [Performance requirement]
2. **REQ-NF-002:** [Security requirement]

---

## 🏗️ Implementation Plan

### Dependencies
- [ ] Component A
- [ ] API Endpoint B
- [ ] Database Schema C

### Tasks
- [ ] Task 1: [Description]
- [ ] Task 2: [Description]
- [ ] Task 3: [Description]

---

## 🧪 Testing Strategy

### Test Cases
1. **TC-001:** [Test scenario]
2. **TC-002:** [Test scenario]

### Acceptance Tests
- [ ] User can [action]
- [ ] System responds with [expected behavior]

---

## 📝 Notes & Decisions

*Document any important decisions, assumptions, or considerations*
```

---

## 📦 Project Structure

```
create-spec-driven-project/
├── 📄 package.json
├── 📄 README.md
├── 📄 index.js                    # Main CLI entry point
├── 📁 lib/
│   ├── 📄 commands.js             # Command definitions
│   ├── 📄 prompts.js              # User interaction logic
│   ├── 📄 templates.js            # Template processing
│   └── 📄 utils.js                # Utility functions
├── 📁 templates/
│   ├── 📄 _manifest.md.template
│   ├── 📄 feature.template.md
│   ├── 📄 component.template.md
│   └── 📄 package.json.template
└── 📁 docs/
    ├── 📄 installation.md
    ├── 📄 usage.md
    └── 📄 customization.md
```

---

## 🚀 Development Roadmap

### Phase 1: Core CLI Foundation
- [x] Set up Node.js project structure
- [ ] Implement basic command parsing with commander.js
- [ ] Create interactive prompts with inquirer
- [ ] Build file system operations with fs-extra
- [ ] Add terminal styling with chalk

### Phase 2: Template System
- [ ] Design template file structure
- [ ] Implement template variable replacement
- [ ] Create default specification templates
- [ ] Add template validation

### Phase 3: Docusaurus Integration
- [ ] Automatic Docusaurus installation
- [ ] Configuration file generation
- [ ] Theme customization for specs
- [ ] Navigation setup

### Phase 4: Enhanced Features
- [ ] Git repository initialization
- [ ] Package.json script injection
- [ ] Example specification generation
- [ ] Validation and error handling

### Phase 5: Publishing & Distribution
- [ ] NPM package configuration
- [ ] CI/CD pipeline setup
- [ ] Documentation website
- [ ] Release automation

---

## 🎨 CLI Commands Design

### Primary Command
```bash
npx create-spec-driven-project <project-name> [options]
```

### Options
```bash
--no-ui              # Skip Docusaurus installation
--no-git             # Skip git repository initialization
--no-examples        # Skip example specifications
--template <name>    # Use custom template
--spec-owner <name>  # Set default spec owner
--silent             # Minimal output mode
```

### Example Usage
```bash
# Basic project creation
npx create-spec-driven-project my-app

# Advanced project with custom options
npx create-spec-driven-project my-app \
  --spec-owner="Development Team" \
  --no-examples \
  --template=enterprise
```

---

## 📋 Package.json Configuration

```json
{
  "name": "create-spec-driven-project",
  "version": "1.0.0",
  "description": "Bootstrap spec-driven development projects with ease",
  "bin": {
    "create-spec-driven-project": "./index.js"
  },
  "keywords": [
    "cli",
    "scaffold",
    "specifications",
    "documentation",
    "development"
  ],
  "engines": {
    "node": ">=14.0.0"
  }
}
```

---

## 🧪 Testing Strategy

### Unit Tests
- Template processing logic
- File system operations
- Command parsing
- Validation functions

### Integration Tests
- End-to-end project creation
- Docusaurus integration
- Git repository setup
- Package.json modifications

### Manual Testing
- Interactive prompt flows
- Error handling scenarios
- Cross-platform compatibility
- Performance with large templates

---

## 🤝 Contributing

### Development Setup
```bash
git clone https://github.com/your-org/create-spec-driven-project
cd create-spec-driven-project
npm install
npm link  # For local testing
```

### Testing Your Changes
```bash
# Test the CLI locally
create-spec-driven-project test-project

# Run automated tests
npm test

# Check code quality
npm run lint
```

---

## 📚 Documentation Plan

### User Documentation
- **Installation Guide:** How to install and use the CLI
- **Usage Examples:** Common scenarios and workflows
- **Template Customization:** How to create custom templates
- **Integration Guide:** Using with existing projects

### Developer Documentation
- **Architecture Overview:** How the CLI is structured
- **API Reference:** Internal functions and modules
- **Contributing Guide:** How to contribute to the project
- **Release Process:** How releases are managed

---

## 🎯 Success Metrics

### User Adoption
- NPM download statistics
- GitHub stars and forks
- Community feedback and issues

### User Experience
- Time to first working project
- User satisfaction surveys
- Support request volume

### Code Quality
- Test coverage percentage
- Code review feedback
- Bug report frequency

---

## 🔮 Future Enhancements

### Advanced Features
- **Multiple Templates:** Enterprise, startup, open-source variants
- **Specification Validation:** Automated quality checks
- **Integration Hooks:** Connect with project management tools
- **AI Assistance:** Auto-generate specification drafts

### Platform Expansion
- **VS Code Extension:** Integrate with development environment
- **Web Interface:** Browser-based project creation
- **CI/CD Templates:** Pre-configured pipelines
- **Team Collaboration:** Multi-user specification workflows

---

## 📞 Support & Community

- **GitHub Issues:** Report bugs and request features
- **Discord/Slack:** Community discussions
- **Documentation:** Comprehensive guides and examples
- **Video Tutorials:** Step-by-step walkthroughs

---

*This README serves as the comprehensive planning document for the create-spec-driven-project CLI tool. It will be updated as the project evolves and new features are added.*
