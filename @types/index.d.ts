declare module 'fingerprintjs2';

interface iTalk {
    create(uid: string): void;
    create(uid: string, title: string): void;
    talkTo(message: string): void;
    getList(): Promise<any>;
    getList(pageIndex: number): Promise<any>;
}
