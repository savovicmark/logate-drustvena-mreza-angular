import {Profile} from './profile';
import {ImgComments} from './imgComments'

export class Images {
    id: number;
    path: string;
    description: string;
    createdAt: Date;
    profileId: number;
    profile: Profile;
    imgComments: ImgComments
}