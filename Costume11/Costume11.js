/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Costume11 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1 (1)", "./Costume11/costumes/costume1 (1).svg", {
        x: 240,
        y: 165.5
      }),
      new Costume("costume1 (1)2", "./Costume11/costumes/costume1 (1)2.svg", {
        x: 296.55819,
        y: -53.09646558416648
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "lets just keep mooving" },
        this.whenIReceiveLetsJustKeepMooving
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "guys stop" },
        this.whenIReceiveGuysStop
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLetsJustKeepMooving() {
    this.goto(0, -10);
    this.visible = true;
    this.effects.ghost = 20;
  }

  *whenIReceiveGuysStop() {
    this.visible = false;
  }
}
