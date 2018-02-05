const assert = require('assert');
const JQueryMessageHandler = require('../out/message/handler/JQueryMessageHandler');
const TeamMessageHandler = require('../out/message/handler/TeamMessageHandler');

describe('messageHandler', () => {
    describe('jQueryHandler', () => {
        const JQueryMessageHandlerObject = new JQueryMessageHandler.default();
        describe('jQueryPositive', () => {
            it('should recognize jQuery message', () => {
                assert.strictEqual(JQueryMessageHandlerObject.canHandle('jQuery is very nice'), true);
            });
        });
        describe('jQueryNegative', () => {
            it('should not recognize jQuery message', () => {
                assert.strictEqual(JQueryMessageHandlerObject.canHandle('jqoery is super duper'), false);
            });
        });
    });
    describe('TeamMessageHandler', () => {
        const TeamMessageHandlerObject = new TeamMessageHandler.default();
        describe('jQueryPositive', () => {
            it('should recognize creator', () => {
                assert.strictEqual(TeamMessageHandlerObject.canHandle('Mic is nice'), true);
            });
        });
        describe('jQueryNegative', () => {
            it('should not recognize creator', () => {
                assert.strictEqual(TeamMessageHandlerObject.canHandle('Spamming is not allowed'), false);
            });
        });
    });
});
