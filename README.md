## Description

This is a repository created to reproduce a bug with storybook : https://github.com/storybookjs/storybook/issues/23669

## How to use

These should be the minimal reproduction steps once this repo is cloned

```
cd libraryA
npm install
npm run build libraryA
cd dist/library-a
npm link
cd ../../../libraryB
npm install
npm link library-a
npm run storybook
```
