/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("–", "./_6/costumes/–.svg", {
        x: 12.956463214285463,
        y: -4.897962385431441
      }),
      new Costume("о", "./_6/costumes/о.svg", {
        x: 3.6570614683626843,
        y: -2.7409947716295164
      }),
      new Costume("01", "./_6/costumes/01.svg", {
        x: 4.515205476168916,
        y: -5.996807541588311
      }),
      new Costume("А+FT", "./_6/costumes/А+FT.svg", {
        x: 5.445525022830964,
        y: -2.860280335946385
      }),
      new Costume("FT", "./_6/costumes/FT.svg", {
        x: 3.9706901845199525,
        y: -3.3453814382512235
      }),
      new Costume("L", "./_6/costumes/L.svg", {
        x: 6.183960000000013,
        y: -3.7388074478759563
      }),
      new Costume("Ah", "./_6/costumes/Ah.svg", {
        x: 3.0945371588320256,
        y: -2.1439264263107134
      }),
      new Costume("A+FT2", "./_6/costumes/A+FT2.svg", {
        x: 4.766183035714278,
        y: -1.2167606714986334
      }),
      new Costume("FT1", "./_6/costumes/FT1.svg", {
        x: 9.907813379156693,
        y: -1.216760671498804
      }),
      new Costume("A+FT1", "./_6/costumes/A+FT1.svg", {
        x: 4.69258034307407,
        y: 0.2771433358033448
      }),
      new Costume("ah", "./_6/costumes/ah.svg", {
        x: 6.13112413020076,
        y: 0.13695747615835785
      }),
      new Costume("FV", "./_6/costumes/FV.svg", {
        x: 3.591383562291071,
        y: -6.378864697118473
      })
    ];

    this.sounds = [new Sound("пук", "./_6/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "dont kiss the princessss" },
        this.whenIReceiveDontKissThePrincessss
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDontKissThePrincessss() {
    yield* this.wait(4);
    this.moveAhead();
    this.visible = true;
    this.costume = "–";
    yield* this.wait(0.04);
    this.costume = "о";
    yield* this.wait(0.04);
    this.costume = 1;
    yield* this.wait(0.04);
    this.costume = "А+FT";
    yield* this.wait(0.03);
    this.costume = "Ah";
    yield* this.wait(0.03);
    this.costume = "ah";
    yield* this.wait(0.03);
    this.costume = "FV";
    yield* this.wait(0.03);
    this.costume = "ah";
    yield* this.wait(0.03);
    this.costume = "Ah";
    yield* this.wait(0.03);
    this.costume = "Ah";
    yield* this.wait(0.03);
    this.costume = "A+FT2";
    yield* this.wait(0.03);
    this.costume = "FT1";
    yield* this.wait(0.03);
    this.costume = "ah";
    yield* this.wait(0.03);
    this.costume = "A+FT1";
    yield* this.wait(0.03);
    this.costume = "FT";
    yield* this.wait(0.03);
    this.costume = "A+FT1";
    yield* this.wait(0.03);
    this.costume = "Ah";
    yield* this.wait(0.04);
    this.costume = 1;
    yield* this.wait(0.045);
    this.costume = "о";
    yield* this.wait(0.045);
    this.costume = "FT";
    yield* this.wait(0.04);
    this.costume = "–";
    yield* this.wait(2);
    this.costume = "о";
    yield* this.wait(0.1);
    this.costume = 1;
    yield* this.wait(0.1);
    this.costume = "Ah";
    yield* this.wait(0.1);
    this.costume = "A+FT1";
    yield* this.wait(0.1);
    this.costume = "FT";
    yield* this.wait(0.1);
    this.costume = "FT1";
    yield* this.wait(0.6);
    this.costume = "A+FT2";
    yield* this.wait(0.06);
    this.costume = "Ah";
    yield* this.wait(0.06);
    this.costume = "ah";
    yield* this.wait(0.06);
    this.costume = "FV";
    yield* this.wait(0.06);
    this.costume = "о";
    yield* this.wait(0.06);
    this.costume = "–";
    yield* this.wait(0.5);
    this.broadcast("lets just keep mooving");
    this.visible = false;
  }
}
