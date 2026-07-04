# 📦 package.json - 20 Important Points

## 1. What is package.json?

`package.json` is the configuration file for every Node.js project. It contains project information, dependencies, scripts, and other settings required to build and run the application.

---

## 2. Why do we need package.json?

It helps npm understand your project and allows developers to install all required packages with a single command.

```bash
npm install
```

---

## 3. How to Create package.json?

Initialize a new project using:

```bash
npm init
```

or create it instantly using default values:

```bash
npm init -y
```

---

## 4. What Information Does package.json Store?

It stores:

- Project name
- Version
- Description
- Scripts
- Dependencies
- Dev Dependencies
- License
- Browser support
- Author details

---

## 5. Project Name

```json
"name": "react-learning"
```

The project name should be unique, lowercase, and use hyphens instead of spaces.

---

## 6. Version

```json
"version": "1.0.0"
```

Versions follow Semantic Versioning.

```
MAJOR.MINOR.PATCH
```

Example:

```
2.4.1
```

---

## 7. Description

```json
"description": "Learning React from scratch"
```

Provides a short summary of your project.

---

## 8. Scripts

Scripts are shortcuts for frequently used commands.

```json
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
}
```

Run them using:

```bash
npm run start
```

---

## 9. Dependencies

Packages required in production.

Example:

```json
"dependencies": {
    "react": "^19.0.0"
}
```

Install using:

```bash
npm install react
```

---

## 10. Dev Dependencies

Packages required only while developing the application.

Example:

```json
"devDependencies": {
    "parcel": "^2.15.4"
}
```

Install using:

```bash
npm install -D parcel
```

---

## 11. dependencies vs devDependencies

| dependencies | devDependencies |
|--------------|-----------------|
| Needed in production | Needed during development |
| Example: React | Example: Parcel |

---

## 12. package-lock.json

This file stores the exact versions of every installed package, ensuring consistent installations across all environments.

---

## 13. node_modules

Contains all installed packages and their dependencies.

Never modify this folder manually.

---

## 14. Should node_modules be pushed to Git?

❌ No.

Add it to `.gitignore`.

Anyone can recreate it using:

```bash
npm install
```

---

## 15. What Happens After npm install?

npm automatically:

- Downloads packages
- Installs dependencies
- Creates `node_modules`
- Updates `package.json`
- Updates `package-lock.json`

---

## 16. Common npm Commands

```bash
npm init
npm init -y
npm install react
npm install -D parcel
npm run start
npm run build
```

---

## 17. Best Practices

- Keep package names meaningful.
- Install build tools as dev dependencies.
- Commit `package.json` and `package-lock.json`.
- Never commit `node_modules`.

---

## 18. Common Mistakes

- Pushing `node_modules` to Git.
- Deleting `package-lock.json`.
- Installing development tools as production dependencies.
- Forgetting to define useful scripts.

---

## 19. Interview Questions

- What is `package.json`?
- Why is it required?
- What is the difference between `dependencies` and `devDependencies`?
- What is `package-lock.json`?
- Why shouldn't `node_modules` be committed?

---

## 20. Key Takeaways

- `package.json` is the configuration file for a Node.js project.
- It manages dependencies, scripts, and project metadata.
- It makes projects reproducible and easier to collaborate on.
- Understanding `package.json` is essential for every React and Node.js developer.