const assert = require('assert');
const Lang = require('../out/utils/Lang');

describe('langSystem', () => {
    describe('langSystem without variables', () => {
        const langHandler = new Lang.default('TestLang', 'de-de');
        describe('foo without object', () => {
            it('should return "some foo"', () => {
                assert.strictEqual(langHandler.get('test.foo'), "some foo");
            });
        });
        describe('bar without object', () => {
            it('should return "some {{v}}"', () => {
                assert.strictEqual(langHandler.get('test.bar'), "some {{v}}");
            });
        });
    });
    describe('langSystem with variables', () => {
        const langHandler = new Lang.default('TestLang', 'de-de');
        const object = { v: "bar" };
        describe('foo with object', () => {
            it('should return "some foo"', () => {
                assert.strictEqual(langHandler.get('test.foo', object), "some foo");
            });
        });
        describe('bar with object', () => {
            it('should return "some bar"', () => {
                assert.strictEqual(langHandler.get('test.bar', object), "some bar");
            });
        });
    });
});
