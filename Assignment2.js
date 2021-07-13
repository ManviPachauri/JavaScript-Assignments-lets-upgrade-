//ques 1
s = "Dear mam and sir good after noon"
  s1 = ""
  s2 = ""
  for(t of s){

    if(t != " "){
      s1 = s1 + t 
      s2 = t + s2
    }
    else{
      if(s1 == s2){
        console.log(s1)
      }
    s1 = ""
    s2 = ""
    }
  }

//ques2
for (i = 1; i <= 100; i++) {
    a = i / 15
    b = i / 3
    c = i / 5
    if (Number.isInteger(a)) {
        console.log("FizzBuzz")
    } else if (Number.isInteger(b)) {
        console.log("Fizz")
    } else if (Number.isInteger(c)) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
