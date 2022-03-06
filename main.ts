let jeZapnutoHlidani = false
let jeProvadenaAkce = false
input.onButtonPressed(Button.A, function () {
    if (jeZapnutoHlidani == false) {
        jeZapnutoHlidani = true
    } else {
        jeZapnutoHlidani = false
    }
})
Mikado.onGuardAwaken(100, function () {
    jeProvadenaAkce = true
    if (jeZapnutoHlidani == true) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        soundExpression.sad.playUntilDone()
    }
    jeProvadenaAkce = false
})
basic.forever(function () {
    if (!(jeZapnutoHlidani)) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (jeZapnutoHlidani && !(jeProvadenaAkce)) {
        basic.showLeds(`
            # # . # #
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
})
