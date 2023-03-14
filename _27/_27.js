/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _27 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_27/costumes/костюм 1.svg", {
        x: 11.661966084582787,
        y: 1.1697741965116109
      }),
      new Costume("костюм 2", "./_27/costumes/костюм 2.svg", {
        x: 11.554510553633207,
        y: 1.1697830594877132
      }),
      new Costume("костюм 3", "./_27/costumes/костюм 3.svg", {
        x: 12.03747943137111,
        y: 1.1697827259523024
      }),
      new Costume("костюм 4", "./_27/costumes/костюм 4.svg", {
        x: 13.320787879992139,
        y: 1.1697915889284332
      }),
      new Costume("костюм 5", "./_27/costumes/костюм 5.svg", {
        x: -2.457034400932656,
        y: -5.420267015853312
      }),
      new Costume("костюм 6", "./_27/costumes/костюм 6.svg", {
        x: -1.4570484234219236,
        y: -2.8177255313872536
      }),
      new Costume("костюм 7", "./_27/costumes/костюм 7.svg", {
        x: 1.5429674612478266,
        y: -7.8202665905327535
      }),
      new Costume("костюм 8", "./_27/costumes/костюм 8.svg", {
        x: -1.4570412708770846,
        y: -3.4151642223885403
      }),
      new Costume("костюм 9", "./_27/costumes/костюм 9.svg", {
        x: -2.2570344009325822,
        y: -6.820267015853403
      }),
      new Costume("костюм 10", "./_27/costumes/костюм 10.svg", {
        x: 4.936397862684288,
        y: -4.430219475215665
      })
    ];

    this.sounds = [new Sound("пук", "./_27/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "5" }, this.whenIReceive5)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive5() {
    this.visible = true;
    this.moveAhead();
    this.costume = "костюм 4";
    yield* this.wait(0.2);
    for (let i = 0; i < 20; i++) {
      yield* this.wait(0);
      this.costumeNumber++;
      yield;
    }
    yield* this.wait(0);
    for (let i = 0; i < 29; i++) {
      yield* this.wait(0);
      this.costumeNumber++;
      yield;
    }
    this.costume = "костюм 4";
    this.broadcast("10");
  }
}
