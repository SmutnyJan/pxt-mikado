/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#3bccc0 icon="\uf11b"
namespace Mikado {
    let actionLock = false;

    /**
    * Zkontroluje, jestli nedošlo k pohybu
    */
    //% block="Při porušení senzoru s tolerancí %tol"
    export function onGuardAwaken(tolerance: number, action: () => void) {
        const myEventID = 111 + Math.randomRange(0, 100); // semi-unique

        control.onEvent(myEventID, 0, function () {
            control.inBackground(() => {
                actionLock = true
                action()
                actionLock = false
            })
        })

        control.inBackground(() => {
            while (true) {
                let acceleration = input.acceleration(Dimension.Strength);
                if (!actionLock && (acceleration + tolerance < 1023 || acceleration - tolerance > 1023)) {
                    serial.writeLine("action")
                    control.raiseEvent(myEventID, 1)
                }
                basic.pause(20)
            }
        })
    }

}