export interface AttackBehavior {
    /**
     * Performs the specific attack action.
     */
    performAttack(): void;
    /**
     * Gets the name of the attack.
     * @returns The name of the attack.
     */
    getName(): string;
}