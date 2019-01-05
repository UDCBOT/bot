import AbstractMessageHandler from './AbstractMessageHandler';
import { Client, Message } from 'discord.js';
import { commandPrefix } from '../../constants';
import { get } from 'https';
import * as h2p from 'html2plaintext';
import * as cheerio from 'cheerio';
import Lang from '../../utils/Lang';

export default class EulerMessageHandler extends AbstractMessageHandler {

    private static readonly MESSAGE_REGEX: RegExp = new RegExp(
        commandPrefix + 'euler ([0-9]+)( [a-z?]+)?',
        'gim',
    );

    public static readonly HANDLER_ID: String = 'euler';

    private static readonly POSSIBLE_ERRORS: string[] = ['ERR_NOT_FOUND', 'ERR_SERVER'];

    static canHandle(message: string): boolean {
        return this.MESSAGE_REGEX.test(message);
    }

    handle(message: Message, client: Client) {
        const command: RegExpExecArray | null
                  = new RegExp(EulerMessageHandler.MESSAGE_REGEX).exec(message.content);
        const problem: number = parseInt(command[1], 10);
        const url: string = `https://projecteuler.net/problem=${problem}`;
        const execCommand: String | undefined = command[2];

        if (execCommand === undefined) {
            message.reply(url);
            return;
        }

        if (execCommand.trim() === '?') {
            this.handleFetchText(message, url, problem);
        }
    }

    private handleFetchText(message: Message, url: string, problem: number): void {
        this.fetchText(url).then((data) => {
            const $ = cheerio.load(data);
            message.reply(
                `**Problem ${problem}**`
                + '\n```' + h2p($('#content .problem_content').html())
                + '\n```',
            );
        }).catch((err) => {
            const lang = new Lang('message\\handler\\EulerMessageHandler');
            if (EulerMessageHandler.POSSIBLE_ERRORS.includes(err)) {
                lang.get(err.toLowerCase(), { problem }).then((data) => {
                    message.reply(data);
                });
            }
        });
    }

    private fetchText(url: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            get(url, (response) => {
                if (response.statusCode !== 200) {
                    reject(response.statusCode === 302 ? 'ERR_NOT_FOUND' : 'ERR_SERVER');
                }
                let data = '';

                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('end', () => {
                    resolve(data);
                });
            }).on('error', (err) => {
                reject(err.message);
            });
        });
    }
}
