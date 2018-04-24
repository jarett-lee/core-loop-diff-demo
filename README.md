
## Source

The initial code is from early in my bounce-idle game project.

https://github.com/jarett-lee/bounce-idle/tree/222191bf62a94cb3c1ebd83a20a92413c2b72534

## Timestep

I went to a blog to find some advice about my main loop.

https://gafferongames.com/post/fix_your_timestep/

## Rendering

Generally try to keep the number of render requests under 3000, under the advice
of personal testing and the following blog.

| 131071 | 245 ms |
|-------:|-------:|
|  65535 | 122 ms |
|  32767 |  55 ms |
|  16383 |  26 ms |
|   8191 |  13 ms |

https://www.construct.net/blogs/construct-official-blog-1/html5-2d-gaming-performance-analysis-743

My actors do not draw themselves.

https://gamedev.stackexchange.com/questions/14133/should-actors-in-a-game-be-responsible-for-drawing-themselves

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

## Misc

### Random colors

I don't mind dark colors, so I use the basic RGB space.

https://stackoverflow.com/questions/1484506/random-color-generator
https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
