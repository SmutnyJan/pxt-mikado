/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#3bccc0 icon="\uf11b"
namespace Mikado {

    let toleration = 100
    let isGuarding = false
    /**
    * Nastaví toleranci
    */
    //% block="Nastav toleranci %tolerance"

    export function VychoziNastaveni(tolerance: number): void {
        toleration = tolerance
    }

    /**
    * Zapne hlídání
    */
    //% block="Zapni hlídání"

    export function ZapnoutHlidani(): void {
        music.setBuiltInSpeakerEnabled(true)
        basic.pause(2500)
        basic.showIcon(IconNames.Asleep)
        isGuarding = true
    }

    /**
    * Vypne hlídání
    */
    //% block="Vypni hlídání"

    export function VypnoutHlidani(): void {
        music.setBuiltInSpeakerEnabled(false)
        basic.showIcon(IconNames.Happy)
        isGuarding = false

    }

    /**
    * Vrátí true/false podle toho, jestli došlo k porušení hlídání
    */
    //% block="Stav hlídání"

    export function StavHlidani(): boolean {
        if (input.acceleration(Dimension.Strength) + toleration < 1050 || input.acceleration(Dimension.Strength) - toleration > 1050) {
            return true
        }
        return false
    }

    /**
    * Vzbudí hlídače
    */
    //% block="Vzbuď hlídače"

    export function VzbuditHlidace(): void {
        basic.showIcon(IconNames.Angry)
        soundExpression.sad.playUntilDone()
        if (!(isGuarding)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    }

}