import * as fs from 'fs';
import { render } from 'ejs';

export default class Lang {

    private readonly knowLang = ['de-de'];

    private readonly langFilePath;

    private file;

    constructor(langFolder: string, lang: string = 'de-de') {
        if (!this.knowLang.includes(lang)) {
            throw new Error('Language is not known!');
        }

        const filePath = `${__dirname}\\..\\lang\\${langFolder}\\${lang}.json`;

        if (!fs.existsSync(filePath)) {
            throw new Error('Language File not found!');
        }

        this.langFilePath = filePath;
    }

    get(msg: string, msgData: {}): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            if (!this.file) {
                this.readFile().then((data) => {
                    this.file = data;
                    resolve(this.renderString(msg, msgData));
                }).catch((err) => {
                    reject(err);
                });
            } else {
                resolve(this.renderString(msg, msgData));
            }
        });
    }

    getLangFile(): Promise<{}> {
        return new Promise<{}>((resolve) => {
            if (!this.file) {
                this.readFile().then((data) => {
                    this.file = data;
                    resolve(data);
                });
            } else {
                resolve(this.file);
            }
        });
    }

    private renderString(msg: string, data: {}): string {
        return render(this.file[msg], data);
    }

    private readFile(): Promise<{}> {
        return new Promise((resolve) => {
            fs.readFile(this.langFilePath, 'UTF-8', (err, data) => {
                if (err) {
                    throw err;
                }

                resolve(JSON.parse(data));
            });
        });
    }
}
