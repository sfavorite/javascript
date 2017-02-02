function translatePigLatin(str) {

  function isInArray(value) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];


    return vowels.indexOf(value) > -1;
}

  var i = 0;
  var new_end = '';
  console.log("word ", str);
  if (isInArray(str[0])) {
      str = str + 'way';
  } else {
    // Get the number of consonants
    do  {
        ++i;
    } while (!isInArray(str[i]));
    console.log('i = ', i);
    new_end = str.substr(0, i);
    console.log(new_end);
    str = str.substr(i, str.length) + new_end + 'ay';
  }

  return str;
}

translatePigLatin("glove"); // should return oveglay
translatePigLatin("california"); // should return "aliforniacay"
translatePigLatin("paragraphs"); // should return "aragraphspay"
translatePigLatin("glove"); // should return "oveglay"
translatePigLatin("algorithm"); // should return "algorithmway"
translatePigLatin("eight"); // should return "eightway"
