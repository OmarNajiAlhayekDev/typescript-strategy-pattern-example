import { AttackBehavior } from '../interfaces/AttackBehavior';

export class SwordAttack implements AttackBehavior {
    performAttack(): void {
        console.log("⚔️ Swings a mighty sword, dealing heavy damage!");
    }

    getName(): string {
        return "Sword Attack";
    }
}