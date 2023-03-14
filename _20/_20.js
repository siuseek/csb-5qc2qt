/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _20 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("_", "./_20/costumes/_.svg", {
        x: 3.423403963003409,
        y: 5.500000000000028
      }),
      new Costume("o", "./_20/costumes/o.svg", {
        x: -3.3064201313843284,
        y: 8.962479666511143
      }),
      new Costume("01", "./_20/costumes/01.svg", {
        x: 0.8299543022534124,
        y: 4.608505910512861
      }),
      new Costume("FT1", "./_20/costumes/FT1.svg", {
        x: 0.432149471883406,
        y: 8.35477376006699
      }),
      new Costume("ah", "./_20/costumes/ah.svg", {
        x: 10.357102987328744,
        y: 7.1662793153991515
      }),
      new Costume("FV", "./_20/costumes/FV.svg", {
        x: 8.349115096134085,
        y: 0.9180621250077081
      }),
      new Costume("ah1", "./_20/costumes/ah1.svg", {
        x: 14.4712337768743,
        y: 1.631754815191016
      }),
      new Costume("Ah1", "./_20/costumes/Ah1.svg", {
        x: 5.933003354347761,
        y: 8.979914507222674
      }),
      new Costume("Ah+FT", "./_20/costumes/Ah+FT.svg", {
        x: 6.3125,
        y: 8.298165915609644
      }),
      new Costume("o+FT", "./_20/costumes/o+FT.svg", {
        x: 7.934775181720482,
        y: 8.56790031485815
      }),
      new Costume("L", "./_20/costumes/L.svg", {
        x: 6.71244968478635,
        y: 7.455065358762852
      })
    ];

    this.sounds = [new Sound("пук", "./_20/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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

  *whenIReceiveGuysStop() {
    this.moveAhead();
    this.visible = true;
    this.costume = "_";
    yield* this.wait(0.1);
    this.costume = "o";
    yield* this.wait(0.1);
    this.costume = 1;
    yield* this.wait(0.1);
    this.costume = "FT1";
    yield* this.wait(0.1);
    this.costume = "ah";
    yield* this.wait(0.1);
    this.costume = "FV";
    yield* this.wait(0.1);
    this.costume = "_";
    yield* this.wait(0.1);
    this.costume = "o";
    yield* this.wait(0.1);
    this.costume = "ah";
    yield* this.wait(0.1);
    this.costume = "FT1";
    yield* this.wait(0.1);
    this.costume = "ah";
    yield* this.wait(0.1);
    this.costume = "o";
    yield* this.wait(0.1);
    this.costume = "_";
    yield* this.wait(0.5);
    this.costume = "L";
    yield* this.wait(0.1);
    this.costume = 1;
    yield* this.wait(0.1);
    this.costume = "Ah+FT";
    yield* this.wait(0.1);
    this.costume = "ah";
    yield* this.wait(0.1);
    this.costume = "L";
    yield* this.wait(0.1);
    this.costume = "Ah1";
    yield* this.wait(0.1);
    this.costume = "FV";
    yield* this.wait(0.1);
    this.costume = "ah";
    yield* this.wait(0.1);
    this.costume = "_";
    yield* this.wait(0.1);
    this.costume = "FT1";
    yield* this.wait(0.1);
    this.costume = "L";
    yield* this.wait(0.1);
    this.costume = "ah";
    yield* this.wait(0.1);
    this.costume = "FT1";
    yield* this.wait(0.1);
    this.costume = "Ah1";
    yield* this.wait(0.1);
    this.costume = "FV";
    yield* this.wait(0.1);
    this.costume = "ah";
    yield* this.wait(0.1);
    this.costume = "_";
    yield* this.wait(0.1);
    this.costume = "FT1";
    yield* this.wait(0.1);
    this.costume = "L";
    yield* this.wait(0.1);
    this.costume = "ah";
    yield* this.wait(0.1);
    this.costume = 1;
    yield* this.wait(0.1);
    this.costume = "Ah+FT";
    yield* this.wait(0.1);
    this.costume = "_";
    this.visible = false;
    yield* this.broadcastAndWait("Moar punching");
  }
}
