input.onButtonPressed(Button.A, function () {
    if (isGuarding == false) {
        Mikado.ZapnoutHlidani()
        isGuarding = true
    } else {
        Mikado.VypnoutHlidani()
        isGuarding = false
    }
})
let isGuarding = false
Mikado.VychoziNastaveni(90)
basic.forever(function () {
    if (Mikado.StavHlidani() && isGuarding) {
        Mikado.VzbuditHlidace()
    }
})
