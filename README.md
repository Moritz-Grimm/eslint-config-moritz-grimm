# eslint-config-moritz-grimm

My preferred ESLint config for JavaScript and TypeScript projects.

**Disclaimer:** This config is built for my personal use. There might be rough edges or opinionated choices that don't fit your workflow. Feel free to use it, but adjust it to your workflow.

---

## Features

- **TypeScript support** with type-checked rules
- **Stylistic rules** via `@stylistic/eslint-plugin` (no Prettier needed)
- **ESLint 9 Flat Config** format

---

## What's included?

### Code Quality Rules

- Strict equality checks (`===` over `==`)
- No unreachable code
- Prefer `const` over `let`
- No duplicate imports

### TypeScript Rules

- Type-checked linting (requires `tsconfig.json`)
- Warning on `any` usage
- Error on missing `await` for promises
- Warning on explicit function return types

### Code Style

- **Indentation:** 4 spaces
- **Semicolons:** Always
- **Quotes:** Handled by stylistic plugin
- **Brace style:** 1TBS (one true brace style)
- **Trailing commas:** Always in multiline

---

## Scripts

Add these to your `package.json`:

```json
{
  "scripts": {
    "lint": "npx eslint",
    "lint:fix": "npx eslint --fix"
  }
}
```

---

## Workflow

Here’s a simple example [workflow](.github/workflows/lint.yaml) for automatic linting on push to master, main, or dev, as well as on pull requests to the same branches.

---

## Requirements

- **ESLint:** ^9.37.0
- **TypeScript:** >=5.0.0 (if using TypeScript files)
- **Node.js:** >=18.0.0

---

## Why not Prettier?

I prefer having all formatting rules in ESLint via `@stylistic/eslint-plugin`. One tool, one config, no conflicts.  
If you prefer Prettier, you'll need to disable the stylistic rules.

---

## 📄 License

[MIT](license)
