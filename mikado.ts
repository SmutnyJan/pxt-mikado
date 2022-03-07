//% weight=100 color=#3bccc0 icon="\uf11b" block="Mikado"
namespace Mikado {
    let zamekAkce = false;

    /**
    * Zkontroluje, jestli nedošlo k pohybu
    * @tolerance Tolerance akcelerace
    * @akce Příkazy, které se provedou při moc velké/malé akceleraci
    */
    //% block="Při porušení senzoru s tolerancí %tolerance"
    export function kdyzJeVzbuzenHlidac(tolerance: number, akce: () => void) {
        const eventID = 111 + Math.randomRange(0, 100); // semi-unique

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
                if (!zamekAkce && (akcelerace + tolerance < 1023 || akcelerace - tolerance > 1023)) {
                    control.raiseEvent(eventID, 1)
                }
                basic.pause(20)
            }
        })
    }

}