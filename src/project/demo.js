(function (project) {
    (function (demo) {
        function add(x, y) {
            return x + y;
        }
        demo.add = add;
    })(project.demo || (project.demo = {}));
    var demo = project.demo;
})(exports.project || (exports.project = {}));
var project = exports.project;
//@ sourceMappingURL=demo.js.map
