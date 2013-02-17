define(["require", "exports", 'spec/demo.spec'], function(require, exports, __demoSpecModule__) {
    // import all spec modules here
    var demoSpecModule = __demoSpecModule__;

    // We need to import the module to a local variable
    // to force the typescript compiler to generate the code
    // that will load the js file before we call jasmineEnv.execute()
    var s1 = demoSpecModule;
    (function (uvis) {
        (function (spec) {
            function init(jasmineEnv) {
                jasmineEnv.execute();
            }
            spec.init = init;
        })(uvis.spec || (uvis.spec = {}));
        var spec = uvis.spec;
    })(exports.uvis || (exports.uvis = {}));
    var uvis = exports.uvis;
})
//@ sourceMappingURL=init.js.map
