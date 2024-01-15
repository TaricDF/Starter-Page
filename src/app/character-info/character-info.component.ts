import { Component, Input } from '@angular/core';
import { Info } from '../info';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-info',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="character">
      <img class="character-photo" [src]="characterInfo.picture" alt="{{characterInfo.name}}">
      <h2 class="character-heading">{{characterInfo.name}}</h2>
      <p class="character-info">{{characterInfo.series}}, {{characterInfo.powers}}</p>
      <a [routerLink]="['/Details', characterInfo.id]">Learn More</a>
    </section>
  `,
  styleUrl: './character-info.component.css'
})
export class CharacterInfoComponent {
  @Input() characterInfo!:Info;
}
