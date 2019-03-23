const DEFAULT_AVATAR = 'https://avatars2.githubusercontent.com/u/10386102?s=40&v=4';

export class User {
    id?: number;
    username: string;
    avatar?: string;
    nickname?: string;

constructor (username?: string, avatar: string = DEFAULT_AVATAR) {
        this.avatar = avatar;
        this.username = username;
    }
}