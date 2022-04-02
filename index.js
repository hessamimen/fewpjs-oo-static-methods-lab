class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str){
    return str.replaceAll(/[^0-9a-zA-Z '-]/gi,"");
  }
  static titleize(sentence){
    let exeptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let capitalized = []
    let splitSentence = sentence.split(' ');
    capitalized.push(this.capitalize(splitSentence[0])) 
    for(let i=1; i<splitSentence.length; i++){
      if (exeptions.includes(splitSentence[i])){
        capitalized.push(splitSentence[i]) 
      } else{
        capitalized.push(this.capitalize(splitSentence[i])); 
      }
    }
    return capitalized.join(' ')
  }
}
function titleize(sentence){
  let exeptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  let capitalized = []
  let splitSentence = sentence.split(' ');
  capitalized.push(splitSentence[0].toUpperCase()) 
  for(let i=1; i<splitSentence.length; i++){
    if (exeptions.includes(splitSentence[i])){
      capitalized.push(splitSentence[i]) 
    } else{
      capitalized.push(splitSentence[i].toUpperCase()); 
    }
  }
  return capitalized.join(' ')
}
let a = 'hi, my name is the a an but of and for at by from hessam imen'

console.log(titleize(a));