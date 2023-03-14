/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Download extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("download", "./Download/costumes/download.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "dont kiss the princessss" },
        this.whenIReceiveDontKissThePrincessss
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, -44);
    this.visible = true;
    yield* this.glide(1.5, 0, 40);
  }

  *whenIReceiveDontKissThePrincessss() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(1.5);
    this.visible = false;
  }
}
