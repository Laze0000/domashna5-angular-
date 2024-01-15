import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { Player } from './module/klasa';
import { PLAYERS } from '../db-data';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DriverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'newAnge';

  giannis = PLAYERS[1];
  luka = PLAYERS[2];
  nikola = PLAYERS[3];
  players = PLAYERS;

  appKlik(suzi : Player) {
    console.log("Rebra", suzi)
  }
}
