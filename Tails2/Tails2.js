/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tails2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./Tails2/costumes/костюм 1.svg", {
        x: 91.57980400602986,
        y: 151.6176643101966
      })
    ];

    this.sounds = [new Sound("пук", "./Tails2/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-180, -229);
    this.visible = false;
    yield* this.wait(3.1);
    this.visible = true;
    yield* this.glide(0.3, -180, -188);
    this.visible = false;
  }
}
