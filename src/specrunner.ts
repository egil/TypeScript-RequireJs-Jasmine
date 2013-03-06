/// <reference path=".typings/jasmine.d.ts" />
/// <reference path=".typings/require.d.ts" />
require.config({
    baseUrl: 'src'
});

require(['spec/demo.spec'], () => {
    var jasmineEnv = jasmine.getEnv();    
    jasmineEnv.execute();
}, (err) => {
    console.error('Unable to load some or all of the requires specs. Error message = ' + err);
});