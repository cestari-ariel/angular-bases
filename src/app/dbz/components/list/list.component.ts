import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector   : 'dbz-list',
  templateUrl: 'list.component.html'
})
export class ListComponent {
  @Output()
  public onDeleteCharacterEvent: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [];

  onDeleteCharacter(character: Character): void {
    this.onDeleteCharacterEvent.emit(character.id);
  }
}
