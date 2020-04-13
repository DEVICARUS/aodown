<h1 align="center">Welcome to aodown 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> A way of writing an array of objects in markdown

**This is a parser of the same-name format `aodown`**

## Usage

#### 1. Add `aodown` to your dependencies 
```sh
yarn add aodown
# OR
npm install aodown
```

#### 2. Use
```js
const aodown = require('aodown')

parsed = aodown(`
\`Parameter:\` Value
\`Parameter 2:\` Value 2
---
\`Another parameter:\`
\`\`\`text
A
Multiline
Value
\`\`\`
`)

console.log(parsed)

//  [
//    { parameter: 'Value', parameter_2: 'Value 2' },
//    { another_parameter: 'A\nMultiline\nValue' }
//  ]

```

## Syntax

```md
FIRST OBJECT OF THE ARRAY
(Everything not matching the syntax is considered a comment)

// Other parameters depend on Action
`First parameter:` Inline value

`Second parameter:`
```text
Multiline
value
```‎

---

SECOND OBJECT OF THE ARRAY

`A parameter:` Value
```