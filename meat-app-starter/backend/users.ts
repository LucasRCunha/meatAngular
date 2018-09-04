export class User{
    constructor(public email: string,
                public name: string,
                private password: string){}

    matches(another: User):boolean{
        return another !== undefined &&
        another.email === this.email && 
        another.password === this.password
    }
}

export const users = {
    "lucasrcunha01@gmail.com": new User('lucasrcunha01@gmail.com','lucas','123')
}