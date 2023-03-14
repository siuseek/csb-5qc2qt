/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_3/costumes/костюм 1.svg", {
        x: 93.82687448011566,
        y: 101.70434784277943
      })
    ];

    this.sounds = [new Sound("пук", "./_3/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-12, -228);
    this.visible = false;
    yield* this.wait(3);
    this.visible = true;
    yield* this.glide(0.3, -26, -154);
    this.broadcast("dont kiss the princessss");
    this.visible = false;
  }
}
