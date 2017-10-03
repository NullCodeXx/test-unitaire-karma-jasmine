class Comptable {
    constructor(calculette) {
        this.calculette = new Calculate();
    }


    getBenefices(recette, salaire, tva) {
        let recetteTaxees = this.calculette.calcule(recette, tva, '*'); //renvoie 4
        if (recetteTaxees > salaire) {
            return this.calculette.calcule(recette, salaire, '-'); //renvoie 4
        }
        return "en faillite";
    }
}