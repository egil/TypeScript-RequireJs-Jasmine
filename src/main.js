/// <reference path=".typings/require.d.ts" />
require.config({
    baseUrl: 'src',
    urlArgs: "bust=" + (new Date()).getTime()
});
require([
    'project/demo'
], function (demoModule) {
    document.writeln("1 + 2 = " + demoModule.project.demo.add(1, 2));
});
//@ sourceMappingURL=main.js.map
