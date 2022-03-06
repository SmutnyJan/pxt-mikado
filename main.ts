let jeZapnutoHlidani = false
let jeProvadenaAkce = false
let stavDispleje = ""
input.onButtonPressed(Button.A, function () {
    if (jeZapnutoHlidani == false) {
        jeZapnutoHlidani = true
    } else {
        jeZapnutoHlidani = false
    }
})
Mikado.onGuardAwaken(100, function () {
    if (jeZapnutoHlidani == true) {
        jeProvadenaAkce = true
        stavDispleje = "nastvany"
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        soundExpression.sad.playUntilDone()
        jeProvadenaAkce = false
    }
})
basic.forever(function () {
    serial.writeLine(stavDispleje)
    if (!(jeZapnutoHlidani) && stavDispleje != "vesely") {
        stavDispleje = "vesely"
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (jeZapnutoHlidani && !(jeProvadenaAkce) && stavDispleje != "pozor") {
        stavDispleje = "pozor"
        basic.showLeds(`
            # # . # #
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
})
