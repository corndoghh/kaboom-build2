import kaboom from "kaboom";
import { levels } from "./level"
import { levelManager } from "./levelManager";
import { loadAssets } from "./loadAssets";
import { Player } from "./player";

kaboom()

console.log(levels[0].length)

await loadAssets()

const player = new Player("player")

const level = new levelManager(levels[0], player)

