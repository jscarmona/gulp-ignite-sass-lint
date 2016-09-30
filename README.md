# gulp-ignite-sass-lint

[![Build Status](https://travis-ci.org/jscarmona/gulp-ignite-sass-lint.svg?branch=master)](https://travis-ci.org/jscarmona/gulp-ignite-sass-lint)
[![npm](https://img.shields.io/npm/dt/gulp-ignite-sass-lint.svg?maxAge=2592000)]()
[![GitHub tag](https://img.shields.io/github/release/jscarmona/gulp-ignite-sass-lint.svg?maxAge=2592000)]()

## install

**NPM**

```bash
$ npm install --save-dev gulp-ignite gulp-ignite-sass-lint
```

## example

```js
import { task } from 'gulp-ignite';
import sassLint from 'gulp-sass-lint';

task(sassLint);
// or if you want to rename
// task('cool-sass-lint-name', sassLint);

```

## usage

Run sass lint on src files.

```bash
$ gulp sass-lint
```

##### options
- `src` - The source files that should be linted. (**Default:** `['./client/app/**/*.scss']`)
- `options` - Options to pass through to the sass-lint. Check out [sass-lint options](https://github.com/sasstools/gulp-sass-lint#sasslintoptions) to see the full list. (**Default:** `{ formatter: 'stylish',
'merge-default-rules': true }`)
- `rules` - Sass lint rules to use. Check out [sass lint rules](https://github.com/sasstools/sass-lint/tree/master/docs/rules) to see the full list. (**Default:** `{}`)
- `ignore` - Glob of files to ignore when linting. (**Default:** `null`)
- `configFile` - Path to custom sass-lint.yml file. (**Default:** `null`)
- `failOnError` - If task should exit on an error. (**Default:** `true`)
- `deps` - Any gulp tasks that task would be dependent of. (**Default:** `[]`)

## license

The MIT License (MIT)

Copyright (c) 2016 Javier Carmona

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
