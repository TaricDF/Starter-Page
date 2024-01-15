import { Injectable } from '@angular/core';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url = 'http://localhost:3000/characters';
  constructor() { }

  async getAllCharacters(): Promise<Character[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getCharacterById(id: Number): Promise<Character | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
