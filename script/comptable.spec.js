describe('test Comptable', () => {
    let comptable;
    beforeEach(() => {
        comptable = new Comptable();
        /*
        Le mock est une class factrice qui aura les meme signature qu'une
        dépendance de la class à tester,
        mais dont le retours sont controlés par le test.
        */
        let mockCalculette = {
            calcul: (a, b, operateur) => {
                return 4;
            }
        }
        comptable.calculette = mockCalculette;
    })

    //test si sa renvoie en faillite.
    it("Dois retourner en faillite.", () => {
        expect(comptable.getBenefices(100, 5, 100)).toBe('en faillite');
    })

    //Test si return 4.
    it("Dois retourner 4", () => {
        expect(comptable.getBenefices(100, 3, 100)).toBe(4);
    })
})