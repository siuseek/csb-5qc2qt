/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _26 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("_", "./_26/costumes/_.svg", {
        x: 137.75514068600467,
        y: 162.52317541912743
      }),
      new Costume("_2", "./_26/costumes/_2.svg", {
        x: 137.75514568600465,
        y: 162.52315041912743
      }),
      new Costume("_3", "./_26/costumes/_3.svg", {
        x: 137.75513568600468,
        y: 162.52314041912743
      })
    ];

    this.sounds = [new Sound("пук", "./_26/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "4" }, this.whenIReceive4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "4" }, this.whenIReceive5)
    ];
  }

  *whenIReceive4() {
    this.moveAhead();
    this.visible = true;
    this.costume = "_";
    this.costume = "_2";
    yield* this.wait(1.2);
    this.costume = "_3";
    yield* this.broadcastAndWait("5");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive5() {}
}
