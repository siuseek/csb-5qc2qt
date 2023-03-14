/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _23 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_23/costumes/костюм 1.svg", {
        x: 12.044729999999987,
        y: 1.1697653335354516
      }),
      new Costume("костюм 2", "./_23/costumes/костюм 2.svg", {
        x: 12.054510276816615,
        y: 1.1697741965116109
      }),
      new Costume("костюм 3", "./_23/costumes/костюм 3.svg", {
        x: 12.054510276816615,
        y: 1.1697838629761748
      }),
      new Costume("костюм 4", "./_23/costumes/костюм 4.svg", {
        x: 12.769829365244163,
        y: 1.1697827259523308
      }),
      new Costume("костюм 5", "./_23/costumes/костюм 5.svg", {
        x: -2.4570318621805427,
        y: -5.420275425320625
      }),
      new Costume("костюм 6", "./_23/costumes/костюм 6.svg", {
        x: -1.4570415665288863,
        y: -2.817713638022866
      }),
      new Costume("костюм 7", "./_23/costumes/костюм 7.svg", {
        x: 1.5429681378194573,
        y: -7.820275425320574
      }),
      new Costume("костюм 8", "./_23/costumes/костюм 8.svg", {
        x: -1.4570415665287726,
        y: -3.4151628724625027
      }),
      new Costume("костюм 9", "./_23/costumes/костюм 9.svg", {
        x: -2.257031862180469,
        y: -6.820275425320631
      }),
      new Costume("костюм 10", "./_23/costumes/костюм 10.svg", {
        x: 4.369815895856306,
        y: -4.430217886287068
      })
    ];

    this.sounds = [new Sound("пук", "./_23/sounds/пук.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "hows obolt this thunders" },
        this.whenIReceiveHowsOboltThisThunders
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveHowsOboltThisThunders() {
    yield* this.wait(0.5);
    this.costume = "костюм 1";
    this.visible = true;
    for (let i = 0; i < 35; i++) {
      yield* this.wait(0);
      this.costumeNumber++;
      yield;
    }
    yield* this.wait(0.1);
    this.costume = "костюм 10";
    this.broadcast("2");
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
