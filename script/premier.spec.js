/*Fichier TEST
Ce que dois faire le truc que l'on va faire.
*/
it('should be true', () => {
    //Donne une inservation, je m'attend a ce que tel valeur sois quelque chose, voit les insertion expect().
    expect(true).toBe(true);
});

//Autre test pour la function d'addition
it('should add 2 to 2', () => {
    //Le resultat contienr 2 + 2
    let resultat = additionner(2, 2);
    //Ce que l'on attend est 4.
    expect(resultat).toBe(4);
});

//Permet de regrouper des choses ensemble.
describe('function  additionner', () => {
    expect(additionner(-2, -2)).toBe(-4);

    //Faire un test avec des nombres négatifs.
    it('should contenate string params', () => {
        expect(additionner(-2, -2)).toBe(-4);
    })

    //Faire un test avec des chaine de charactere.
    it('should add with negative numbers', () => {
        let result = additionner(2, 2);
        expect(additionner('bloup', 2)).toBe('bloup', 2);
    });

    it('should thrown error with string params', () => {
        /*Le bind crée une function avec des parametre exemple.
        let mafonction = additionner.bind(null, 2,2);
        mafonction();
        */
        expect(additionner.bind(null, 'bloup', 2))
            .toThrow
    })
});