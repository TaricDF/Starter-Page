import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { Info } from '../info';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <article>
      <img class="character-photo" [src]="characterInfo?.picture">
      <section class="character-description">
        <h2 class="character-heading"> {{characterInfo?.name}}</h2>
        <p class="character-info"> {{characterInfo?.series}}</p>
      </section>
      <section class="character-features">
        <h2 class="section-heading"> About this Character</h2>
        <ul>
          <li> Age: {{characterInfo?.age}} </li>
          <li> Powers: {{characterInfo?.powers}} </li>
        </ul>
      </section>
      <section class="character-apply">
        <h2 class="section-heading">Apply for Character</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">

        <button type="submit" class="primary">Submit</button>
        </form>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  characterService = inject(CharacterService);

  characterInfo: Info | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const characterInfoId = Number(this.route.snapshot.params['id']);
    this.characterService.getCharacterById(characterInfoId).then(characterInfo => {
      this.characterInfo = characterInfo;
    });
  }

  submitApplication() {
    this.characterService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
