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
basic.forever(function () {
    if (Mikado.DetekovatPohyb(100) == true && jeZapnutoHlidani == true) {
        Mikado.VzbuditHlidace()
    }
})
