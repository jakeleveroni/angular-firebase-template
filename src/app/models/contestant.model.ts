import { UserModel, UserDto } from "./user.model";

export class ContestantModel extends UserModel {
    public twitterHandle: string;
    public instagramHandle: string;
    public facebookHandle: string;
    public youtubeHandle: string;
    public bio: string;
    
    constructor(email: string, first: string, last: string,
                twitter: string, instagram: string,
                facebook: string, youtube: string,
                bio?: string, username?: string) {
        super(email, first, last, username);
        this.twitterHandle = twitter;
        this.instagramHandle = instagram;
        this.facebookHandle = facebook;
        this.youtubeHandle = youtube;
        this.bio = bio;
    }

    public static fromDto(dto: ContestantDto): ContestantModel {
        return new ContestantModel(dto.email, dto.firstName, dto.lastName,
            dto.twitterHandle, dto.instagramHandle, dto.facebookHandle,
            dto.youtubeHandle, dto.bio, dto.username);
    }

    public toDto(): ContestantDto {
        return {
            ...super.toDto(),
            twitterHandle: this.twitterHandle,
            instagramHandle: this.instagramHandle,
            facebookHandle: this.facebookHandle, 
            youtubeHandle: this.youtubeHandle,
            bio: this.bio
        };
    }
}

export interface ContestantDto extends UserDto {
    twitterHandle: string;
    instagramHandle: string;
    facebookHandle: string;
    youtubeHandle: string;
    bio?: string;
}