/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tails4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("_", "./Tails4/costumes/_.svg", {
        x: 55.310779999999994,
        y: 150.7253692186737
      }),
      new Costume("ft", "./Tails4/costumes/ft.svg", {
        x: 55.31075999999999,
        y: 150.72535909137798
      }),
      new Costume("a", "./Tails4/costumes/a.svg", {
        x: 55.310759999999874,
        y: 150.72535818275597
      }),
      new Costume("A", "./Tails4/costumes/A.svg", {
        x: 55.31075000000001,
        y: 150.72535818275597
      }),
      new Costume("a1", "./Tails4/costumes/a1.svg", {
        x: 55.31075000000001,
        y: 150.72535909137798
      }),
      new Costume("FT", "./Tails4/costumes/FT.svg", {
        x: 55.31075999999999,
        y: 150.72535909137798
      }),
      new Costume("FT1", "./Tails4/costumes/FT1.svg", {
        x: 55.31075999999999,
        y: 150.72535909137798
      }),
      new Costume("o", "./Tails4/costumes/o.svg", {
        x: 55.31075999999999,
        y: 150.72535909137798
      }),
      new Costume(".", "./Tails4/costumes/..svg", {
        x: 55.310759999999874,
        y: 150.72535818275597
      }),
      new Costume("ft1", "./Tails4/costumes/ft1.svg", {
        x: 55.31075999999999,
        y: 150.72535909137798
      }),
      new Costume("S", "./Tails4/costumes/S.svg", {
        x: 55.31075999999999,
        y: 150.72535909137798
      }),
      new Costume(".1", "./Tails4/costumes/.1.svg", {
        x: 55.31075999999999,
        y: 150.72535909137798
      }),
      new Costume("o1", "./Tails4/costumes/o1.svg", {
        x: 55.31075999999999,
        y: 150.72535909137798
      }),
      new Costume("a2", "./Tails4/costumes/a2.svg", {
        x: 55.31075999999999,
        y: 150.72535727413396
      }),
      new Costume("A1", "./Tails4/costumes/A1.svg", {
        x: 55.31075999999999,
        y: 150.72536318275598
      }),
      new Costume("a3", "./Tails4/costumes/a3.svg", {
        x: 55.31075999999999,
        y: 150.725364091378
      }),
      new Costume("S1", "./Tails4/costumes/S1.svg", {
        x: 55.31075999999999,
        y: 150.72535727413396
      }),
      new Costume("S2", "./Tails4/costumes/S2.svg", {
        x: 55.31075999999999,
        y: 150.72535909137798
      }),
      new Costume("A2", "./Tails4/costumes/A2.svg", {
        x: 55.31075999999999,
        y: 150.725364091378
      }),
      new Costume(".2", "./Tails4/costumes/.2.svg", {
        x: 55.31075999999999,
        y: 150.72536318275598
      })
    ];

    this.sounds = [new Sound("пук", "./Tails4/sounds/пук.wav")];

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
    this.visible = true;
    this.goto(-115, 27);
    this.costume = "_";
    this.visible = true;
    yield* this.wait(0.05);
    this.costume = "ft";
    yield* this.wait(0.05);
    this.costume = "a";
    yield* this.wait(0.05);
    this.costume = "A";
    yield* this.wait(0.06);
    this.costume = "a1";
    yield* this.wait(0.05);
    this.costume = "FT";
    yield* this.wait(0.04);
    this.costume = "FT1";
    yield* this.wait(0.04);
    this.costume = "a";
    yield* this.wait(0.05);
    this.costume = "A";
    yield* this.wait(0.05);
    this.costume = "a1";
    yield* this.wait(0.05);
    this.costume = "a";
    yield* this.wait(0.05);
    this.costume = "ft";
    yield* this.wait(0.05);
    this.costume = "_";
    yield* this.wait(0.03);
    this.costume = "ft";
    yield* this.wait(0.05);
    this.costume = "FT1";
    yield* this.wait(0.06);
    this.costume = "a1";
    yield* this.wait(0.06);
    this.costume = "o";
    yield* this.wait(0.06);
    this.costume = ".";
    yield* this.wait(0.06);
    this.costume = "ft1";
    yield* this.wait(0.06);
    this.costume = "a";
    yield* this.wait(0.06);
    this.costume = "A";
    yield* this.wait(0.06);
    this.costume = "a1";
    yield* this.wait(0.06);
    this.costume = "S";
    yield* this.wait(0.06);
    this.costume = "a";
    yield* this.wait(0.06);
    this.costume = "A";
    yield* this.wait(0.06);
    this.costume = "a1";
    yield* this.wait(0.06);
    this.costume = "_";
    yield* this.wait(0.05);
    this.costume = 0.1;
    yield* this.wait(0.06);
    this.costume = "o1";
    yield* this.wait(0.06);
    this.costume = "a2";
    yield* this.wait(0.06);
    this.costume = "A1";
    yield* this.wait(0.06);
    this.costume = "a3";
    yield* this.wait(0.05);
    this.costume = "S1";
    yield* this.wait(0.05);
    this.costume = "S2";
    yield* this.wait(0.06);
    for (let i = 0; i < 3; i++) {
      this.costume = "A1";
      yield* this.wait(0.06);
      this.costume = "A2";
      yield* this.wait(0.06);
      yield;
    }
    this.costume = "a2";
    yield* this.wait(0.05);
    this.costume = "S1";
    yield* this.wait(0.06);
    this.costume = 0.2;
    yield* this.wait(0.06);
    this.costume = "_";
    yield* this.wait(0.05);
  }

  *whenIReceiveLetsJustKeepMooving() {
    this.visible = false;
  }
}
