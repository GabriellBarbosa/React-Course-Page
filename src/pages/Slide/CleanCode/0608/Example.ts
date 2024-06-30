const example1 = `class PrimeGenerator {
    _primesMap;
    _result;
    generatePrimes(maxValue) {
        if (maxValue >= 2) {
            this._defineAllAsPrimeUpTo(maxValue);
            this._defineNonPrimes();
            this._putIntegerPrimesIntoResult();
            return this._result;
        } else {
            return [];
        }
    }
    _defineAllAsPrimeUpTo(maxValue) {
        this._primesMap = new Array(maxValue + 1).fill(true);
    }
    _defineNonPrimes() {
        this._primesMap[0] = this._primesMap[1] = false;
        const limit = this._determineLimitIterator();
        for (let i = 2; i <= limit; i++) {
            for (let j = 2 * i; j < this._primesMap.length; j += i) {
                this._primesMap[j] = false; // multiple is not prime
            }
        }
    }
    _determineLimitIterator() {
        /*
        não é necessário percorrer os múltiplos que são maiores do que
        a raiz quadrada do tamanho da array, pois todos os múltiplos da 
        array possuem fatores primos que são menores ou iguais do que a 
        raiz quadrada do tamanho da array.
        */
        const iteratorLimit = Math.sqrt(this._primesMap.length);
        return iteratorLimit;
    }
    _putIntegerPrimesIntoResult() {
        this._result = new Array(this._countPrimes());
        for (let i = 0, j = 0; i < this._primesMap.length; i++) {
            if (this._primesMap[i])
                this._result[j++] = i;
        }
    }
    _countPrimes() {
        let count = 0;
        for (let i = 0; i < this._primesMap.length; i++) {
            if (this._primesMap[i])
                count++;
        }
        return count;
    }
}
const primeGenerator = new PrimeGenerator();
console.log(primeGenerator.generatePrimes(100));
module.exports = PrimeGenerator;`;

const example1Resolved = `class PrimeGenerator {
    _primesMap;
    _result;
    
    generatePrimes(maxValue) {
        if (maxValue >= 2) {
            this._defineAllAsPrimeUpTo(maxValue);
            this._defineNonPrimes();
            this._putIntegerPrimesIntoResult();
            return this._result;
        } else {
            return [];
        }
    }

    _defineAllAsPrimeUpTo(maxValue) {
        this._primesMap = new Array(maxValue + 1).fill(true);
    }

    _defineNonPrimes() {
        this._primesMap[0] = this._primesMap[1] = false;
        const limit = this._determineLimitIterator();
        for (let i = 2; i <= limit; i++) {
            for (let j = 2 * i; j < this._primesMap.length; j += i) {
                this._primesMap[j] = false; // multiple is not prime
            }
        }
    }

    _determineLimitIterator() {
        /*
        não é necessário percorrer os múltiplos que são maiores do que
        a raiz quadrada do tamanho da array, pois todos os múltiplos da 
        array possuem fatores primos que são menores ou iguais do que a 
        raiz quadrada do tamanho da array.
        */
        const iteratorLimit = Math.sqrt(this._primesMap.length);
        return iteratorLimit;
    }

    _putIntegerPrimesIntoResult() {
        this._result = new Array(this._countPrimes());
        for (let i = 0, j = 0; i < this._primesMap.length; i++) {
            if (this._primesMap[i])
                this._result[j++] = i;
        }
    }

    _countPrimes() {
        let count = 0;
        for (let i = 0; i < this._primesMap.length; i++) {
            if (this._primesMap[i])
                count++;
        }
        return count;
    }
}

const primeGenerator = new PrimeGenerator();
console.log(primeGenerator.generatePrimes(100));

module.exports = PrimeGenerator;`;

const example2 = `class PrimeGenerator {
    generatePrimes(maxValue) {
        if (maxValue >= 2) { // the only valid case
            // declarations
            let s = maxValue + 1; // size of array
            let f = new Array(s).fill(true);
    
            // get rid of known non-primes
            f[0] = f[1] = false;
    
            // sieve
            for (let i = 2; i < Math.sqrt(s) + 1; i++) {
                for (let j = 2 * i; j < s; j += i) {
                    f[j] = false; // multiple is not prime
                }
            }
            /* ... */
        }
    }
}`;

const example2Resolved = `class PrimeGenerator {
    _primesMap;
    _result;

    generatePrimes(maxValue) {
        if (maxValue >= 2) {
            this._defineAllAsPrimeUpTo(maxValue);
            this._defineNonPrimes();
            this._putIntegerPrimesIntoResult();
            return this._result;
        }
        /* ... */
    }
}`;

const example3 = `class PrimeGenerator {
    /* ... */
    _defineNonPrimes() {
        this._primesMap[0] = this._primesMap[1] = false;

        const limit = this._determineLimitIterator();
        for (let i = 2; i <= limit; i++) {
            for (let j = 2 * i; j < this._primesMap.length; j += i) {
                this._primesMap[j] = false; // multiple is not prime
            }
        }
    }
    /* ... */
}`;

const example4 = `class PrimeGenerator {
    _primesMap;
    _result;

    generatePrimes(maxValue) {
        if (maxValue >= 2) {
            this._defineAllAsPrimeUpTo(maxValue);
            this._defineNonPrimes();
            this._putIntegerPrimesIntoResult();
            return this._result;
        } else {
            return [];
        }
    }

    _defineAllAsPrimeUpTo(maxValue) {
        this._primesMap = new Array(maxValue + 1).fill(true);
    }

    _defineNonPrimes() {
        this._define0And1AsNonPrime();
        this._defineMultiplesAsNonPrime();
    }

    _define0And1AsNonPrime() {
        this._primesMap[0] = this._primesMap[1] = false;
    }

    _defineMultiplesAsNonPrime() {
        const limit = this._determineLimitIterator();
        for (let i = 2; i <= limit; i++) {
            for (let j = 2 * i; j < this._primesMap.length; j += i) {
                this._primesMap[j] = false;
            }
        }
    }

    _determineLimitIterator() {
        /*
        não é necessário percorrer os múltiplos que são maiores do que
        a raiz quadrada do tamanho da array, pois todos os múltiplos da 
        array possuem fatores primos que são menores ou iguais do que a 
        raiz quadrada do tamanho da array.
        */
        const iteratorLimit = Math.sqrt(this._primesMap.length);
        return iteratorLimit;
    }

    _putIntegerPrimesIntoResult() {
        this._result = new Array(this._countPrimes());
        for (let i = 0, j = 0; i < this._primesMap.length; i++) {
            if (this._primesMap[i])
                this._result[j++] = i;
        }
    }

    _countPrimes() {
        let count = 0;
        for (let i = 0; i < this._primesMap.length; i++) {
            if (this._primesMap[i])
                count++;
        }
        return count;
    }
}`;

export { 
    example1,
    example1Resolved,
    example2,
    example2Resolved,
    example3,
    example4
}