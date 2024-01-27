namespace SpriteKind {
    export const customer = SpriteKind.create()
}
sprites.onCreated(SpriteKind.customer, function (sprite) {
    sprite.setVelocity(50, 0)
    timer.background(function () {
        pause(randint(1500, 3500))
        sprite.setVelocity(0, 0)
    })
    timer.background(function () {
        pause(1000)
        sprite.sayText(".")
        pause(1000)
        sprite.sayText("..")
        pause(1000)
        sprite.sayText("...", 1000, false)
        pause(2000)
        sprite.sayText("!")
        music.play(music.createSoundEffect(
        WaveShape.Sawtooth,
        3000,
        3741,
        255,
        255,
        350,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        music.play(music.createSoundEffect(
        WaveShape.Sawtooth,
        3000,
        4000,
        255,
        255,
        500,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        sprite.sayText("!", 1000, false)
    })
})
let mySprite = sprites.create(img`
    ...........22222
    .........2233333
    .......2233d1111
    ......23ddd111dd
    .....23d1333d1d3
    ....23d133333d1d
    ...2311333333ddd
    ..2313333333333d
    ..21d3333333333d
    .2313333333333dd
    .2dd3333333333d3
    2311d333333333d3
    2d131d33333333d3
    2d33dd33333333d3
    21333d3333333d33
    21333d333333d333
    21333dddd33dd333
    2133333dd11dd333
    e133333d1d31d333
    e1333331d3331333
    e1333331dd331b33
    e13333331dd1db33
    edd33333311db333
    e3d3333333d33333
    .edd3333333d3333
    .e3dd33333dd3333
    ..e3dd333d133333
    ...e311111ddd333
    ....eed1d33d1111
    ......eeb333dd13
    ........eeeeffff
    ................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 11))
mySprite.y += -6
let mySprite2 = sprites.create(img`
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . 2 2 3 3 3 3 2 e . . . . 
    . . . 2 3 d 1 1 d d 3 2 e . . . 
    . . 2 3 1 d 3 3 3 d d 3 e . . . 
    . 2 3 f 3 3 3 3 3 d 1 3 b e . . 
    . 2 1 d 3 3 3 3 d 3 3 f 3 b b . 
    2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
    2 d f f f f f f f f f f 3 4 4 b 
    2 d f 1 1 1 1 1 1 1 1 f b 4 4 e 
    2 d f f 1 1 1 1 1 1 f f b 4 4 e 
    e d 3 f 1 1 1 1 1 f f d b 4 4 e 
    e d d f f f f f f f 1 3 b 4 b e 
    e 3 d 3 3 1 d d 3 d 1 b b e e . 
    . e 3 1 1 d d 1 1 1 b b e e e . 
    . . e 3 3 3 3 3 3 b e e e e . . 
    . . . e e e e e e e e e e . . . 
    `, SpriteKind.customer)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
mySprite.z = 30
