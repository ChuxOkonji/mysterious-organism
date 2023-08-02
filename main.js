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

/* create a factory function pAequorFactory() that has two parameters: 
The first parameter is a specimen number (no two organisms should have the same number
  The second parameter is an array of 15 DNA bases*/ 
const pAequorfactory = (specimenNum, dna) =>{
  return {
    specimenNum,
    dna,

    /* .mutate() is responsible for randomly selecting a base in the object’s dna 
    property and changing the current base to a different base. Then .mutate()
     will return the object’s dna*/

    mutate(){
      randomNum = Math.floor(Math.random() * 15)
      //console.log(randomNum)
      let newBase = this.dna[randomNum]
      //console.log(newBase)
      while(true){
        dnaBase = returnRandBase()
        if(newBase != dnaBase){
          //console.log(dnaBase)
          this.dna[randomNum] = dnaBase
          break;
        }
      }
      return this.dna
    },

    // This function compares the bases of two specimens and computes theur similarity percebtage.
    // it takes in an  object as an argument
    compareDNA(specimen){
      let match = 0
      let length = specimen.dna.length
      let percentageInCommon
      for(let i = 0; i < length; i++){
        if (this.dna[i] === specimen.dna[i]){
          match++
        }
      }
      console.log(match)
      percentageInCommon = (match / length) * 100
      return `Specimen ${this.specimenNum} and Specimen ${specimen.specimenNum} have ${percentageInCommon.toFixed(2)}% DNA in common.`
    },
    

    /*.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. 
    Otherwise, .willLikelySurvive() returns false. */

    willLikelySurvive(){
      let countC = 0
      let countG = 0
      for (let base of this.dna){
        if( base === 'C'){
          countC++
        } else if( base === 'G'){
          countG++
        }
      }

      // 60% of 15 is 9. so 'C' or 'G' should be at least 9
      return countC >= 9 || countG >= 9
    },

    complementStrand(){
      for(let i = 0; i < this.dna.length; i++){
        switch(this.dna[i]){
          case 'A':
            this.dna[i] = 'T'
            break;
          case 'T':
            this.dna[i] = 'A'
            break;
          case 'C':
            this.dna[i] = 'G'
            break;
          default:
            this.dna[i] = 'C'
        }
      }
      return this.dna
    }
  }
} 

const specTwo = pAequorfactory(2, mockUpStrand())
const specThree = pAequorfactory(3, mockUpStrand())

console.log(specTwo.specimenNum)
console.log(specTwo.dna)
console.log(specThree.dna)

console.log(specThree.willLikelySurvive())
console.log(specTwo.complementStrand())







