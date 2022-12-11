import { levels } from "./level"

export class levelManager {
    constructor (initializeLevel, player) {
        this.initializeLevel = initializeLevel
        this.player = player
        console.log(this.player.sprite.pos)
        this.player.sprite.scale = 0.1

        this.level = this.spawnLevel(this.initializeLevel, 100, 10)



        this.startMovementLoop()
    }

    spawnLevel(level, widthPercent, blockHeight) {
        const x = level[0].length
        const y = level.length
        addLevel(level, { width: width()/x * (widthPercent/100), height: height()/(y-1) - blockHeight/y, "=": () => [
            rect(width()/x,blockHeight)
        ], "p": (vec) => {this.player.sprite.pos = vec2(vec.x*width()/x, vec.y*height()/(y-1))}})
        console.log(this.player.sprite.pos)
    }       

    startMovementLoop() {
        if (this.movementLoop != null) { this.movementLoop() }

        const isMoveKey = (char) => { return (char == "a" || char == " " || char == "d") }
        const getDir = (code) => { return {x: code == "a" ? -1 : code == "d" ? 1 : 0, y: code == " " ? 1 : 0} }


        this.movementLoop = onCharInput((char) => {
            if (!isMoveKey(char)) { return }

            this.player.moveBy(vec2(getDir(char)))


        })
    }
}