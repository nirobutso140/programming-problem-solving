const countVowel = (sentenceOfVowel) =>{
    let count = 0
       for(let i = 0; i < sentenceOfVowel.length; i++){
          const vowel = sentenceOfVowel[i].toLowerCase()
          if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u'){
             count++
          }
       }

       return count
 }

 const sentenceOfVowel = "go to the hell, or search vowel"
 console.log(countVowel(sentenceOfVowel));



 const detectDuplicateLetter = (examineSentence) =>{
         let letters = []
        for(let i = 0; i < examineSentence.length; i++){
           let singleLetter = examineSentence[i]
            if(letters.includes(singleLetter) === false){
               letters.push(singleLetter)
            }
          
        }
        return letters
 }
 const examineSentence ="if there found any duplicate letter remove that letter"
 console.log(detectDuplicateLetter(examineSentence));
