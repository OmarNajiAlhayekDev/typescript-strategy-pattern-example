import { AttackBehavior } from '../interfaces/AttackBehavior';

export class ShieldBash implements AttackBehavior {
    performAttack(): void {
        console.log("🛡️ Bashes with the shield, stunning the enemy!");
    }

    getName(): string {
        return "Shield Bash";
    }
}