/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _21 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 2", "./_21/costumes/костюм 2.svg", {
        x: 160.34526886743228,
        y: 167.72699766586538
      }),
      new Costume("костюм 4", "./_21/costumes/костюм 4.svg", {
        x: 196.53439341205316,
        y: 166.8603673085512
      }),
      new Costume("костюм 5", "./_21/costumes/костюм 5.svg", {
        x: 199.59069468221145,
        y: 166.81774419577772
      }),
      new Costume("костюм 6", "./_21/costumes/костюм 6.svg", {
        x: 183.85482246706584,
        y: 166.7615607302108
      }),
      new Costume("костюм 3", "./_21/costumes/костюм 3.svg", {
        x: 200.02380858223887,
        y: 157.84878744812747
      }),
      new Costume("костюм 7", "./_21/costumes/костюм 7.svg", {
        x: 200.02380602689357,
        y: 157.7406553032415
      }),
      new Costume("костюм 8", "./_21/costumes/костюм 8.svg", {
        x: 179.1163842052153,
        y: 157.7406534466596
      }),
      new Costume("костюм 9", "./_21/costumes/костюм 9.svg", {
        x: 246.91815783972478,
        y: 157.7406534466596
      }),
      new Costume("костюм 10", "./_21/costumes/костюм 10.svg", {
        x: 250.95742780772773,
        y: 157.7406542233298
      }),
      new Costume("костюм 11", "./_21/costumes/костюм 11.svg", {
        x: 246.91815783972478,
        y: 157.7406534466596
      }),
      new Costume("костюм 12", "./_21/costumes/костюм 12.svg", {
        x: 250.95742780772773,
        y: 157.7406542233298
      }),
      new Costume("костюм 14", "./_21/costumes/костюм 14.svg", {
        x: 250.95742780772773,
        y: 157.7406542233298
      }),
      new Costume("костюм 13", "./_21/costumes/костюм 13.svg", {
        x: 246.91815783972478,
        y: 157.7406534466596
      }),
      new Costume("костюм 15", "./_21/costumes/костюм 15.svg", {
        x: 250.95741840150376,
        y: 157.7406534466596
      }),
      new Costume("костюм 16", "./_21/costumes/костюм 16.svg", {
        x: 246.9181556490535,
        y: 157.74065266998937
      }),
      new Costume("костюм 17", "./_21/costumes/костюм 17.svg", {
        x: 250.95741840150376,
        y: 157.7406534466596
      }),
      new Costume("костюм 18", "./_21/costumes/костюм 18.svg", {
        x: 246.9181556490535,
        y: 157.74065266998937
      }),
      new Costume("костюм 19", "./_21/costumes/костюм 19.svg", {
        x: 250.95741840150376,
        y: 157.7406534466596
      }),
      new Costume("костюм 20", "./_21/costumes/костюм 20.svg", {
        x: 246.9181556490535,
        y: 157.74065266998937
      }),
      new Costume("костюм 21", "./_21/costumes/костюм 21.svg", {
        x: 250.95741840150376,
        y: 157.7406534466596
      }),
      new Costume("костюм 22", "./_21/costumes/костюм 22.svg", {
        x: 246.9181556490535,
        y: 157.74065266998937
      }),
      new Costume("костюм 23", "./_21/costumes/костюм 23.svg", {
        x: 250.95741840150376,
        y: 157.7406534466596
      }),
      new Costume("костюм 1", "./_21/costumes/костюм 1.svg", {
        x: 121.85137620427065,
        y: 181.94324394854735
      }),
      new Costume("костюм 36", "./_21/costumes/костюм 36.svg", {
        x: 121.85137620427065,
        y: 181.94324394854735
      }),
      new Costume("костюм 24", "./_21/costumes/костюм 24.svg", {
        x: 105.35137747314852,
        y: 181.9432588092167
      }),
      new Costume("костюм 35", "./_21/costumes/костюм 35.svg", {
        x: 105.35137640786016,
        y: 181.94325366988605
      }),
      new Costume("костюм 25", "./_21/costumes/костюм 25.svg", {
        x: 167.30938313705752,
        y: 123.3131165426928
      }),
      new Costume("костюм 26", "./_21/costumes/костюм 26.svg", {
        x: 167.30938549387457,
        y: 109.79960205878393
      }),
      new Costume("костюм 27", "./_21/costumes/костюм 27.svg", {
        x: 167.30937785069165,
        y: 78.26806955685691
      }),
      new Costume("костюм 28", "./_21/costumes/костюм 28.svg", {
        x: 167.30938235681703,
        y: 43.73354402960473
      }),
      new Costume("костюм 29", "./_21/costumes/костюм 29.svg", {
        x: 167.30938471363407,
        y: 13.703513029179334
      }),
      new Costume("костюм 30", "./_21/costumes/костюм 30.svg", {
        x: 167.30938707045115,
        y: -31.3415329862612
      }),
      new Costume("костюм 31", "./_21/costumes/костюм 31.svg", {
        x: 167.30937942726825,
        y: -61.371563986686624
      }),
      new Costume("костюм 32", "./_21/costumes/костюм 32.svg", {
        x: 167.30938235681703,
        y: -97.40760200643103
      }),
      new Costume("костюм 33", "./_21/costumes/костюм 33.svg", {
        x: 167.30938471363407,
        y: -142.45264802187057
      }),
      new Costume("костюм 34", "./_21/costumes/костюм 34.svg", {
        x: 167.30938707045115,
        y: -205.51571205532747
      }),
      new Costume("костюм 37", "./_21/costumes/костюм 37.svg", {
        x: 167.30937942726825,
        y: -252.06225957226832
      })
    ];

    this.sounds = [new Sound("пук", "./_21/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Moar punching" },
        this.whenIReceiveMoarPunching
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Moar punching" },
        this.whenIReceiveMoarPunching2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {}

  *whenIReceiveMoarPunching() {
    this.costume = "костюм 2";
    this.goto(217, -20);
    this.visible = true;
    for (let i = 0; i < 19; i++) {
      yield* this.wait(0);
      this.costumeNumber++;
      yield;
    }
    this.costume = "костюм 24";
    for (let i = 0; i < 12; i++) {
      this.costumeNumber++;
      yield;
    }
    yield* this.broadcastAndWait("hows obolt this thunders");
  }

  *whenIReceiveMoarPunching2() {
    yield* this.glide(1, -126, 15);
  }
}
