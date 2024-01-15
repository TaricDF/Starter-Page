import { Injectable } from '@angular/core';
import { Info } from './info';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url = 'http://localhost:3000/characters';
  constructor() { }

  async getAllCharacters(): Promise<Info[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getCharacterById(id: Number): Promise<Info | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
