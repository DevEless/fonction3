function sommePremiersNombres(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}

function estPremier(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function triAlphabetique(arr) {
    return arr.sort();
}

function sommeChiffres(n) {
    let somme = 0;
    n.toString().split('').forEach(chiffre => {
        somme += parseInt(chiffre);
    });
    return somme;
}

function estPalindrome(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) return false;
    }
    return true;
}