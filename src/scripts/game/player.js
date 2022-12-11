export class Player {
    constructor(image) {
        this.sprite = add([
            sprite(image)
        ])
        this.isGrounded = false
    }
}