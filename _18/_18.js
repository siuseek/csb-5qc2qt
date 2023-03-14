/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _18 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("_", "./_18/costumes/_.svg", {
        x: 14.000010000000003,
        y: 5.499989999999997
      }),
      new Costume("o", "./_18/costumes/o.svg", {
        x: -3.8064186575332712,
        y: 8.212479185977287
      }),
      new Costume("01", "./_18/costumes/01.svg", {
        x: 0.8299439510369666,
        y: 11.35851042014474
      }),
      new Costume("FT1", "./_18/costumes/FT1.svg", {
        x: 0.43214430124345427,
        y: 9.604773760066962
      }),
      new Costume("ah", "./_18/costumes/ah.svg", {
        x: 10.357093861612952,
        y: 12.524427381400074
      }),
      new Costume("FV", "./_18/costumes/FV.svg", {
        x: 8.349109781357413,
        y: 3.1140730833944588
      }),
      new Costume("ah1", "./_18/costumes/ah1.svg", {
        x: 14.471232580020853,
        y: 4.381758642350775
      }),
      new Costume("Ah1", "./_18/costumes/Ah1.svg", {
        x: 5.93299999591693,
        y: 11.624898476045416
      }),
      new Costume("Ah+FT", "./_18/costumes/Ah+FT.svg", {
        x: 6.3125,
        y: 8.298161290170526
      }),
      new Costume("o+FT", "./_18/costumes/o+FT.svg", {
        x: 6.286586828877063,
        y: 7.714613978189675
      }),
      new Costume("L", "./_18/costumes/L.svg", {
        x: 6.712451456524235,
        y: 9.705061905841887
      })
    ];

    this.sounds = [new Sound("пук", "./_18/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "lets just keep mooving" },
        this.whenIReceiveLetsJustKeepMooving
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: " we've gotta beatbox. to prysy" },
        this.whenIReceiveWeveGottaBeatboxToPrysy
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLetsJustKeepMooving() {
    this.visible = false;
  }

  *whenIReceiveWeveGottaBeatboxToPrysy() {
    this.visible = true;
    this.moveAhead();
    for (let i = 0; i < 27; i++) {
      yield* this.wait(0);
      this.costumeNumber++;
      yield;
    }
    for (let i = 0; i < 5; i++) {
      this.costume = "ah1";
      yield* this.wait(0);
      this.costume = "Ah1";
      yield* this.wait(0.1);
      yield;
    }
    this.costume = "_";
    this.broadcast("guys stop");
    this.visible = false;
  }
}
