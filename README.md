# sass-importer-npm

Import Sass files installed through npm. See [node-sass importer](https://github.com/sass/node-sass#importer--v200---experimental) option.

## Basic usage
> The following example is using Gulp.

### Setup

```bash
npm install sass-importer-npm \
	gulp \
	gulp-sass
```

### Something to import
> Next, we'll use Bootstrap just for the sake of the example.

```bash
npm install bootstrap@v4.0.0-alpha.2
```

### sass/style.scss

```sass
@import 'bootstrap/sass/variables';

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