import { Character } from './Character';
import { DaggerStab } from '../behaviors/DaggerStab';
import { StealthAttack } from '../behaviors/StealthAttack';
import { AttackBehavior } from '../interfaces/AttackBehavior'; // Import for anonymous class

export class Rogue extends Character {
    constructor() {
        super();
        // Rogues start with Dagger Stab and Stealth Attack
        this.addAttackBehavior(new DaggerStab());
        this.addAttackBehavior(new StealthAttack());

        // Example: Rogue can also have a unique poison attack
        this.addAttackBehavior({
            performAttack(): void {
                console.log("🧪 Applies a potent poison to the target!");
            },
            getName(): string {
                return "Poison Blade";
            }
        });
    }

    display(): void {
        console.log("\n🥷 I am a cunning Rogue, master of shadows!");
    }
}