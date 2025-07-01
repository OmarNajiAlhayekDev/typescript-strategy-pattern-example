⚔️ TypeScript Strategy Design Pattern: Flexible Character Attack System 🥷
This project demonstrates the Strategy Design Pattern in TypeScript, showcasing how to achieve flexible and interchangeable behaviors in an object-oriented system. Specifically, it models a game where different character types (like Knights and Rogues) can perform various attacks, and these attack behaviors can be easily swapped or extended without modifying the core character logic.

💡 The Problem This Pattern Solves
In traditional object-oriented design, if you have many classes that share a common behavior but implement it differently (e.g., Warrior attacks, Mage attacks), you might be tempted to use inheritance. However, this can lead to:

Rigid Hierarchies: If you want to add new attack types, you have to modify existing character classes or create a complex inheritance tree.

Code Duplication: Similar attack logic might be duplicated across different character subclasses.

Limited Flexibility: It's hard to change a character's attack behavior dynamically at runtime (e.g., a character learning a new skill).

🎯 The Strategy Pattern Solution
The Strategy Pattern addresses these issues by:

Encapsulating What Varies: It identifies the varying behavior (the "attack" in this case) and moves each specific implementation into its own separate class.

Defining a Common Interface: All these individual behavior classes implement a shared interface (AttackBehavior). This interface acts as a contract, ensuring all behaviors can be used in a consistent way.

Using Composition: The main character class (Character) doesn't inherit the attack behavior; instead, it contains (composes) a reference to an object that implements the AttackBehavior interface. This allows the character to delegate the actual attack execution to the encapsulated behavior object.

This approach promotes:

Flexibility: Easily add new attack types without changing existing character code.

Extensibility: Characters can have multiple attacks, and new attacks can be dynamically added or swapped during gameplay.

Maintainability: Changes to an attack's logic are isolated to its specific behavior class, minimizing ripple effects across the codebase.

Loose Coupling: The Character class is decoupled from the concrete implementations of attack behaviors, making the system more modular.

📂 Project Structure
The project is organized to clearly separate concerns:

my-ts-project/
├── .gitignore                  # Specifies files/folders to ignore in Git
├── package.json                # Node.js project configuration and dependencies
├── README.md                   # YOU ARE HERE! This file describes the project.
├── tsconfig.json               # TypeScript compiler configuration
└── src/
    ├── interfaces/
    │   └── AttackBehavior.ts   # Defines the common interface for all attacks (Strategy Interface)
    ├── behaviors/
    │   ├── SwordAttack.ts      # Concrete attack implementation (Concrete Strategy)
    │   ├── IceSpellAttack.ts   # Concrete attack implementation
    │   ├── ShieldBash.ts       # Concrete attack implementation
    │   ├── DaggerStab.ts       # Concrete attack implementation
    │   └── StealthAttack.ts    # Concrete attack implementation
    ├── characters/
    │   ├── Character.ts        # Abstract base class for all characters (Context)
    │   ├── Knight.ts           # Concrete character class (Context implementation)
    │   └── Rogue.ts            # Concrete character class (Context implementation)
    └── main.ts                 # Main application file to demonstrate the pattern


🚀 How to Run This Project
Follow these steps to get the project up and running on your local machine:

Clone the repository:

git clone https://github.com/OmarNajiAlhayekDev/typescript-strategy-pattern-example.git
cd typescript-strategy-pattern

Install dependencies:

npm install


Compile TypeScript: This command compiles the TypeScript source files (.ts) from the src/ directory into JavaScript (.js) files in the dist/ directory.

npm run build


Run the compiled application: This command executes the main JavaScript file using Node.js.

npm run start


You should see output in your console demonstrating the different characters performing their attacks.

(Optional) For development with live recompilation: This command starts the TypeScript compiler in watch mode, automatically recompiling your code whenever you make and save changes.

npm run dev


💻 Example Code Snippets
src/interfaces/AttackBehavior.ts
export interface AttackBehavior {
    performAttack(): void;
    getName(): string;
}


src/behaviors/SwordAttack.ts
import { AttackBehavior } from '../interfaces/AttackBehavior';

export class SwordAttack implements AttackBehavior {
    performAttack(): void {
        console.log("⚔️ Swings a mighty sword, dealing heavy damage!");
    }

    getName(): string {
        return "Sword Attack";
    }
}


src/characters/Character.ts
import { AttackBehavior } from '../interfaces/AttackBehavior';

export abstract class Character {
    protected attackBehaviors: AttackBehavior[] = [];

    public addAttackBehavior(ab: AttackBehavior): void {
        this.attackBehaviors.push(ab);
    }

    public performAttackByIndex(index: number): void {
        if (index >= 0 && index < this.attackBehaviors.length) {
            console.log(`--- Performing ${this.attackBehaviors[index].getName()} ---`);
            this.attackBehaviors[index].performAttack();
        } else {
            console.log(`❌ Invalid attack index: ${index}.`);
        }
    }

    public abstract display(): void;
}


Example of Structural Typing (Duck Typing)
In Knight.ts and Rogue.ts, you'll find examples of adding attack behaviors using anonymous object literals. This demonstrates TypeScript's structural typing (also known as "duck typing"), where an object is considered compatible with an interface if it has all the required members, regardless of whether it explicitly implements that interface via a class.

// From characters/Knight.ts
this.addAttackBehavior({
    performAttack(): void {
        console.log("✨ Calls upon divine power to heal allies!");
    },
    getName(): string {
        return "Holy Light";
    }
});


▶️ Expected Output
--- Demonstrating Strategy Design Pattern: Character Attacks ---

🛡️ I am a valiant Knight, defender of the realm!
Available attacks:
  1. Sword Attack
  2. Shield Bash
  3. Holy Light
--- Performing Sword Attack ---
⚔️ Swings a mighty sword, dealing heavy damage!
--- Performing Shield Bash ---
🛡️ Bashes with the shield, stunning the enemy!
--- Performing Holy Light ---
✨ Calls upon divine power to heal allies!

🥷 I am a cunning Rogue, master of shadows!
Available attacks:
  1. Dagger Stab
  2. Stealth Attack
  3. Poison Blade
--- Performing Dagger Stab ---
🗡️ Quickly stabs with a hidden dagger!
--- Performing Stealth Attack ---
🥷 Emerges from shadows for a surprise attack!

🥷 I am a cunning Rogue, master of shadows!
Available attacks:
  1. Dagger Stab
  2. Stealth Attack
  3. Poison Blade
  4. Smoke Bomb
--- Performing Smoke Bomb ---
💨 Throws a smoke bomb, creating a diversion!

--- End of Demonstration ---


✨ Future Enhancements (Ideas)
Implement more attack behaviors (e.g., BowShot, HealingPotion).

Add character stats (health, mana, damage) and incorporate them into attack calculations.

Introduce a Target interface for attacks to interact with.

Integrate with a simple game loop to simulate turns or real-time combat.

Explore other behavioral design patterns like State or Command.
