import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string   = "pepe";
  public age: number    = 45;
  public method: string = "fly";

  get capitalizedName(): string {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1)
  }

  changeName(newName: string): void {
    this.name = newName;
  }

  changeAge(newAge: number): void {
    this.age = newAge;
  }

  resetForm(): void {
    this.name = "pepe";
    this.age = 45;
  }
}
