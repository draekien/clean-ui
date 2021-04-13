<p align="center">
  <img src="docs/wpei-logo.svg" alt="the logo of wpei.me">
</p>

<h1 align="center">Clean UI</h1>

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Clean UI is a custom React JS component library built using
[theme-ui](https://github.com/system-ui/theme-ui).
The aim of this library is to create a catalogue of
plug and play components that are clean and functional
so that they can be used in a wide variety of situations.

## Storybook

A storybook of this component library is published on Chromatic. You can view it
[here](https://<branch>--60751defa4d2780021f0bf50.chromatic.com)

## Getting Started

Install the package using either `npm` or `yarn`

```sh
npm install @draekien/clean-ui
```

or

```sh
yarn add @draekien/clean-ui
```

To provide the theme in context, wrap your application with the `ThemeProvider` component.

```js
// basic usage
import { ThemeProvider } from 'clean-ui';

export default (props) => <ThemeProvider>{props.children}</ThemeProvider>;
```
