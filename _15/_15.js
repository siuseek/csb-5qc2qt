/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _15 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("baground 1", "./_15/costumes/baground 1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("пук", "./_15/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: " we've gotta beatbox. to prysy" },
        this.whenIReceiveWeveGottaBeatboxToPrysy
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveWeveGottaBeatboxToPrysy() {
    this.goto(-110, -3);
    this.moveBehind();
    this.size = 300;
    this.visible = true;
    yield* this.glide(3.6, 120, -33);
  }
}
