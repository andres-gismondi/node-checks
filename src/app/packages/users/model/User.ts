export class User {
    private name: string;
    private surname: string;
    private userName: string;
    private password: string; // TODO: cambiar a algo serializado y segurizado.

    get getName(): string {
        return this.name;
    }

    set setName(value: string) {
        this.name = value;
    }

    get getSurname(): string {
        return this.surname;
    }

    set setSurname(value: string) {
        this.surname = value;
    }

    get getUserName(): string {
        return this.userName;
    }

    set setUserName(value: string) {
        this.userName = value;
    }

    get getPassword(): string {
        return this.password;
    }

    set setPassword(value: string) {
        this.password = value;
    }
}

export interface IUser {
    name: string;
    surname: string;
    user_name: string;
    password: string;
}