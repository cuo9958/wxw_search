declare module 'fingerprintjs2';

interface iTalk {
    create(uid: string, id: number): void;
    create(uid: string, id: number, title: string): void;

    talkTo(id: string, message: string): void;

    getList(): Promise<any>;
    getList(pageIndex: number): Promise<any>;

    getMsgs(id: string): Promise<any>;
}
/**
 * 路由的参数
 */
interface iLocation {
    pathname: string;
    search: string;
    hash: string;
}
/**
 * 路由方法
 */
interface iHistory extends History {
    length: number;
    push(path: string): void;
    push(path: string, state: any): void;
    replace(path: string, state: any): void;
    go(n: string): void;
    goBack(): void;
    goForward(): void;
}
/**
 * react-dom的路由props
 */
interface iReactRoute {
    location: iLocation;
    history: iHistory;
}
