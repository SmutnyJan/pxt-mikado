input.onButtonPressed(Button.A, function () {
    if (!(isGuarding)) {
        basic.pause(5000)
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    isGuarding = !(isGuarding)
})
let isGuarding = false
let toleration = 100
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    serial.writeLine("" + (input.acceleration(Dimension.Strength)))
    if ((input.acceleration(Dimension.Strength) + toleration < 1050 || input.acceleration(Dimension.Strength) - toleration > 1050) && isGuarding) {
        basic.showIcon(IconNames.Angry)
        soundExpression.sad.playUntilDone()
        basic.showIcon(IconNames.Asleep)
    }
})
