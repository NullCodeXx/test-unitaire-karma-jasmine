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
    })
})