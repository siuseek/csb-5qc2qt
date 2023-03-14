/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Costume1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Costume1/costumes/costume1.png", {
        x: 102,
        y: 96
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (!(this.sprites["_10"].costumeNumber === 6)) {
      yield;
    }
    this.goto(61, 133);
    this.size = 100;
    this.effects.clear();
    this.visible = true;
    for (let i = 0; i < 20; i++) {
      this.x -= 3;
      this.y += 3;
      this.effects.ghost += 5;
      this.size += 5;
      yield;
    }
    this.visible = false;
    this.effects.clear();
  }
}
