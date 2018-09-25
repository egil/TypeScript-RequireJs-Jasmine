A boilerplate project for getting [TypeScript](http://www.typescriptlang.org/), [RequireJS](http://requirejs.org/), and [Jasmine](https://jasmine.github.io/) playing nicely together in Visual Studio.

##How to Use##
To see it in action, simply fork or download the project and open it up in Visual Studio 2012 (with the [TypeScript](http://www.microsoft.com/en-us/download/details.aspx?id=34790) and [Web Essentials](http://visualstudiogallery.msdn.microsoft.com/07d54d12-7133-4e15-becb-6f451ea3bea6) plugins installed), and right click the *specrunner.html* and select *View in Browser*.

##Project Structure##
There are a few interesting things to note about the files in the project:

- **specrunner.html** loads the Jasmine library and performs the basic configuration and tells RequireJS to load *src/specrunner*.
- **src/specrunner.ts** configures RequireJS and loads the specs and then start Jasmine

##Improvments##
If you have any improvments or suggestions, please submit a pull request on GitHub with your modifications.

Comments and suggestions can also be posted here in the Issues section or in the [original blog post on my website](http://egilhansen.com/node/40).

##Changelog##

**03/06/2013: [Removed init.ts file, load specs from specrunner.ts directly](https://github.com/egil/TypeScript-RequireJs-Jasmine/commit/52cdc7c78678b95fe624eb24b298047123f4a7ce)**

Removed init.ts and rewrote specrunner.ts load specs directly. There was no need to do it through init.ts.
