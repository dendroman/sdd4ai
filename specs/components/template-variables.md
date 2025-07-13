# Data Model: Template Variables

**Status:** Implemented  
**Owner:** dendroman  
**Created:** July 13, 2025  
**Last Updated:** July 13, 2025  

---

## 🎯 Overview

### Purpose
Defines the template variable schema and available substitution patterns for AI-readable template processing.

### Responsibilities
- Define template variable interface structure
- Specify available variable types
- Enable type-safe template processing
- Support AI-friendly variable naming conventions

---

## 📊 Data Models

### TemplateVariables Interface
```typescript
interface TemplateVariables {
  [key: string]: string | number | boolean | Date;
  projectName?: string;      // Project name for file naming
  specOwner?: string;        // Specification owner/author
  createdDate?: Date;        // Project creation timestamp
  description?: string;      // Project description
  packageName?: string;      // Sanitized npm package name
  version?: string;          // Initial project version
  author?: string;           // Project author (usually same as specOwner)
}
```

### Common Variables
| Variable | Type | Description | Example |
|----------|------|-------------|---------|
| `projectName` | string | Original project name | "My Awesome Project" |
| `packageName` | string | Sanitized package name | "my-awesome-project" |
| `specOwner` | string | Specification owner | "Development Team" |
| `author` | string | Project author | "Development Team" |
| `description` | string | Project description | "Spec-driven project..." |
| `version` | string | Initial version | "0.1.0" |
| `createdDate` | Date | Creation timestamp | 2025-07-13T... |

---

## 🎯 Template Syntax

### Variable Substitution
- **Basic syntax:** `{{ variableName }}`
- **With whitespace:** `{{ variable }}` or `{{variable}}`
- **Case sensitive:** Variable names must match exactly
- **Type conversion:** All values converted to strings in output

### Examples
```markdown
# {{ projectName }}

**Owner:** {{ specOwner }}  
**Created:** {{ createdDate }}  
**Version:** {{ version }}  

## Description
{{ description }}
```

---

## 🏗️ Implementation Details

### Current Implementation
- ✅ Basic TemplateVariables interface defined
- ✅ Support for multiple data types
- ✅ Template variable generation from ProjectConfig
- ✅ Package name sanitization
- 🔄 Advanced template features (conditionals, loops)
- 🔄 Custom variable types and validation

### Variable Generation
Variables are generated from ProjectConfig by the UserPromptInterface:
1. Extract basic project information
2. Sanitize project name for package.json
3. Add metadata (creation date, version)
4. Create consistent author/specOwner mapping

---

## 🧪 Validation Rules

### Variable Names
- Must be valid JavaScript identifiers
- Cannot contain spaces or special characters
- Should use camelCase convention
- Cannot start with numbers

### Variable Values
- Strings: No length limit, support Unicode
- Numbers: Integer or floating-point
- Booleans: true/false values
- Dates: ISO 8601 format when rendered

---

## 📝 Notes & Decisions

### Technical Decisions
- **Flexible typing:** Supports multiple primitive types
- **String conversion:** All values become strings in templates
- **Extensible interface:** Easy to add new variables
- **AI-friendly naming:** Clear, descriptive variable names

### Future Enhancements
- Add nested object support for complex variables
- Implement conditional variable rendering
- Support for array/list variables
- Add variable validation and type checking
- Custom variable transformers (e.g., formatting dates)
