

## Build System

I use gulp for my build system.

I follow this guide to get es6 working.

https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/

I like having smaller files, so I split up every task into its own file, as
described in a gulp recipe.

https://github.com/gulpjs/gulp/blob/master/docs/recipes/split-tasks-across-multiple-files.md

I build JavaScript using Browserify, which requires a special recipe.

https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-transforms.md

I prevent gulp from crashing when there is invalid JavaScript using the articles
below. In particular, I use gulp-plumber and custom handlers.

https://gist.github.com/shovon/c876f9760c6bc74c96b4
https://scotch.io/tutorials/prevent-errors-from-crashing-gulp-watch
