import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getDescription(){
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'julio';
  }

  changeAge(): void{
    this.age = 35;
  }

  resetForm(): void{
    this.name = 'ironman';
    this.age = 45;
  }
}