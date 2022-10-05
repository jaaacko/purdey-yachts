controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . 2 . . . 2 2 2 2 . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 150, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    otherSprite.destroy(effects.confetti, 500)
    scene.cameraShake(4, 500)
})
let enemy_ship: Sprite = null
let health_ship: Sprite = null
let statusbar: StatusBarSprite = null
let life_ship: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 8 8 8 8 . . . . . . . . . . 
    . . . 8 1 1 8 8 . . . . . . . . 
    . . . 8 1 1 1 1 8 . . . . . . . 
    8 . . 8 1 1 1 1 1 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 5 5 5 5 8 . . 
    8 5 5 5 5 5 5 5 5 5 5 5 5 8 . . 
    . 8 5 5 5 5 5 5 5 5 5 5 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 100)
mySprite.setStayInScreen(true)
info.setLife(3)
info.startCountdown(180)
game.onUpdateInterval(5000, function () {
    life_ship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 . . . . . . . . 
        . . . . . 8 5 8 . . . . . . . . 
        . . . . 8 5 5 8 . . . . . . . . 
        . . . . 8 8 8 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . 8 8 8 8 . . 8 . 8 8 8 8 8 . . 
        8 5 5 5 5 8 8 8 8 5 5 5 5 8 . . 
        . 8 5 5 5 5 5 5 5 5 5 5 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    life_ship.x = scene.screenWidth()
    life_ship.vx = -100
    life_ship.y = randint(10, scene.screenHeight() - -10)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(life_ship)
})
game.onUpdateInterval(1000, function () {
    health_ship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . 2 . . . . . . . . . . . . 2 . 
        . 2 . . . . . . . . . . . . 2 . 
        . 2 . . . 8 8 . . 8 8 . . . 2 . 
        . 2 . . . 8 8 . . 8 8 . . . 2 . 
        . 2 . . . . . . . . . . . . 2 . 
        . 2 . . . . . . . . . . . . 2 . 
        . 2 . . . . . . . . . . . . 2 . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    health_ship.x = scene.screenWidth()
    health_ship.vx = -100
    health_ship.y = randint(10, scene.screenHeight() - -10)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(health_ship)
})
game.onUpdateInterval(300, function () {
    enemy_ship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 . . . . . . . . 7 . . . 
        . . 7 . . . . . . . . . . 7 . . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . 2 2 . . 2 2 . . . 7 . 
        . 7 . . . 2 2 . . 2 2 . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . 7 . . . . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . 7 . . 
        . . . 7 . . . . . . . . 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemy_ship.x = scene.screenWidth()
    enemy_ship.vx = -100
    enemy_ship.y = randint(10, scene.screenHeight() - -10)
})
