let jeZapnutoHlidani = false
input.onButtonPressed(Button.A, function () {
    if (jeZapnutoHlidani == false) {
        Mikado.zapnoutHlidani()
        jeZapnutoHlidani = true
    } else {
        Mikado.vypnoutHlidani()
        jeZapnutoHlidani = false
    }
})
Mikado.onGuardAwaken(100, function () {
    if (jeZapnutoHlidani == true) {
        Mikado.vzbuditHlidace()
    }
})
