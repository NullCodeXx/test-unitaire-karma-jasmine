//Test compteur.js

describe('class compteur', () => {
    //instancie
    let compteur;
    beforeEach(() => {
        compteur = new Compteur();
    });

    it('should be true', () => {
        expect(true).toBe(true);
    });

    it('should be initialized to 0', () => {
        expect(compteur.compte).toBe(0);
    })

    //initialise 0
    it('should initialise to zero', () => {
        expect(compteur.compte).toBe(0);
    });

    it("should increment", () => {
        compteur.incrementer();
        expect(compteur.compte).toBe(1);
    })

    it("should decrement", () => {
        compteur.decrementer();
        expect(compteur.compte).toBe(-1);
    })

    // it('should reset compte to 0', () => {
    //   let compteur = new Compteur();
    // compteur.compte = 5;
    // compteur.reset();
    //expect(compteur.compte).toBe(0);
    //});
    it('should reset counter on reset', () => {
        compteur.incrementer();
        expect(compteur.compte).toBe(1);
        compteur.reset();
        expect(compteur.compte).toBe(0);
    });
    it('should keep incrementing', () => {
        compteur.incrementer();
        compteur.incrementer();
        expect(compteur.compte).toBe(2);
    })
});