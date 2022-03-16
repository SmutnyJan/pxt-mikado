enum Difficulty {
    Jednoducha = 500,
    Stredni = 200,
    Tezka = 100,
}

//% weight=100 color=#3bccc0 icon="\uf11b" block="Mikado"
namespace mikado {
    let methodLock = false;

    /**
    * Zkontroluje, jestli nedošlo k pohybu
    * @difficulty Obtížnost hry
    * @action Příkazy, které se provedou při moc velké/malé akceleraci
    */
    //% block="Při porušení senzoru s obtížností %difficulty"
    export function onGuardAwaken(difficulty: Difficulty, action: () => void) {
        const eventID = 111 + Math.randomRange(0, 100);

        control.onEvent(eventID, 0, function () {
            control.inBackground(() => {
                methodLock = true
                action()
                methodLock = false
            })
        })

        control.inBackground(() => {
            while (true) {
                let acceleration = input.acceleration(Dimension.Strength);
                if (!methodLock && (acceleration + difficulty < 1023 || acceleration - difficulty > 1023)) {
                    control.raiseEvent(eventID, 1)
                }
                basic.pause(20)
            }
        })
    }

}