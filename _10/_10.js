/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_10/costumes/костюм 1.svg", {
        x: 131.05953172391906,
        y: 115.61186440295052
      }),
      new Costume("костюм 2", "./_10/costumes/костюм 2.svg", {
        x: 131.05952672391908,
        y: 115.61186440295052
      }),
      new Costume("костюм 3", "./_10/costumes/костюм 3.svg", {
        x: 131.05953172391906,
        y: 115.61186440295052
      }),
      new Costume("кост 4", "./_10/costumes/кост 4.svg", {
        x: 131.05952672391908,
        y: 115.61186440295052
      }),
      new Costume("кост 5", "./_10/costumes/кост 5.svg", {
        x: 127.50980743908069,
        y: 115.61186440295052
      }),
      new Costume("кост 6", "./_10/costumes/кост 6.svg", {
        x: 82.249575,
        y: 115.61185440295053
      }),
      new Costume("кост 7", "./_10/costumes/кост 7.svg", {
        x: 131.05952672391908,
        y: 115.61186440295052
      }),
      new Costume("кост 8", "./_10/costumes/кост 8.svg", {
        x: 131.0595234478381,
        y: 115.61186380590104
      }),
      new Costume("кост 9", "./_10/costumes/кост 9.svg", {
        x: 130.32280010974057,
        y: 115.61185440295053
      }),
      new Costume("кост 10", "./_10/costumes/кост 10.svg", {
        x: 131.14113010974057,
        y: 115.61186440295052
      }),
      new Costume("кост 11", "./_10/costumes/кост 11.svg", {
        x: 127.97446510974058,
        y: 115.61186440295052
      })
    ];

    this.sounds = [new Sound("пук", "./_10/sounds/пук.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "lets just keep mooving" },
        this.whenIReceiveLetsJustKeepMooving
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "dont kiss the princessss" },
        this.whenIReceiveDontKissThePrincessss
      )
    ];
  }

  *whenIReceiveLetsJustKeepMooving() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDontKissThePrincessss() {
    this.goto(151, 15);
    this.costume = "костюм 1";
    this.visible = true;
    yield* this.wait(0.5);
    this.costume = "костюм 2";
    yield* this.wait(0.09);
    this.costume = "костюм 3";
    for (let i = 0; i < 24; i++) {
      yield* this.wait(0.05);
      this.costume = "кост 4";
      yield* this.wait(0.05);
      this.costume = "костюм 3";
      yield;
    }
    for (let i = 0; i < 5; i++) {
      yield* this.wait(0.05);
      this.costume = "кост 7";
      yield* this.wait(0.05);
      this.costume = "кост 8";
      yield;
    }
    this.costume = "кост 5";
    yield* this.wait(0.05);
    this.costume = "кост 6";
    yield* this.wait(0.05);
    this.costume = "кост 7";
    yield* this.wait(0.02);
    this.costume = "кост 9";
    yield* this.wait(0.05);
    this.costume = "кост 10";
    yield* this.wait(0.05);
    for (let i = 0; i < 25; i++) {
      yield* this.wait(0.05);
      this.costume = "кост 11";
      yield* this.wait(0.05);
      this.costume = "кост 10";
      yield;
    }
  }
}
