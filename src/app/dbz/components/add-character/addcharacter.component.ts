import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './addcharacter.component.html'
})
export class AddCharacterComponent {
  
  @Output()
  onNewCharacterComponent: EventEmitter<Character> = new EventEmitter();
  
  public character: Character = {
    name:'',
    power: 0
  };

  emitCharacter(): void {
    if(this.character.name.length === 0) return;

    this.onNewCharacterComponent.emit(this.character);

    // this.character.name = '';
    // this.character.power = 0;
    this.character = {name: '', power: 0};
  }
}