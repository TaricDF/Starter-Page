import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterInfoComponent } from '../character-info/character-info.component';
import { Info } from '../info';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CharacterInfoComponent, CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by name">
        <button class="primary" type="submit">Search</button>
      </form>
    </section>
    <section class="results">
      <app-character-info *ngFor="let characterInfo of characterInfoList" [characterInfo]="characterInfo"></app-character-info>
    </section>
  `,
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  characterInfoList: Info[] = [];

  characterService: CharacterService = inject(CharacterService);

  constructor() {
    this.characterService.getAllCharacters().then((characterInfoList: Info[]) => {
      this.characterInfoList = characterInfoList;
    });
  }
}
