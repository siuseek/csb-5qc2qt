/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _16 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_16/costumes/костюм 1.svg", { x: 0, y: 0 }),
      new Costume("bagraond 2", "./_16/costumes/bagraond 2.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("пук", "./_16/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "lets just keep mooving" },
        this.whenIReceiveLetsJustKeepMooving
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: " we've gotta beatbox. to prysy" },
        this.whenIReceiveWeveGottaBeatboxToPrysy
      ),
      new Trigger(Trigger.BROADCAST, { name: "3" }, this.whenIReceive3)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLetsJustKeepMooving() {
    this.goto(-110, -3);
    this.moveBehind();
    this.size = 300;
    this.visible = true;
    yield* this.glide(3.6, 120, -33);
  }

  *whenIReceiveWeveGottaBeatboxToPrysy() {
    this.visible = false;
  }

  *whenIReceive3() {
    this.moveAhead();
    this.visible = true;
  }
}
