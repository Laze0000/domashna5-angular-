import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../module/klasa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent implements OnInit {
  constructor() {}
  @Input()
  ime:String = "";

  @Input()
  igrac:Player = {} as Player;

  @Input()
  reden: number = 0;

  @Output()
  coach: Player = {} as Player;

  cuci = new EventEmitter<any>();  

  ngOnInit(): void {}

  klasi() {
    return {'poz': this.igrac.points > 15000, 'course-card':true}
  }

  klik() {
    var link = this.igrac.iconUrl
    window.open(link)
    console.log("Me klikna")
    this.cuci.emit(this.igrac)
  }
}
