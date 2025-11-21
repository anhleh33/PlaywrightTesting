# Javascript
## Set up enviroment
- Install Nodejs
- User Nodejs in command to run (e.g., node + name file)
- [OPTIONAL] Using Quokka by search bar (">Quokka.js: New File")

## Jasmine for NodeJS
- Add Jasmine to your package.json
```bash
npm install --save-dev jasmine
```
- Initialize Jasmine in your project
```bash
npx jasmine init
```
- Set jasmine as your test script in your package.json (inside the main curly brackets)
```bash
"scripts": {
    "test": "jasmine"
}
```
Run your tests
```bash
npx jasmine
```
**⚠️ CAUTION:** Make sure that your Jasmine folder is correct (maybe "spec" and "your-project" are merged):
```bash
your-project/
│
├── package.json
│
├── spec/                     ← Jasmine looks here for test files
│   │
│   ├── support/              ← Jasmine config lives here
│   │   └── jasmine.json
│   │
│   └── example.spec.js       ← Your test files (*.spec.js)
│
└── src/                      ← (Optional) Your app code
    └── example.js
```