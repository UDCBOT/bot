const assert = require('assert');
const JQueryMessageHandler = require('../out/message/handler/JQueryMessageHandler').default;
const TeamMessageHandler = require('../out/message/handler/TeamMessageHandler').default;
const EulerMessageHandler = require('../out/message/handler/EulerMessageHandler').default;

describe('messageHandler', () => {
    describe('jQueryHandler', () => {
        describe('jQueryPositive', () => {
            it('should recognize jQuery message', () => {
                assert.strictEqual(JQueryMessageHandler.canHandle('jQuery is very nice'), true);
            });
        });
        describe('jQueryNegative', () => {
            it('should not recognize jQuery message', () => {
                assert.strictEqual(JQueryMessageHandler.canHandle('jqoery is super duper'), false);
            });
        });
    });
    describe('TeamMessageHandler', () => {
        describe('jQueryPositive', () => {
            it('should recognize creator', () => {
                assert.strictEqual(TeamMessageHandler.canHandle('Mic is nice'), true);
            });
        });
        describe('jQueryNegative', () => {
            it('should not recognize creator', () => {
                assert.strictEqual(TeamMessageHandler.canHandle('Spamming is not allowed'), false);
            });
        });
    });
    describe('EulerMessageHandler', () => {
        describe('EulerPositive', () => {
            it('should recognize euler', () => {
                assert.strictEqual(EulerMessageHandler.canHandle('!euler 1'), true);
                assert.strictEqual(EulerMessageHandler.canHandle('!euler 1 ?'), true);
            });
        });
        describe('eulerNegative', () => {
            it('should not recognize euler', () => {
                assert.strictEqual(EulerMessageHandler.canHandle('euler 1'), false);
                assert.strictEqual(EulerMessageHandler.canHandle('euler 1 ?'), false);
            });
        });
    });
});
