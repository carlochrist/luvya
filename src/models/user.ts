export class User {
    name: string;
    email: string;
    dateOfBirth: Date;
    gender: string;
    password: string;
    confirmPassword: string;
    // dataOfBirth: Date,
    // sex: boolean

    constructor(
        name: string,
        email: string,
        dateOfBirth: Date,
        gender: string,
        password: string,
        confirmPassword: string
    ) {
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth
        this.gender = gender;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}
