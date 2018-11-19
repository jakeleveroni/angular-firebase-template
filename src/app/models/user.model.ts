import { BaseDatabaseModel, BaseDto } from "./base-dto.model";

export class UserModel extends BaseDatabaseModel {
    public email: string;
    public username?: string;

    constructor(id: string, email: string, username?: string) {
        super();
        this.id = id;
        this.email = email;
        this.username = username;
    }

    public static fromDto(user: UserDto): UserModel {
        return new UserModel(user.id, user.email, user.username);
    }

    public toDto(): UserDto {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
        };
    }

    public static emptyDto(): UserDto {
        return {
            id: null,
            email: null,
            username: null
        }
    }
}

export interface UserDto extends BaseDto {
    username?: string;
    email: string;
}