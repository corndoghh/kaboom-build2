export class Player {
    constructor(image) {
        this.sprite = add([
            sprite(image),
            pos(0,0),
            area(),
            body()
        ])
        this.isGrounded = false
    }
}