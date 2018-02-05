/* eslint-disable no-undef */
const assert = require('assert');
const JQueryMessageHandler = require('../src/message/handler/JQueryMessageHandler');
const TeamMessageHandler = require('../src/message/handler/TeamMessageHandler');

describe('messageHandler', () => {
    describe('jQueryHandler', () => {
        const JQueryMessageHandlerObject = new JQueryMessageHandler();
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
        const TeamMessageHandlerObject = new TeamMessageHandler();
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
