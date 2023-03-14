/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_1/costumes/костюм 1.svg", {
        x: 122.21750328983168,
        y: 81.52287824106683
      })
    ];

    this.sounds = [new Sound("пук", "./_1/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "dont kiss the princessss" },
        this.whenIReceiveDontKissThePrincessss
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "dont kiss the princessss" },
        this.whenIReceiveDontKissThePrincessss2
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

  *whenIReceiveDontKissThePrincessss() {}

  *whenGreenFlagClicked2() {}

  *whenIReceiveDontKissThePrincessss2() {
    this.direction = 90;
    this.goto(-163, 50);
    this.visible = true;
    for (let i = 0; i < 15; i++) {
      this.direction += 0.5;
      yield;
    }
    for (let i = 0; i < 6; i++) {
      for (let i = 0; i < 30; i++) {
        this.direction -= 0.5;
        yield;
      }
      for (let i = 0; i < 30; i++) {
        this.direction += 0.5;
        yield;
      }
      yield;
    }
  }

  *whenIReceiveLetsJustKeepMooving() {
    this.visible = false;
  }
}
