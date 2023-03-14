/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _24 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("_", "./_24/costumes/_.svg", {
        x: 213.56029671815514,
        y: 107.19217549147959
      }),
      new Costume("_2", "./_24/costumes/_2.svg", {
        x: 213.56033204562917,
        y: 107.192175
      }),
      new Costume("_3", "./_24/costumes/_3.svg", {
        x: 213.56029671815514,
        y: 107.19217549147959
      })
    ];

    this.sounds = [new Sound("пук", "./_24/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive2() {
    this.visible = true;
    this.costume = "костюм 1";
    for (let i = 0; i < 3; i++) {
      yield* this.wait(0.1);
      this.costumeNumber++;
      yield;
    }
    yield* this.wait(1);
    this.visible = false;
  }
}
