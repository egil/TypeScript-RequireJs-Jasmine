/// <reference path="../.typings/jasmine.d.ts" />
import demoModule = module('project/demo');
import demo = demoModule.project.demo;

export module project.spec {
    describe('A demo', () => {
        it('should add two numbers correctly', () => {
            var expected = 3;
            var result = demo.add(1, 2);
            expect(result).toBe(expected);
        });
    });
}