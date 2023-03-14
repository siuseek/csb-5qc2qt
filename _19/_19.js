/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _19 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_19/costumes/костюм 1.svg", {
        x: 138.50000999999997,
        y: -46.49998999999997
      }),
      new Costume("костюм 2", "./_19/costumes/костюм 2.svg", {
        x: 142.12185876564476,
        y: -46.49999
      }),
      new Costume("костюм 3", "./_19/costumes/костюм 3.svg", {
        x: 138.50000999999997,
        y: -46.49998999999997
      })
    ];

    this.sounds = [new Sound("пук", "./_19/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2)
    ];
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
