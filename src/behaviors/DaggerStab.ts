import { AttackBehavior } from '../interfaces/AttackBehavior';

export class DaggerStab implements AttackBehavior {
    performAttack(): void {
        console.log("🗡️ Quickly stabs with a hidden dagger!");
    }

    getName(): string {
        return "Dagger Stab";
    }
}