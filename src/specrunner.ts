/// <reference path=".typings/jasmine.d.ts" />
/// <reference path=".typings/require.d.ts" />
require.config({
    baseUrl: 'src',
    urlArgs: "bust=" +(new Date()).getTime()
});

require(['spec/init'], (specs) => {
    var jasmineEnv = jasmine.getEnv();    
    specs.uvis.spec.init(jasmineEnv);
});