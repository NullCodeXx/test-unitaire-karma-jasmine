//Crée les function qui vont être tester.

function additionner(a, b) {
    //Ajouter une condition de typage. 
    if (typeof(a) !== Number || typeof(b) !== Number) {
        //throw déclenche une erreur.
        throw new Error('expect numbers as parameters');
    }
    return a + b;
}

function soustraire(a, b) {
    return a - b;
}