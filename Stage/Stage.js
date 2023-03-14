/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("baground 1", "./Stage/costumes/baground 1.png", {
        x: 480,
        y: 360
      }),
      new Costume("bagraond 2", "./Stage/costumes/bagraond 2.png", {
        x: 480,
        y: 360
      }),
      new Costume("декор 1", "./Stage/costumes/декор 1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound("пук", "./Stage/sounds/пук.wav"),
      new Sound("Metropolis Mayhe", "./Stage/sounds/Metropolis Mayhe.wav"),
      new Sound("Metropolis Mayhe2", "./Stage/sounds/Metropolis Mayhe2.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "hows obolt this thunders" },
        this.whenIReceiveHowsOboltThisThunders
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "lets just keep mooving" },
        this.whenIReceiveLetsJustKeepMooving
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenIReceiveHowsOboltThisThunders() {
    this.costume = "bagraond 2";
  }

  *whenIReceiveLetsJustKeepMooving() {
    this.costume = "bagraond 2";
  }

  *whenGreenFlagClicked() {
    this.costume = "baground 1";
    yield* this.playSoundUntilDone("Metropolis Mayhe");
  }

  *whenGreenFlagClicked2() {}
}
