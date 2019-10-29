declare module 'fingerprintjs2';

interface iTalk {
    create(uid: string): void;
    create(uid: string, title: string): void;

    talkTo(id: string, message: string): void;

    getList(): Promise<any>;
    getList(pageIndex: number): Promise<any>;

    getMsgs(id: string): Promise<any>;
}
