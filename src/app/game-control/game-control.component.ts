import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent {
  @Output() firedNumber: any = new EventEmitter();
  lastInterval = 0;
  interval: any;
  constructor() {}

  start() {
    this.interval = setInterval(() => {
      this.firedNumber.emit(this.lastInterval + 1);
      this.lastInterval++;
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
}
