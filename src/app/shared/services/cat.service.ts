import {Injectable} from '@angular/core';

interface Weight {
  imperial: string;
  metric: string;
}

export interface Breed {
  weight: Weight;
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
}

export interface OldCatData {
  breeds?: Breed;
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatData {
  weight: Weight;
  name: string;
  cfaUrl: string;
  vetstreetUrl: string;
  vcahospitalsUrl: string;
  temperament: string;
  origin: string;
  countryCodes: string;
  countryCode: string;
  description: string;
  lifeSpan: string;
  indoor: number;
  lap: number;
  altNames: string;
  adaptability: number;
  affectionLevel: number;
  childFriendly: number;
  dogFriendly: number;
  energyLevel: number;
  grooming: number;
  healthIssues: number;
  intelligence: number;
  sheddingLevel: number;
  socialNeeds: number;
  strangerFriendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressedTail: number;
  shortLegs: number;
  wikipediaUrl: string;
  hypoallergenic: number;
  referenceImageId: string;
  id: string;
  url: string;
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor() {
  }

  adaptDataToCatBreed(data: OldCatData): CatData {
    const breed = data.breeds[0];

    return {
      altNames: "",
      cfaUrl: "",
      countryCode: "",
      countryCodes: "",
      experimental: 0,
      hairless: 0,
      height: 0,
      indoor: 0,
      lap: 0,
      natural: 0,
      rare: 0,
      rex: 0,
      shortLegs: 0,
      suppressedTail: 0,
      vcahospitalsUrl: "",
      vetstreetUrl: "",
      weight: undefined,
      width: 0,
      id: data.id || '',
      url: data.url || '',
      name: breed?.name || '',
      temperament: breed?.temperament || '',
      origin: breed?.origin || '',
      description: breed?.description || '',
      lifeSpan: breed?.life_span || '',
      adaptability: breed?.adaptability || 0,
      affectionLevel: breed?.affection_level || 0,
      childFriendly: breed?.child_friendly || 0,
      dogFriendly: breed?.dog_friendly || 0,
      energyLevel: breed?.energy_level || 0,
      grooming: breed?.grooming || 0,
      healthIssues: breed?.health_issues || 0,
      intelligence: breed?.intelligence || 0,
      sheddingLevel: breed?.shedding_level || 0,
      socialNeeds: breed?.social_needs || 0,
      strangerFriendly: breed?.stranger_friendly || 0,
      vocalisation: breed?.vocalisation || 0,
      wikipediaUrl: breed?.wikipedia_url || '',
      hypoallergenic: breed?.hypoallergenic || 0,
      referenceImageId: breed?.reference_image_id || ''
    };
  }

}
