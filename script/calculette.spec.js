describe('Test class caculette', () => {
    //Initialise instance.
    let calcule;
    beforeEach(() => {
        calcule = new Calculate();
    });
    //Test opérateur +
    it('Renvoie un opérateur aditionnel', () => {
        expect(calcule.calcule(2, 2, '+')).toBe(4);
    })

    //Test opérateur -
    it('Renvoie un opérateur de soustration', () => {
        expect(calcule.calcule(2, 2, '-')).toBe(-0);
    })

    //Test opérateur *
    it('Renvoie un opérateur de multiplication', () => {
        expect(calcule.calcule(2, 2, '*')).toBe(4);
    })

    //Test opérateur /
    it('Renvoie un opérateur de division', () => {
        expect(calcule.calcule(2, 2, '/')).toBe(1);
    })

    //Test opérateur %
    it('Renvoie un opérateur de modulo', () => {
        expect(calcule.calcule(2, 2, '%')).toBe(0);
    })
});