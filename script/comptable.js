class Comptable {
    constructor(calculette) {
        this.calculette = new Calculette();
    }


    getBenefice(recette, salaire, tva) {
        let recetteTaxees = this.calculette(recette, tva, '*');
        if (recetteTaxees > salaire) {
            return this.calculette(recette, salaire, '-');
        }
        return "en faillite";
    }
}