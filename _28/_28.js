/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _28 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_28/costumes/костюм 1.svg", {
        x: 261.25,
        y: 182.25
      })
    ];

    this.sounds = [new Sound("пук", "./_28/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "10" }, this.whenIReceive10)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive10() {
    yield* this.wait(3);
    this.visible = true;
    while (true) {
      this.moveAhead();
      yield;
    }
  }
}
