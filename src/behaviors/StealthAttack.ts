import { AttackBehavior } from '../interfaces/AttackBehavior';

export class StealthAttack implements AttackBehavior {
    performAttack(): void {
        console.log("🥷 Emerges from shadows for a surprise attack!");
    }

    getName(): string {
        return "Stealth Attack";
    }
}