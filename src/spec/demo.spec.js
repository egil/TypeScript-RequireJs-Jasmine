define(["require", "exports", 'project/demo'], function(require, exports, __demoModule__) {
    /// <reference path="../.typings/jasmine.d.ts" />
    var demoModule = __demoModule__;

    var demo = demoModule.project.demo;
    (function (project) {
        (function (spec) {
            describe('A demo', function () {
                it('should add two numbers correctly', function () {
                    var expected = 3;
                    var result = demo.add(1, 2);
                    expect(result).toBe(expected);
                });
            });
        })(project.spec || (project.spec = {}));
        var spec = project.spec;
    })(exports.project || (exports.project = {}));
    var project = exports.project;
})
//@ sourceMappingURL=demo.spec.js.map
