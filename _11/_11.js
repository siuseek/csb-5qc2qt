/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _11 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("_", "./_11/costumes/_.svg", {
        x: 137.75514068600467,
        y: 162.52317541912743
      }),
      new Costume("ah", "./_11/costumes/ah.svg", {
        x: 137.75514911602778,
        y: 162.52318251476458
      }),
      new Costume("Ah", "./_11/costumes/Ah.svg", {
        x: 137.75514568600465,
        y: 162.52319041912742
      }),
      new Costume("01", "./_11/costumes/01.svg", {
        x: 137.75514637200916,
        y: 162.5231808382548
      }),
      new Costume("o", "./_11/costumes/o.svg", {
        x: 137.7551477440182,
        y: 162.52318167650955
      }),
      new Costume("o+FT", "./_11/costumes/o+FT.svg", {
        x: 137.75515068600467,
        y: 162.5231804191274
      }),
      new Costume("FT", "./_11/costumes/FT.svg", {
        x: 137.7551313720092,
        y: 162.52316083825474
      }),
      new Costume("FoT", "./_11/costumes/FoT.svg", {
        x: 137.7551313720092,
        y: 162.52316083825474
      }),
      new Costume("ah+FT", "./_11/costumes/ah+FT.svg", {
        x: 137.75512568600467,
        y: 162.52315541912742
      })
    ];

    this.sounds = [new Sound("пук", "./_11/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "3" }, this.whenIReceive3),
      new Trigger(Trigger.BROADCAST, { name: "3" }, this.whenIReceive4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "3" }, this.whenIReceive5),
      new Trigger(Trigger.BROADCAST, { name: "3" }, this.whenIReceive6)
    ];
  }

  *whenIReceive3() {
    for (let i = 0; i < 9; i++) {
      this.costumeNumber++;
      yield;
    }
  }

  *whenIReceive4() {
    this.costume = "_";
    for (let i = 0; i < 25; i++) {
      yield* this.wait(0);
      this.costumeNumber++;
      yield;
    }
    this.costume = "_";
    this.visible = false;
    this.broadcast("4");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive5() {
    this.goto(145, -60);
    this.visible = true;
    for (let i = 0; i < 4; i++) {
      this.x -= 35;
      yield;
    }
    for (let i = 0; i < 3; i++) {
      this.x -= 10;
      yield;
    }
    for (let i = 0; i < 2; i++) {
      this.x -= 4;
      yield;
    }
  }

  *whenIReceive6() {
    this.visible = true;
    while (true) {
      this.moveAhead();
      yield;
    }
  }
}
