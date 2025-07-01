import { Knight } from './characters/Knight';
import { Rogue } from './characters/Rogue';
import { AttackBehavior } from './interfaces/AttackBehavior';

function main() {
    console.log("--- Demonstrating Strategy Design Pattern: Character Attacks ---");

    const knight = new Knight();
    knight.display();
    knight.listAttacks();
    knight.performAttackByIndex(0);
    knight.performAttackByName("Shield Bash");
    knight.performAttackByName("Holy Light");

    const rogue = new Rogue();
    rogue.display();
    rogue.listAttacks();
    rogue.performAttackByIndex(0); 
    rogue.performAttackByName("Stealth Attack"); 

    
    const smokeBomb: AttackBehavior = {
        performAttack(): void {
            console.log("💨 Throws a smoke bomb, creating a diversion!");
        },
        getName(): string {
            return "Smoke Bomb";
        }
    };
    rogue.addAttackBehavior(smokeBomb);
    rogue.display();
    rogue.listAttacks();
    rogue.performAttackByName("Smoke Bomb");

    console.log("\n--- End of Demonstration ---");
}

main();