/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _17 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screenshot from 2022-11-10 18-52-22",
        "./_17/costumes/Screenshot from 2022-11-10 18-52-22.svg",
        { x: -141.91653456909057, y: 83.98140787332547 }
      ),
      new Costume(
        "Screenshot from 2022-11-10 18-52-2",
        "./_17/costumes/Screenshot from 2022-11-10 18-52-2.svg",
        { x: -141.9165445690905, y: 83.98140709342806 }
      ),
      new Costume(
        "Screenshot from 2022-11-10 18-52-3",
        "./_17/costumes/Screenshot from 2022-11-10 18-52-3.svg",
        { x: -141.91654327636206, y: 83.98140649330148 }
      )
    ];

    this.sounds = [new Sound("пук", "./_17/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: " we've gotta beatbox. to prysy" },
        this.whenIReceiveWeveGottaBeatboxToPrysy
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: " we've gotta beatbox. to prysy" },
        this.whenIReceiveWeveGottaBeatboxToPrysy2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "guys stop" },
        this.whenIReceiveGuysStop
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.moveAhead();
  }

  *whenIReceiveWeveGottaBeatboxToPrysy() {
    this.visible = true;
    while (true) {
      this.costumeNumber++;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveWeveGottaBeatboxToPrysy2() {
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveGuysStop() {
    this.visible = false;
  }
}
