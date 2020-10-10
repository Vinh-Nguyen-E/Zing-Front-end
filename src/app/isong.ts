import {IUser} from "./iuser";

export interface ISong {
  songId?: number;
  name?: string;
  artist?: string;
  genre?: string;
  description?: string;
  date?: Date;
  plays?: number;
  likes?:number;
  user?: IUser;
  songFile?: any;
  song_url?: string;
  cover_art_url?: string;
  imgFile?: any;
}
