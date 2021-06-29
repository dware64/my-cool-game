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
