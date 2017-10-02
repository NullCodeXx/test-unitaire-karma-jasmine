//Test compteur.js

describe('class compteur', () => {

    //initialise et instancie la class compteur.
    it('initialise to zero', () => {
        let compteur = new Compteur();
        expect(compteur.compte).toBe(0);
    });

    it("should increment", () => {
        let compteur = new Compteur();
        compteur.incrementer();
        expect(compteur.compte).toBe(1);
    })

    it("should decrement", () => {
        let compteur = new Compteur();
        compteur.decrementer();
        expect(compteur.compte).toBe(-1);
    })

    it("if reset", () => {
        expect(Compteur()).toBe(0);
    })

    it("if de type number", () => {
        expect(Compteur()).toBe(typeof(number));
    })
});