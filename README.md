Getting [TypeScript](http://www.typescriptlang.org/), [RequireJS](http://requirejs.org/), and [Jasmine](http://pivotal.github.com/jasmine/) playing nicely together in Visual Studio turned out to be a bit harder than I had hoped.

My first attempt with [Chutzpah](http://visualstudiogallery.msdn.microsoft.com/71a4e9bd-f660-448f-bd92-f5a65d39b7f0) was not super successful, I did not manage to get it running without output errors. Then I tried using Resharper, but since the current version (7.1) has a bug that prevents the test session from ending properly when all tests have been executed, I went with a modified version of the "specrunner" that Jasmine is shipped with.

To make it easy to get started, I created this demo project that have everything setup and is ready to run.

To see it in action, simply fork or download the project and open it up in Visual Studio 2012 (with the [TypeScript](http://www.microsoft.com/en-us/download/details.aspx?id=34790) and [Web Essentials](http://visualstudiogallery.msdn.microsoft.com/07d54d12-7133-4e15-becb-6f451ea3bea6) plugins installed), and right click the *specrunner.html* and select *View in Browser*.

##Project Structure##
There are a few interesting things to note about the files in the project:

- **specrunner.html** loads the Jasmine library and performs the basic configuration and tells RequireJS to load *src/specrunner*.
- **src/specrunner.ts** configures RequireJS and loads the *spec/init* script
- **src/spec/init** is used to load the spec modules and then start Jasmine.

##Improvments##
If you have any improvments or suggestions, please submit a pull request on GitHub with your modifications.