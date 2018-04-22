

## Build System

I use gulp for my build system.

I follow this guide to get es6 working.

https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/

I like having smaller files, so I split up every task into its own file, as
described in a gulp recipe.

https://github.com/gulpjs/gulp/blob/master/docs/recipes/split-tasks-across-multiple-files.md

I build JavaScript using Browserify, which requires a special recipe.

https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-transforms.md
