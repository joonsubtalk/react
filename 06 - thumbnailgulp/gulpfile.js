var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

// declares a new task
gulp.task('default', function(){
  return gulp.src('src/**')         // load/get all files from here
    .pipe(react())                  // turn .jsx to .js
    .pipe(concat('application.js')) // combine all files to application.js
    .pipe(gulp.dest('./'));          // in current working directory.
});
