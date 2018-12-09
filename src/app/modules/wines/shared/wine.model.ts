import {Deserializable} from '../../../shared/interfaces/deserializable.interface';

export class Wine implements Deserializable {
  id: string;
  name: string;
  alterEgo: string;
  likes: number;
  default: boolean;
  avatarUrl: string;
  avatarThumbnailUrl: string;

  appellation: String;
  color: String;
  region: String;
  country: String;
  vintage: String;
  date: Date;
  primeurs: Boolean;
  score: Number;

  constructor(wine: any = {}) {
    this.id = wine.id;
    this.name = wine.name || '';
    this.alterEgo = wine.alterEgo || '';
    this.likes = wine.likes || 0;
    this.default = wine.default || false;
    this.avatarUrl = wine.avatarUrl || '';
    this.avatarThumbnailUrl = wine.avatarThumbnailUrl || '';
  }

  like() {
    this.likes += 1;
    localStorage.setItem('votes', '' + (Number(localStorage.getItem('votes')) + 1));
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
