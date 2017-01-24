function reverseString(str) {
  var temp = str.split('');
  temp = temp.reverse();
  str = temp.join('');
  return str;
}

reverseString("hello");
