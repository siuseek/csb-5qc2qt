/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Costume112 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1 (1)", "./Costume112/costumes/costume1 (1).svg", {
        x: 240,
        y: 165.5
      }),
      new Costume("costume1 (1)2", "./Costume112/costumes/costume1 (1)2.svg", {
        x: 95.86773785082173,
        y: -53.09646116833312
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
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Moar punching" },
        this.whenIReceiveMoarPunching
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hows obolt this thunders" },
        this.whenIReceiveHowsOboltThisThunders
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

  *whenIReceiveMoarPunching() {
    this.visible = true;
  }

  *whenIReceiveHowsOboltThisThunders() {
    this.visible = false;
  }
}
