# Navigation Guide: Code to Specifications

This guide explains how to navigate from implementation code to specifications in VS Code.

## 🚀 Quick Navigation Methods

### 1. **Ctrl+Click Navigation (Recommended)**
- **How:** Hold `Ctrl` (or `Cmd` on Mac) and click on file paths in JSDoc comments
- **Works with:** All `@specification` and `@feature` paths in code headers
- **Example:** In `src/lib/commands.ts`, Ctrl+click on `../../specs/components/command-handler.md`

### 2. **Command Palette**
- **Shortcut:** `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
- **Commands:**
  - `Go to File` → Type spec name (e.g., "command-handler")
  - `Go to Symbol in Workspace` → Search for component names

### 3. **Quick Open**
- **Shortcut:** `Ctrl+P` (or `Cmd+P` on Mac)
- **Usage:** Type `specs/` to see all specifications
- **Filter:** Add component or feature name to narrow results

### 4. **File Explorer**
- Navigate to `specs/components/` or `specs/features/`
- Use the `IMPLEMENTATION.md` file for complete mapping

## 📁 File Structure Navigation

```
src/
├── index.ts                     → specs/components/cli-entry-point.md
├── lib/
│   ├── commands.ts              → specs/components/command-handler.md
│   ├── template-engine.ts       → specs/components/template-engine.md
│   ├── file-system-manager.ts   → specs/components/file-system-manager.md
│   ├── user-prompt-interface.ts → specs/components/user-prompt-interface.md
│   ├── types.ts                 → specs/components/template-variables.md
│   └── constants.ts             → specs/components/project-configuration.md
```

## 🔍 JSDoc Navigation Patterns

Each implementation file contains navigation hints in its header using clean path aliases:

```typescript
/**
 * Component Description
 * 
 * @specification @spec/components/component-name.md
 * @feature @spec/features/feature-name.md
 * @see {@link @spec/components/component-name.md | Component Specification}
 * 
 * Navigation:
 * - Ctrl+Click on paths above to open specs
 * - Use Command Palette: "Go to File" -> type "component-name"
 * - Check IMPLEMENTATION.md for complete mapping
 */
```

### Path Aliases Available:
- `@spec/*` - Maps to `specs/*` (all specifications)
- `@spec/components/*` - Maps to `specs/components/*` (component specs)
- `@spec/features/*` - Maps to `specs/features/*` (feature specs)
- `@src/*` - Maps to `src/*` (source code)
- `@lib/*` - Maps to `src/lib/*` (library modules)

## ⚙️ VS Code Extensions (Recommended)

Install these extensions for enhanced navigation:

1. **Path Intellisense** - Auto-completion for file paths
2. **Markdown All in One** - Better markdown support
3. **TypeScript Importer** - Auto-import management

## 🎯 Navigation Tips

### From Code to Spec
1. **Find JSDoc comment** at the top of any implementation file
2. **Ctrl+Click** on the `@specification` path
3. **Alternative:** Use Command Palette → "Go to File" → type spec name

### From Spec to Code
1. **Check IMPLEMENTATION.md** for complete mapping
2. **Use global search** (Ctrl+Shift+F) for component names
3. **Look for JSDoc references** to the spec file

### Finding Related Files
1. **Search workspace** for component names
2. **Use file patterns** like `**/command-handler*` 
3. **Check git history** for related changes

## 📚 Reference Files

- **Complete Mapping:** [`IMPLEMENTATION.md`](../IMPLEMENTATION.md)
- **Project Overview:** [`README.md`](../README.md)
- **Specification Index:** [`specs/_manifest.md`](../specs/_manifest.md)

## 🚀 Pro Tips

1. **Bookmark frequently used specs** in VS Code
2. **Use workspace search** to find all references to a component
3. **Keep IMPLEMENTATION.md open** as a reference tab
4. **Use split view** to have spec and code open simultaneously
5. **Create custom keyboard shortcuts** for opening specs directories

## ⌨️ Custom Keybindings

Add to your VS Code `keybindings.json`:

```json
[
  {
    "key": "ctrl+shift+s",
    "command": "workbench.action.quickOpen",
    "args": "specs/components/"
  },
  {
    "key": "ctrl+shift+f",
    "command": "workbench.action.quickOpen",
    "args": "specs/features/"
  }
]
```
