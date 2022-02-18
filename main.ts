let isGuarding = false
input.onButtonPressed(Button.A, function () {
    if (isGuarding == false) {
        Mikado.ZapnoutHlidani()
        isGuarding = true
    } else {
        Mikado.VypnoutHlidani()
        isGuarding = false
    }
})
basic.forever(function () {
    if (Mikado.DetekovatPohyb(100) == true && isGuarding == true) {
        Mikado.VzbuditHlidace()
    }
})
