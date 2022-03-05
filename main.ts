let jeZapnutoHlidani = false
input.onButtonPressed(Button.A, function () {
    if (jeZapnutoHlidani == false) {
        Mikado.ZapnoutHlidani()
        jeZapnutoHlidani = true
    } else {
        Mikado.VypnoutHlidani()
        jeZapnutoHlidani = false
    }
})
Mikado.onGuardAwaken(100, function () {
    if (jeZapnutoHlidani == true) {
        Mikado.VzbuditHlidace()
    }
})
