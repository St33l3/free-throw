namespace SpriteKind {
    export const hoop = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
e e e e e e e e e e e e e e e e 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 
e e e e e e e e e e e e e e e e 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
e e e e e e e e e e e e e e e e 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
`
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(3)
    music.powerUp.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    BBallProjectile.setPosition(10, SharkPlayer.y)
    BBallProjectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 f 4 4 4 4 4 f 4 4 . . . 
. . 4 4 4 f 4 4 4 f 4 4 4 . . . 
. . 4 4 4 4 f 4 f 4 4 4 4 . . . 
. . 4 4 4 4 f 4 f 4 4 4 4 . . . 
. . 4 4 4 4 f 4 f 4 4 4 4 . . . 
. . 4 4 4 4 f 4 f 4 4 4 4 . . . 
. . 4 4 4 f 4 4 4 f 4 4 4 . . . 
. . . 4 f 4 4 4 4 4 f 4 . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SharkPlayer.x, SharkPlayer.y)
})
info.onLifeZero(function () {
    game.over(false)
})
let SharkPlayer: Sprite = null
let BBallProjectile: Sprite = null
game.splash("free throw")
tiles.setTilemap(tiles.createTilemap(
            hex`1000100003010303030303030103030303030303030103030303030301030303030303030301030303030303010303030303030303010303030303030103030303030303030103030303030301030303030303030303010303030301030303030303030303030301010101030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`,
            img`
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
BBallProjectile = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 4 4 4 4 4 4 4 . . . . . . . 
. 4 4 4 4 4 4 4 4 4 . . . . . . 
4 4 f 4 4 4 4 4 f 4 4 . . . . . 
4 4 4 f 4 4 4 f 4 4 4 . . . . . 
4 4 4 4 f 4 f 4 4 4 4 . . . . . 
4 4 4 4 f 4 f 4 4 4 4 . . . . . 
4 4 4 4 f 4 f 4 4 4 4 . . . . . 
4 4 4 4 f 4 f 4 4 4 4 . . . . . 
4 4 4 f 4 4 4 f 4 4 4 . . . . . 
. 4 f 4 4 4 4 4 f 4 . . . . . . 
. . 4 4 4 4 4 4 4 . . . . . . . 
`, SpriteKind.Projectile)
SharkPlayer = sprites.create(img`
. . . . . . . . . . . f f f f f f f . . . c c f f f . . . . . . . . . . 
. . . . . . . . . . f b b b b b b b f f c b b b b f . . . . . . . . . . 
. . . . . . . . . . f b b 1 1 1 b b b b b f f b f . . . . . . . . . . . 
. . . . . . . . . . f b 1 1 1 1 1 f f b b b b f f . . . . . . . . . . . 
. . . . . . . . . . f 1 c c c c 1 f f b b b b b c f f . . . . . . . . . 
. . . . . . . . . . f f c 1 c 1 c 1 b b c b c b c c c f . . . . . . . . 
. . . . . . . . . . . f c c 3 3 3 1 b b b c b c b c c c f . . c c c c c 
. . . . . . . . . . . . c 3 3 3 c 1 b b b c b c b c c c c f c d d b b c 
. . . . . . . . . . . . c 3 3 3 c 1 b b b b b b b c c c c c d d b c c . 
. . . . . . . . . . . . c 3 3 3 c 1 1 b b b b b c c c c c c b b c c . . 
. . . . . . . . . . . c c 3 3 1 c 1 1 b b b b c c c c c c f b c c f . . 
. . . . . . . . . . . c c 1 3 c 1 1 c b b b c c c c c b b c f c c f . . 
. . . . . . . . . . . c 1 1 1 1 1 1 c b b b f d d d d d c . f b b c f . 
. . . . . . . . . . . . c c 1 1 1 1 f b d b b f d d d c . . . f b b f . 
. . . . . . . . . . . . . . c c c f f f b d b b f c c . . . . . f b b f 
. . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . f f f 
`, SpriteKind.Player)
SharkPlayer.setPosition(73, 103)
music.playMelody("G A G A G F A C5 ", 120)
SharkPlayer.setVelocity(50, 0)
SharkPlayer.setFlag(SpriteFlag.BounceOnWall, true)
let HoopEnemy = sprites.create(img`
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . 2 2 . . . . 2 2 . . . . 
. . . 2 2 . . . . . . 2 2 . . . 
. . . 2 . . . . . . . . 2 . . . 
. . . 2 . . . . . . . . 2 . . . 
. . . 2 2 . . . . . . 2 2 . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
HoopEnemy.setPosition(80, 17)
info.setScore(0)
info.startCountdown(60)
