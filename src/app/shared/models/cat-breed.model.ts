export interface ICatData {
  name: string;
  temperament: string;
  description: string;
  id: string;
  url: string;
  isShowDescription: boolean;
}

export interface IBreed {
  id?: string;
  name: string;
  temperament?: string;
  description?: string;
}

export interface IOldCatData {
  breeds?: IBreed;
  id: string;
  url: string;
}
