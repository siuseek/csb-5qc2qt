/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tails3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("_1", "./Tails3/costumes/_1.svg", {
        x: 136.12721812519612,
        y: 150.72535909137798
      }),
      new Costume("_2", "./Tails3/costumes/_2.svg", {
        x: 136.12721812519612,
        y: 150.72535909137798
      }),
      new Costume("_3", "./Tails3/costumes/_3.svg", {
        x: 136.12721125039215,
        y: 150.72535818275597
      }),
      new Costume("_4", "./Tails3/costumes/_4.svg", {
        x: 136.12721812519612,
        y: 150.725354091378
      })
    ];

    this.sounds = [new Sound("пук", "./Tails3/sounds/пук.wav")];

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
        { name: "guys stop" },
        this.whenIReceiveGuysStop2
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "guys stop" },
        this.whenIReceiveGuysStop3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Moar punching" },
        this.whenIReceiveMoarPunching
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLetsJustKeepMooving() {
    this.visible = false;
  }

  *whenIReceiveGuysStop() {}

  *whenIReceiveGuysStop2() {
    this.goto(0, -268);
    yield* this.wait(0.2);
    this.visible = true;
    for (let i = 0; i < 6; i++) {
      this.y += 40;
      yield;
    }
    for (let i = 0; i < 2; i++) {
      this.y += 10;
      yield;
    }
    for (let i = 0; i < 4; i++) {
      this.y += 2;
      yield;
    }
  }

  *whenthisspriteclicked() {}

  *whenthisspriteclicked2() {}

  *whenIReceiveGuysStop3() {
    for (let i = 0; i < 120; i++) {
      this.costumeNumber++;
      yield* this.wait(0.03);
      yield;
    }
  }

  *whenIReceiveMoarPunching() {
    this.visible = false;
  }
}
