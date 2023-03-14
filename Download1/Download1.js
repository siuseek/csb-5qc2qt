/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Download1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("download (1)", "./Download1/costumes/download (1).png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "dont kiss the princessss" },
        this.whenIReceiveDontKissThePrincessss
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "lets just keep mooving" },
        this.whenIReceiveLetsJustKeepMooving
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDontKissThePrincessss() {
    this.size = 180;
    this.goto(18, -39);
    this.moveBehind(100);
    this.visible = true;
    for (let i = 0; i < 120; i++) {
      this.y -= 0.1;
      this.size -= 0.1;
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.size -= 0.1;
      yield;
    }
    for (let i = 0; i < 140; i++) {
      this.y += 0.3;
      this.size -= 0.1;
      yield;
    }
  }

  *whenIReceiveLetsJustKeepMooving() {
    this.visible = false;
  }
}
