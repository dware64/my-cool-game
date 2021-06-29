sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.fire, 100)
    music.baDing.play()
})
let projectile: Sprite = null
let WareBot = sprites.create(img`
    . . . . . . . . . . . . 
    . . e e e e e e e e . . 
    . . e e e e e e e e . . 
    . . e e e e e e e e . . 
    . . e e e e e e e e . . 
    . . e e e e e e e e . . 
    . e e e e e e e e e e . 
    . e e f f e e f f e e . 
    . e e e e e e e e e e . 
    . . e e f 1 1 f e e . . 
    . . . . f f f f . . . . 
    e e 8 8 8 8 8 8 8 8 e e 
    . . . 8 8 8 8 8 8 . . . 
    . . . 2 2 2 2 2 2 . . . 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(5)
controller.moveSprite(WareBot)
WareBot.setStayInScreen(true)
info.setScore(0)
info.startCountdown(50)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 0)
    projectile.setPosition(0, randint(0, 120))
})
