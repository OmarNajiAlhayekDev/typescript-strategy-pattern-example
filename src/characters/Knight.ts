import { Character } from './Character';
import { SwordAttack } from '../behaviors/SwordAttack';
import { ShieldBash } from '../behaviors/ShieldBash';

export class Knight extends Character {
    constructor() {
        super();
        // Knights start with a Sword Attack and Shield Bash
        this.addAttackBehavior(new SwordAttack());
        this.addAttackBehavior(new ShieldBash());

        /**
         * This is an example of TypeScript's structural typing (also known as "duck typing").
         * We are creating a plain object literal that "looks like" an AttackBehavior
         * because it has all the required properties and methods (performAttack and getName)
         * as defined by the AttackBehavior interface. TypeScript allows this object
         * to be used where an AttackBehavior is expected, without needing an explicit
         * class declaration or 'implements' keyword.
         */
        this.addAttackBehavior({
            performAttack(): void {
                console.log("✨ Calls upon divine power to heal allies!");
            },
            getName(): string {
                return "Holy Light";
            }
        });
    }

    display(): void {
        console.log("\n🛡️ I am a valiant Knight, defender of the realm!");
    }
}