import { AttackBehavior } from '../interfaces/AttackBehavior';

export abstract class Character {
    // The character holds a list of attack behaviors.
    // This demonstrates composition: a Character 'has-a' list of AttackBehaviors.
    protected attackBehaviors: AttackBehavior[] = [];

    /**
     * Adds an attack behavior to the character's available attacks.
     * @param ab The AttackBehavior to add.
     */
    public addAttackBehavior(ab: AttackBehavior): void {
        this.attackBehaviors.push(ab);
    }

    /**
     * Performs an attack based on its index in the character's list.
     * @param index The index of the attack to perform.
     */
    public performAttackByIndex(index: number): void {
        if (index >= 0 && index < this.attackBehaviors.length) {
            console.log(`--- Performing ${this.attackBehaviors[index].getName()} ---`);
            this.attackBehaviors[index].performAttack();
        } else {
            console.log(`❌ Invalid attack index: ${index}.`);
        }
    }

    /**
     * Performs an attack based on its name.
     * @param attackName The name of the attack to perform.
     */
    public performAttackByName(attackName: string): void {
        const attack = this.attackBehaviors.find(ab => ab.getName().toLowerCase() === attackName.toLowerCase());
        if (attack) {
            console.log(`--- Performing ${attack.getName()} ---`);
            attack.performAttack();
        } else {
            console.log(`❌ Attack '${attackName}' not found.`);
        }
    }

    /**
     * Lists all available attacks for the character.
     */
    public listAttacks(): void {
        if (this.attackBehaviors.length === 0) {
            console.log("No attacks available.");
            return;
        }
        console.log("Available attacks:");
        this.attackBehaviors.forEach((ab, index) => {
            console.log(`  ${index + 1}. ${ab.getName()}`);
        });
    }

    /**
     * Abstract method to display character-specific information.
     */
    public abstract display(): void;
}