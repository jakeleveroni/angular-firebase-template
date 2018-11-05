import { BaseDatabaseModel, BaseDto } from "./base-dto.model";

export class UserModel extends BaseDatabaseModel {
    public email: string;
    public username?: string;
    public firstName: string;
    public lastName: string;

    constructor(email: string, first: string, last: string, username?: string) {
        super();
        this.email = email;
        this.firstName = first;
        this.lastName = last;
    }

    public static fromDto(user: UserDto): UserModel {
        return new UserModel(user.email, user.firstName, user.lastName, user.username);
    }

    public toDto(): UserDto {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName
        };
    }
}

export interface UserDto extends BaseDto {
    username?: string;
    email: string;
    firstName: string;
    lastName: string;
}