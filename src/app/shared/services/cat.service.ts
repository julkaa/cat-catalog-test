import {Injectable} from '@angular/core';
import {ICatData, IOldCatData} from "../models/cat-breed.model";

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor() {
  }

  adaptCatData(data: IOldCatData): ICatData {
    const breed = data.breeds[0];

    return {
      id: data.id || '',
      url: data.url || '',
      name: breed?.name || '',
      temperament: breed?.temperament || '',
      description: breed?.description || '',
      isShowDescription: false
    };
  }

  adaptBreedData(data): any {
    return {
      id: data.id,
      name: data.name,
    }
  }

}
