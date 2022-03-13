enum Difficulty {
    Jednoducha = 500,
    Stredni = 200,
    Tezka = 100,
}

//% weight=100 color=#3bccc0 icon="\uf11b" block="Mikado"
namespace Mikado {
    let zamekAkce = false;

    /**
    * Zkontroluje, jestli nedošlo k pohybu
    * @obtiznost Obtížnost hry
    * @akce Příkazy, které se provedou při moc velké/malé akceleraci
    */
    //% block="Při porušení senzoru s obtížností %obtiznost"
    export function kdyzJeVzbuzenHlidac(obtiznost: Difficulty, akce: () => void) {
        const eventID = 111 + Math.randomRange(0, 100);

        control.onEvent(eventID, 0, function () {
            control.inBackground(() => {
                zamekAkce = true
                akce()
                zamekAkce = false
            })
        })

        control.inBackground(() => {
            while (true) {
                let akcelerace = input.acceleration(Dimension.Strength);
                serial.writeLine("" + akcelerace)
                if (!zamekAkce && (akcelerace + obtiznost < 1023 || akcelerace - obtiznost > 1023)) {
                    control.raiseEvent(eventID, 1)
                }
                basic.pause(20)
            }
        })
    }

}