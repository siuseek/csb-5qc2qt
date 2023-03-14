/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_4/costumes/костюм 1.svg", {
        x: 138.5674814219959,
        y: 116.3157503634211
      })
    ];

    this.sounds = [new Sound("пук", "./_4/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(161, -181);
    this.visible = false;
    yield* this.wait(3.05);
    this.visible = true;
    yield* this.glide(0.3, 153, -149);
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.size = 75;
    yield* this.wait(3);
    for (let i = 0; i < 40; i++) {
      this.size -= 2;
      yield;
    }
  }
}
