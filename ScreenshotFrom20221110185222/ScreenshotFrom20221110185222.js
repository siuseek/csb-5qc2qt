/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ScreenshotFrom20221110185222 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screenshot from 2022-11-10 18-52-22",
        "./ScreenshotFrom20221110185222/costumes/Screenshot from 2022-11-10 18-52-22.svg",
        { x: 90.11355429909167, y: 101.18866499999992 }
      ),
      new Costume(
        "Screenshot from 2022-11-10 18-52-2",
        "./ScreenshotFrom20221110185222/costumes/Screenshot from 2022-11-10 18-52-2.svg",
        { x: 90.11357929909158, y: 101.1886749999998 }
      ),
      new Costume(
        "Screenshot from 2022-11-10 18-52-3",
        "./ScreenshotFrom20221110185222/costumes/Screenshot from 2022-11-10 18-52-3.svg",
        { x: 90.11357429909137, y: 101.188665 }
      ),
      new Costume(
        "Screenshot from 2022-11-10 18-52-4",
        "./ScreenshotFrom20221110185222/costumes/Screenshot from 2022-11-10 18-52-4.svg",
        { x: 90.11357429909157, y: 101.1886649999998 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: " we've gotta beatbox. to prysy" },
        this.whenIReceiveWeveGottaBeatboxToPrysy
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "guys stop" },
        this.whenIReceiveGuysStop
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
  }

  *whenIReceiveWeveGottaBeatboxToPrysy() {
    this.visible = true;
    for (let i = 0; i < 80; i++) {
      this.costumeNumber++;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveGuysStop() {
    this.visible = false;
  }
}
