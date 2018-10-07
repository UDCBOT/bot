import { GuildMember } from 'discord.js';
import { memberRoleId } from '../constants';
import Time from '../utils/Time';

export default class RulesHandler {
    constructor(member: GuildMember) {
        setTimeout(
            () => {
                member.addRole(memberRoleId);
            },
            Time.milliSecFromMin(1));
    }
}
