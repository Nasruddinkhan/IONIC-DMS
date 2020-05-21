export class HeaderTitle {
    name: string;
    msg: string;
    isDisable: boolean;
    isRouteURL: string;
    constructor(name: string,  msg: string, isDisable: boolean) {
        this.name = name;
        this.msg = msg;
        this.isDisable = isDisable;
    }
}
