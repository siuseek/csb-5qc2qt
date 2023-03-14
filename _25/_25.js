/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _25 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("_", "./_25/costumes/_.svg", {
        x: 92.34994460761453,
        y: 143.89853598374535
      }),
      new Costume("_2", "./_25/costumes/_2.svg", {
        x: 94.09063347963752,
        y: 143.8985365902472
      }),
      new Costume("_3", "./_25/costumes/_3.svg", {
        x: 76.56865180612891,
        y: 143.89853378699627
      }),
      new Costume("_4", "./_25/costumes/_4.svg", {
        x: 83.06721580088978,
        y: 143.89853378699627
      })
    ];

    this.sounds = [new Sound("пук", "./_25/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive3)
    ];
  }

  *whenIReceive2() {
    this.visible = true;
    while (true) {
      this.costumeNumber++;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive3() {
    yield* this.wait(1);
    this.visible = false;
    this.broadcast("3");
  }
}
