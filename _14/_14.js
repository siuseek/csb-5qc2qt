/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _14 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 2", "./_14/costumes/костюм 2.svg", {
        x: 160.34526886743228,
        y: 167.72699766586538
      }),
      new Costume("костюм 3", "./_14/costumes/костюм 3.svg", {
        x: 160.34527205135151,
        y: 167.7269926658654
      }),
      new Costume("костюм 4", "./_14/costumes/костюм 4.svg", {
        x: 160.34525773486462,
        y: 167.72699533173076
      }),
      new Costume("костюм 25", "./_14/costumes/костюм 25.svg", {
        x: 160.34526886743228,
        y: 167.72699766586538
      }),
      new Costume("костюм 27", "./_14/costumes/костюм 27.svg", {
        x: 160.34527205135151,
        y: 167.7269926658654
      }),
      new Costume("костюм 26", "./_14/costumes/костюм 26.svg", {
        x: 160.34525773486462,
        y: 167.72699533173076
      }),
      new Costume("костюм 24", "./_14/costumes/костюм 24.svg", {
        x: 160.34527205135151,
        y: 167.7269926658654
      }),
      new Costume("костюм 5", "./_14/costumes/костюм 5.svg", {
        x: 160.34526978621608,
        y: 118.63914806286593
      }),
      new Costume("костюм 7", "./_14/costumes/костюм 7.svg", {
        x: 160.3452718375675,
        y: 46.52673225978495
      }),
      new Costume("костюм 6", "./_14/costumes/костюм 6.svg", {
        x: 127.56772161403762,
        y: -3.9708272405819685
      }),
      new Costume("костюм 8", "./_14/costumes/костюм 8.svg", {
        x: 127.56772616999542,
        y: -23.970822731100384
      }),
      new Costume("костюм 28", "./_14/costumes/костюм 28.svg", {
        x: 127.56772072595322,
        y: -69.97084554581835
      }),
      new Costume("костюм 29", "./_14/costumes/костюм 29.svg", {
        x: 127.56772528191104,
        y: -17.97085089109305
      }),
      new Costume("костюм 30", "./_14/costumes/костюм 30.svg", {
        x: 127.56771983786885,
        y: 14.029167067880735
      }),
      new Costume("костюм 9", "./_14/costumes/костюм 9.svg", {
        x: 389.5,
        y: 134.35174431619885
      }),
      new Costume("костюм 10", "./_14/costumes/костюм 10.svg", {
        x: 389.5,
        y: 130.35174527886727
      }),
      new Costume("костюм 11", "./_14/costumes/костюм 11.svg", {
        x: 389.5,
        y: 143.35174459506612
      }),
      new Costume("костюм 12", "./_14/costumes/костюм 12.svg", {
        x: 389.5,
        y: 123.00000459506612
      }),
      new Costume("костюм 13", "./_14/costumes/костюм 13.svg", {
        x: 389.5,
        y: 123.00000459506612
      }),
      new Costume("костюм 14", "./_14/costumes/костюм 14.svg", {
        x: 389.5,
        y: 123.00000459506612
      }),
      new Costume("костюм 15", "./_14/costumes/костюм 15.svg", {
        x: 389.5,
        y: 123.00000459506612
      }),
      new Costume("костюм 16", "./_14/costumes/костюм 16.svg", {
        x: 389.5,
        y: 123.00000459506612
      }),
      new Costume("костюм 17", "./_14/costumes/костюм 17.svg", {
        x: 389.5,
        y: 123.00000459506612
      }),
      new Costume("костюм 18", "./_14/costumes/костюм 18.svg", {
        x: 389.5,
        y: 122.00000459506612
      }),
      new Costume("костюм 19", "./_14/costumes/костюм 19.svg", {
        x: 420.7971229864296,
        y: 122.00000459506612
      }),
      new Costume("костюм 20", "./_14/costumes/костюм 20.svg", {
        x: 468.79712597285913,
        y: 122.00000459506612
      }),
      new Costume("костюм 21", "./_14/costumes/костюм 21.svg", {
        x: 511.7971189592887,
        y: 122.00000459506612
      }),
      new Costume("костюм 22", "./_14/costumes/костюм 22.svg", {
        x: 556.7971219457183,
        y: 122.00000459506612
      }),
      new Costume("костюм 23", "./_14/costumes/костюм 23.svg", {
        x: 621.7971249321479,
        y: 122.00000459506612
      })
    ];

    this.sounds = [new Sound("пук", "./_14/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "lets just keep mooving" },
        this.whenIReceiveLetsJustKeepMooving
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLetsJustKeepMooving() {
    this.costume = "костюм 2";
    this.visible = true;
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    yield* this.wait(0);
    this.costume = "костюм 2";
    yield* this.wait(0);
    this.costume = "костюм 3";
    this.goto(107, 5);
    this.costume = "костюм 2";
    for (let i = 0; i < 28; i++) {
      yield* this.wait(0);
      this.costumeNumber++;
      yield;
    }
    this.visible = false;
    yield* this.broadcastAndWait(" we've gotta beatbox. to prysy");
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.moveAhead();
      yield;
    }
  }
}
