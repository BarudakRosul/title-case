<div align="center">
  <img src="../image/logo.svg" alt="Title Case Logo" width="210"/>
  <h1>Title Case</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/title-case/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Laporkan Bug</a> · <a href="https://github.com/BarudakRosul/title-case/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Ajukan Fitur</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/title-case/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/title-case/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/title-case"><img src="https://img.shields.io/node/v/%40barudakrosul%2Ftitle-case" alt="Node Engines"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/title-case"><img src="https://img.shields.io/npm/v/%40barudakrosul%2Ftitle-case" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/title-case" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/title-case"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Ftitle-case" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/title-case/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/title-case?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/title-case/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/title-case?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/title-case/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/title-case" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [License](#license)
7. [Acknowledge](#acknowledge)
8. [Donate](#donate)
9. [Changelog](#changelog)

## Introduction

Title Case is a JavaScript extension that converts string text into a title format, where the first letter of each word is capitalized. It is made as similar as possible to the `title()` function in Python.

## Features

Title Case offers the following features:

- Convert string text to title format.
- Option to consider hyphens as word boundaries.
- Can be integrated into TypeScript code.

## Installation

To install Split Words locally, follow these installation steps:

```shell
npm install @barudakrosul/title-case
```

## Usage

To start using Split Words, import the module first:

**1\. CommonJS**
```javascript
require("@barudakrosul/title-case");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import "@barudakrosul/title-case";
```

**3\. TypeScript**
```typescript
import "@barudakrosul/title-case";
```

Example of usage:

```javascript
let text = "hello world! this is an example-string.";
console.log(text.toTitle());

// Result:
// "Hello World! This Is An Example-String."
```

Example if the `breakonhyphens` option is set to `false`:

```javascript
let text = "hello world! this is an example-string.";
console.log(text.toTitle(false));

// Result:
// "Hello World! This Is An Example-string."
```

## Contribution

Contributions to Title Case are greatly appreciated! Whether reporting bugs, suggesting new features, or contributing to code improvements.

## License

Title Case is licensed under the CC0-1.0 License - see the [LICENSE](/LICENSE) file for details.

## Acknowledge

Title Case appreciates the support and contributions of the following individuals and open source projects:

- [@Achixz](https://github.com/Achixz) - Lead developer and creator of the application.
- Open source community - For valuable contributions to the tools and libraries used in this project.

## Donate

We really appreciate your support to continue developing this project. If you find this project useful, you can support us with a donation:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Every donation, no matter the amount, means a lot to us. Thank you for your support! ❤️

## Changelog

Keep up with the latest changes and updates of Title Case by referring to [Changelog](https://github.com/BarudakRosul/title-case/releases).

Terima kasih telah memilih Title Case! Kami bertujuan untuk memberikan solusi yang mudah untuk mengubah teks string ke dalam format judul.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)