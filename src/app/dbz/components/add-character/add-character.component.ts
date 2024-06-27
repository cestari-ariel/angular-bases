import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector   : 'dbz-add-character',
  templateUrl: 'add-character.component.html',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter()

  public character: Character = { id: "-1", name: '', power: 0 };

  emitCharacter(): void {
    this.onNewCharacter.emit(this.character);

    this.character = { id: "-1", name : '', power : 0 };
  }
}
