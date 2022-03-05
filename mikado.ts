/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#3bccc0 icon="\uf11b"
namespace Mikado {
    let isGuarding = false
    let wakeUpLock = false

    /**
    * Zapne hlídání
    */
    //% block="Zapni hlídání"

    export function zapnoutHlidani(): void {
        basic.showIcon(IconNames.Asleep)
        isGuarding = true
    }

    /**
    * Vypne hlídání
    */
    //% block="Vypni hlídání"

    export function vypnoutHlidani(): void {
        basic.showIcon(IconNames.Happy)
        isGuarding = false

    }


    /**
    * Vzbudí hlídače
    */
    //% block="Vzbuď hlídače"

    export function vzbuditHlidace(): void {

        if(wakeUpLock == false) {
            wakeUpLock = true
            basic.showIcon(IconNames.Angry)
            soundExpression.sad.playUntilDone()
            if (!(isGuarding)) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.showIcon(IconNames.Asleep)
            }
            wakeUpLock = false
        }
    }

    /**
    * Zkontroluje, jestli nedošlo k pohybu
    */
    //% block="Při porušení senzoru s tolerancí %tol"
    export function onGuardAwaken(tolerance: number, action: () => void) {
        const myEventID = 111 + Math.randomRange(0, 100); // semi-unique

        control.onEvent(myEventID, 0, function () {
            control.inBackground(() => {
                action()
            })
        })

        control.inBackground(() => {
            while (true) {
                let acceleration = input.acceleration(Dimension.Strength);
                if (acceleration + tolerance < 1023 || acceleration - tolerance > 1023) {
                    control.raiseEvent(myEventID, 1)
                }
                basic.pause(20)
            }
        })
    }

}