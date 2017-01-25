function palindrome(str) {
  isPal = true;
  str = str.replace(/[^a-zA-Z0-9]/g, '');
  str = str.toLowerCase();
  middle = Math.ceil((str.length)/2);
  end = str.length-1;
  for(i = 0; i <= middle-1; i++) {
      if (str[i] !== str[end-i]) {
         isPal = false;
      }  
  }
  return isPal;
}



palindrome("eye"); # true
palindrome("_eye"); # true
palindrome("race car"); # true
palindrome("not a palindrome"); # false
palindrome("A man, a plan, a canal. Panama"); # true
palindrome("never odd or even"); # true
palindrome("nope"); # false
palindrome("almostomla"); # false
palindrome("My age is 0, 0 si ega ym."); # true
palindrome("1 eye for of 1 eye."); # false
palindrome("0_0 (: /-\ :) 0-0"); # true.
palindrome("five|\_/|four"); # false
