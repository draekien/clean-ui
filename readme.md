<p align="center">
  <img src="docs/wpei-logo.svg" alt="the logo of wpei.me">
</p>

<h1 align="center">Clean UI</h1>

Clean UI is a custom React JS component library built using
[theme-ui](https://github.com/system-ui/theme-ui).
The aim of this library is to create a catalogue of
plug and play components that are clean and functional
so that they can be used in a wide variety of situations.

## Getting Started

Install the package using either `npm` or `yarn`

```sh
npm install clean-ui
```

or

```sh
yarn add clean-ui
```

To provide the theme in context, wrap your application with the `ThemeProvider` component.

```js
// basic usage
import { ThemeProvider } from 'clean-ui';

export default (props) => <ThemeProvider>{props.children}</ThemeProvider>;
```