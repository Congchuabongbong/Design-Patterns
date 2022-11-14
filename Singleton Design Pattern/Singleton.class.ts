export class Singleton {
    private constructor() { } // private constructor
    private _property1: string;
    private _property2: string;
    set property1(value: string) {
        this._property1 = value;
    }
    get property1(): string {
        return this._property1;
    }

    set property2(value: string) {
        this._property2 = value;
    }
    get property2(): string {
        return this._property2;
    }

    private static instaceOf = new Singleton(); //get instance using static method
    public static getInstanceOf(): Singleton {
        return Singleton.instaceOf;
    }

    public doSomething(): string {
        return this.property1 + this.property2;
    }
}
