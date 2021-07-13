// fizzbuzz program

for(i=1; i<=100; i++){
    a=i/15;
    b=i/3;
    c=i/5;
    
    if(Number.isInteger(a)){
      console.log("fizzbuzz");
    }
    
    else if(Number.isInteger(b)){
      console.log("fizz");
    }
    
    else if(Number.isInteger(c)){
      console.log("buzz");
    }
    
    else{
      console.log(i);
    }
    
    
  }


// output is verified



//palindrome program

s="my dad loves racecar";
s= s + " "
word=""
revword = ""
for (t of s){
  if(t !=" "){
    word=word+t
    revword = t+revword
  }
  else{
    if (word == revword){
      console.log(word)
    }
    word=""
    revword=""
  }
}

//output is verified