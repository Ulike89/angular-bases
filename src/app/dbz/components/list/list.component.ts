import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  onDeleteCharacterComponent: EventEmitter<string> = new EventEmitter();

  @Input()
  characterList: Character[] = [
    {
        name: 'Trunks',
        power: 10
    }
  ]

  onDeleteCharacter(index: number): void {
    console.log({index});
  }

  onDeleteCharacterId(id?: string): void {
    if(!id) return;

    this.onDeleteCharacterComponent.emit(id);
  }
}