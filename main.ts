let jeZapnutoHlidani = false
let jeProvadenaAkce = false
let stavDispleje = ""
Mikado.kdyzJeVzbuzenHlidac(Difficulty.Jednoducha, function () {
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
input.onButtonPressed(Button.A, function () {
    if (jeZapnutoHlidani == false) {
        jeZapnutoHlidani = true
    } else {
        jeZapnutoHlidani = false
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
