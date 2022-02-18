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
    * Vrátí true/false podle toho, jestli došlo k pohnutí s microbitem
    */
    //% block="Detekuj pohyb s tolerancí %tolerance"

    export function DetekovatPohyb(tolerance: number): boolean {
        if (input.acceleration(Dimension.Strength) + tolerance < 1050 || input.acceleration(Dimension.Strength) - tolerance > 1050) {
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