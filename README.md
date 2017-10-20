# metalsmith-filenames [![Travis Build Status](https://travis-ci.org/MoOx/metalsmith-filenames.svg)](https://travis-ci.org/MoOx/metalsmith-filenames)

> Metalsmith plugin to add filenames to entries

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/6RNUx3a3Vj2k5iApeppsc9L9/MoOx/metalsmith-filenames'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/6RNUx3a3Vj2k5iApeppsc9L9/MoOx/metalsmith-filenames.svg' />
</a>

## Installation

```console
$ npm install metalsmith-filenames
```

## Usage

```js
import Metalsmith from "metalsmith"
import filenames from "metalsmith-filenames"

new Metalsmith("./")
  .use(
    filenames()
  )
  .build(err => {if (err) {throw err}})
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
