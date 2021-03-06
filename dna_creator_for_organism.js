// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};




function pAequorFactory(numberOrg, arrayBases) {
  return {
    _specimenNum: numberOrg,
    _dna: arrayBases,

    get specimenNum() {
      return this._specimenNum;
    },

    get dna() {
      return this._dna;
    },

    mutate() {
      // pick a random index of dna
      let randomBase = Math.floor(Math.random() * this.dna.length);

      //create a randome new base
      let newBase = returnRandBase();

      //if the newbase does not equal the old base, replace the base
      if (newBase !== this.dna[randomBase]) {
        this.dna.splice(randomBase, 1, newBase); 
        console.log(randomBase);
        console.log(newBase);
      } else {
      //try again
        this.mutate();
      }
    },

    compareDNA(pAequor) {
      let numberSimilar = 0;
      const otherDNA = pAequor.dna;
      
      // for each element in this.dna, check if its the same at each index
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherDNA[i]) {
          numberSimilar++;
        }
      }
      let percentSimilar = ((numberSimilar/15) * 100).toFixed(0);
      console.log(`Specimen #${this.specimenNum} and Specimen #${pAequor.specimenNum} have \n ${percentSimilar}% DNA in common`); 
    },

    willLikelySurvive() {
      // check if CG make up at least 60% of base
      let numberCG = 0;
      this.dna.forEach(element => {
        if (element === 'G' || element === 'C') {
          numberCG++;
        }
      });
      let percentCG = numberCG/15;
      if (percentCG >= 0.6) {
        return true;
      } else {
        return false;
      }
    },

    // create another strand with complementary bases
    complementStrand() {
      let complement =[];
      for (let i = 0; i < this.dna.length; i++) {
        switch (this.dna[i]) {
          case 'A': 
            complement.push('T');
            break;
          case 'T': 
            complement.push('A');
            break;
          case 'C': 
            complement.push('G');
            break;
          case 'G':
            complement.push('C');
            break;
        }
      }
      return complement;
    }

  }
}

const ex = pAequorFactory(1, mockUpStrand());
console.log(ex.dna);
console.log(ex.complementStrand());

let survivingInstances = []; // empty array to store pAequor
function create30() {
  let complete = 1; // need to create 30
  while (complete <= 30) { // while its less than 30, execute 
    // make a new pAequor with number 1 and random bases into surviving instances
    let test = pAequorFactory(complete, mockUpStrand());
    if (test.willLikelySurvive()) {
      survivingInstances.push(test);
      complete++;
    }
  }
}

create30();


survivingInstances.forEach(element => console.log(element.willLikelySurvive()));


