/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _13 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("–", "./_13/costumes/–.svg", {
        x: 12.615514978532616,
        y: -1.109745368007907
      }),
      new Costume("о", "./_13/costumes/о.svg", {
        x: 6.001054615030569,
        y: 0.9619686961655134
      }),
      new Costume("01", "./_13/costumes/01.svg", {
        x: 7.765203451803302,
        y: -3.246797585774914
      }),
      new Costume("А+FT", "./_13/costumes/А+FT.svg", {
        x: 9.394810162771932,
        y: 0.7795298706607241
      }),
      new Costume("FT", "./_13/costumes/FT.svg", {
        x: 7.84569699030979,
        y: -1.9703833479456705
      }),
      new Costume("L", "./_13/costumes/L.svg", {
        x: 10.308960000000042,
        y: -0.738803263834626
      }),
      new Costume("Ah", "./_13/costumes/Ah.svg", {
        x: 5.094537158832054,
        y: -0.6439564263107513
      }),
      new Costume("A+FT2", "./_13/costumes/A+FT2.svg", {
        x: 8.280451181208718,
        y: 0.3469777694891718
      }),
      new Costume("FT1", "./_13/costumes/FT1.svg", {
        x: 10.505825493752297,
        y: 0.39076303988454697
      }),
      new Costume("A+FT1", "./_13/costumes/A+FT1.svg", {
        x: 7.091258886546683,
        y: 0.22456443000555737
      }),
      new Costume("ah", "./_13/costumes/ah.svg", {
        x: 6.131124130200732,
        y: -1.8630425238415569
      }),
      new Costume("FV", "./_13/costumes/FV.svg", {
        x: 3.789721270149613,
        y: -5.124065607299258
      })
    ];

    this.sounds = [new Sound("пук", "./_13/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "lets just keep mooving" },
        this.whenIReceiveLetsJustKeepMooving
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "lets just keep mooving" },
        this.whenIReceiveLetsJustKeepMooving2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenIReceiveLetsJustKeepMooving() {
    this.goto(19, 16);
    this.costume = "–";
    this.visible = true;
    yield* this.wait(0.5);
    for (let i = 0; i < 25; i++) {
      yield* this.wait(0);
      this.costumeNumber++;
      yield;
    }
    this.costume = "–";
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    this.moveAhead();
  }

  *whenGreenFlagClicked4() {}

  *whenIReceiveLetsJustKeepMooving2() {
    while (true) {
      this.moveAhead();
      yield;
    }
  }
}
