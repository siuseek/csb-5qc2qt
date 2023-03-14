/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_5/costumes/костюм 1.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("костюм 2", "./_5/costumes/костюм 2.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("костюм 3", "./_5/costumes/костюм 3.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("костюм 4", "./_5/costumes/костюм 4.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("костюм 5", "./_5/costumes/костюм 5.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("костюм 6", "./_5/costumes/костюм 6.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("костюм 7", "./_5/costumes/костюм 7.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("костюм 8", "./_5/costumes/костюм 8.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("костюм 9", "./_5/costumes/костюм 9.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("костюм 10", "./_5/costumes/костюм 10.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("костюм 13", "./_5/costumes/костюм 13.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("костюм 12", "./_5/costumes/костюм 12.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("костюм 11", "./_5/costumes/костюм 11.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("кост12", "./_5/costumes/кост12.svg", {
        x: 60.120810000000006,
        y: 159.01939
      }),
      new Costume("кост 13", "./_5/costumes/кост 13.svg", {
        x: 60.87882104158217,
        y: 159.01939
      })
    ];

    this.sounds = [new Sound("пук", "./_5/sounds/пук.wav")];

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
    this.costume = "костюм 1";
    this.goto(3, -113);
    this.visible = true;
    yield* this.wait(0.5);
    this.costume = "костюм 2";
    yield* this.wait(0.05);
    this.costume = "костюм 3";
    yield* this.wait(0.05);
    this.costume = "костюм 4";
    yield* this.wait(0.05);
    this.costume = "костюм 5";
    yield* this.wait(0.05);
    this.costume = "костюм 6";
    yield* this.wait(3);
    this.costume = "костюм 5";
    yield* this.wait(0.05);
    this.costume = "костюм 4";
    yield* this.wait(0.05);
    this.costume = "костюм 7";
    yield* this.wait(0.05);
    this.costume = "костюм 8";
    yield* this.wait(0.05);
    this.costume = "костюм 9";
    yield* this.wait(0.05);
    this.costume = "костюм 12";
    yield* this.wait(2.5);
    this.costume = "кост 13";
  }

  *whenIReceiveLetsJustKeepMooving() {
    this.visible = false;
  }
}
