/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_8/costumes/костюм 1.svg", {
        x: 152.18790857985482,
        y: 87.64518
      })
    ];

    this.sounds = [new Sound("пук", "./_8/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "dont kiss the princessss" },
        this.whenIReceiveDontKissThePrincessss
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "lets just keep mooving" },
        this.whenIReceiveLetsJustKeepMooving
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDontKissThePrincessss() {
    this.goto(62, -72);
    this.visible = true;
    for (let i = 0; i < 70; i++) {
      for (let i = 0; i < 2; i++) {
        this.y += 1;
        yield;
      }
      for (let i = 0; i < 2; i++) {
        this.y -= 1;
        yield;
      }
      yield;
    }
  }

  *whenIReceiveLetsJustKeepMooving() {
    this.visible = false;
  }
}
