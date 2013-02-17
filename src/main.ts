/// <reference path=".typings/require.d.ts" />
require.config({
    baseUrl: 'src',
    urlArgs: "bust=" +(new Date()).getTime()   
});

require(['project/demo'], (demoModule) => {
    document.writeln("1 + 2 = " + demoModule.project.demo.add(1, 2));
});