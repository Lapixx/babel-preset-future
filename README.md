# babel-preset-future
Babel preset including `es2015`, `es2016`, `es2017` (under `env`) and `stage-0` so
you can enjoy JavaScript with all of its new and experimental features.

## Install

Using Yarn:

```bash
yarn add babel-preset-future
```

Or npm:

```bash
npm install babel-preset-future --save
```

## Configuration

Simply add it to your `.babelrc` file:

```json
{
    "presets": ["future"]
}
```

Or when using the CLI:

```bash
babel app.js --presets future
```

## Options

Options will be passed down to the `babel-preset-env` preset. This means you can,
for example, disable the transformation of ES6 modules to CJS:

```json
{
    "presets": [
        ["future", { "modules": false }]
    ]
}
```
