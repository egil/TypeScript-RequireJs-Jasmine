/// <reference path=".typings/jasmine.d.ts" />
/// <reference path=".typings/require.d.ts" />
require.config({
    baseUrl: 'src'
});
require([
    'spec/demo.spec'
], function () {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.execute();
}, function (err) {
    console.error('Unable to load some or all of the requires specs. Error message = ' + err);
});
//@ sourceMappingURL=specrunner.js.map
