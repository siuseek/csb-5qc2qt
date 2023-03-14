/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _22 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_22/costumes/костюм 1.svg", {
        x: 158.05425755397366,
        y: 187.85063670505022
      })
    ];

    this.sounds = [new Sound("пук", "./_22/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hows obolt this thunders" },
        this.whenIReceiveHowsOboltThisThunders
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveHowsOboltThisThunders() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceive2() {
    this.visible = false;
  }
}
