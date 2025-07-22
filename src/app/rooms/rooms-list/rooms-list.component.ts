import { Component, OnInit ,Input, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import { RoomList } from '../rooms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() rooms: RoomList[] = [];
  @Input() title: string = "";
  @Output() selectedRoom = new EventEmitter<RoomList>();


  constructor() { }
  ngOnDestroy(): void {
    console.log("OnDestroy is called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes[`title`]){
      this.title = changes[`title`].currentValue.toUpperCase();
    }
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }

}
