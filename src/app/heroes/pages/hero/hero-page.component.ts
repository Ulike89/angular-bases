import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html'
})
export class HeroPageComponent {
  name = signal('ironman');
  age = signal(45);

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  })

  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  })

  changeHero(): void{
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(): void{
    this.age.set(60);
  }

  resetForm(): void{
    this.name.set('ironman');
    this.age.set(45);
  }
}