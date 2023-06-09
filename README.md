# Phork/it

[![Tests](https://github.com/phork/phorkit/actions/workflows/ci.yml/badge.svg)](https://github.com/phork/phorkit/actions/workflows/ci.yml) [![Publish](https://github.com/phork/phorkit/actions/workflows/publish.yml/badge.svg)](https://github.com/phork/phorkit/actions/workflows/publish.yml)

To see examples and documentation go to [https://phorkit.phork.org/](https://phorkit.phork.org/).

## Introduction

Phork/it is a UI kit built with React and TypeScript. It provides a customizable and accessible library of components that can be used to speed up React application development.

## Getting started

Include the common styles and fonts in `index.js`.

```
import '@phork/phorkit/lib/styles/normalize.css';
import '@phork/phorkit/lib/styles/fonts.css';
import '@phork/phorkit/lib/styles/common.css';
```

Include the basic providers in `App.js`.

```javascript
<ThemeProvider themeId={light | dark}>
  <AccessibilityProvider>
    <Modals>hello world</Modals>
  </AccessibilityProvider>
</ThemeProvider>
```

The Phork/it CSS files have also been published separately so that they can be used outside of React, or included in a custom React component.

[Contribution guidelines for this project](CONTRIBUTING.md)

## Themes

Phork/it comes with a light theme and a dark theme. The primary accent color is a medium blue `#0060ce` in light mode, and a deep sky blue `#00baee` in dark mode.

These accent colors can be changed globally or on a per-component basis using CSS custom properties. For example:

```
:root {
  --phork-accent-color: #642da0;
  --phork-accent-color-contrast: #ffffff;
  --phork-accent-color-L10: #803DC8;
  --phork-accent-color-L20: #9D69D5;
  --phork-accent-color-L30: #B995E1;
  --phork-accent-color-D10: #57278C;
  --phork-accent-color-D20: #4B2278;
  --phork-accent-color-D30: #3E1C64;
  --phork-accent-color-shade: #F3EFF8;
  --phork-accent-color-O5: rgba(100, 45, 160, 0.05);
  --phork-contrast-color: #642da0;
}
```

The [documentation](https://phorkit.phork.org/) toolbar includes a widget to generate these colors.
# phorkit-develop
