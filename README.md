# sass-importer-npm

[![npm version](https://badge.fury.io/js/sass-importer-npm.svg)](https://badge.fury.io/js/sass-importer-npm)

Import Sass files installed through npm packages using [node-sass importer](https://github.com/sass/node-sass#importer--v200---experimental) option. Works with gulp-sass and webpack!

Created for our awesome [AdminPlus Lite](https://github.com/themekit/adminplus) Bootstrap Admin Template.

## Basic usage
> The following example is using gulp and gulp-sass, but could be used just as easily with node-sass directly and webpack or other build tools. The main thing to note is how we're passing the importer option to node-sass.

### Prerequisite
> Make sure you have gulp installed globally. If not, run `npm install -g gulp`

#### Setup

```bash
npm install sass-importer-npm gulp gulp-sass
```

### Something to import
> Next, we'll use Bootstrap just for the sake of the example.

```bash
npm install bootstrap@v4.0.0-alpha.2
```

### sass/style.scss

```sass
@import 'bootstrap/scss/variables';

// That's it!
```

### gulpfile.js

```js
var gulp = require('gulp');
var sass = require('gulp-sass');
var importer = require('sass-importer-npm');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({ importer: importer }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
```

### Run!

```bash
gulp sass
```