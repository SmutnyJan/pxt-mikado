input.onButtonPressed(Button.A, function () {
    if (isGuarding == false) {
        music.setBuiltInSpeakerEnabled(true)
        basic.pause(2500)
        basic.showIcon(IconNames.Asleep)
        isGuarding = true
    } else {
        music.setBuiltInSpeakerEnabled(false)
        isGuarding = false
        basic.showIcon(IconNames.Happy)
    }
})
let isGuarding = false
let isGuardingReference = false
let toleration = 100
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    serial.writeLine("" + (input.acceleration(Dimension.Strength)))
    if ((input.acceleration(Dimension.Strength) + toleration < 1050 || input.acceleration(Dimension.Strength) - toleration > 1050) && isGuarding) {
        basic.showIcon(IconNames.Angry)
        soundExpression.sad.playUntilDone()
        // zde dochází k zajímavému problému: když zmáčknu tlačítko A, mezitím co
        // hraje melodie, přepne se displej do Happy. Ovšak po skončení melodie se
        // provede zobrazení Asleep. Proto
        if (!(isGuarding)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    }
})
