declare module 'fingerprintjs2';

interface iTalk {
    create(uid: string, id: number): void;
    create(uid: string, id: number, title: string): void;

    talkTo(id: string, message: string): void;

    getList(): Promise<any>;
    getList(pageIndex: number): Promise<any>;

    getMsgs(id: string): Promise<any>;
}
