import { readFileSync } from 'fs';

export default class Lang {
    filePath: string;
    lang: object;

    constructor(langPack: string, lang: string = 'de-de') {
        this.filePath = __dirname + `/../../lang/${lang}/${langPack}.json`;
        this.lang = JSON.parse(readFileSync(this.filePath, { encoding: 'UTF-8' }));
    }

    get(part: string, strVars?: object): string {
        const path: string[] = part.split('.');
        let template = this.getFromObj(path, this.lang);

        if (strVars !== undefined) {
            const re: RegExp = /{{([^%>]+)?}}/g;
            let match;
            while (match = re.exec(template)) {
                template = template.replace(match[0], strVars[match[1]]);
            }
        }

        return template;
    }

    private getFromObj(path: string[], object: object): string {
        if (path.length > 1) {
            const object = this.lang[<string>path.shift()];
            return this.getFromObj(path, object);
        }
        return object[<string>path.shift()];
    }
}
