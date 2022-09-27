// 1.Find the Smaller Angle
var Minimal_Angle = (h, m) => 
{
     const minuteAngle = m * 6;
    const hourAngle = (h * 30) + (m * 0.5);
    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
};
 

// 2.Check whether the year is Leap year or not
var Check_Leap = (year) =>
{
 if(year%100 === 0 ){
   if(year%4 === 0 && year%400 === 0){
     return "Leap Year"
   }else{
     return "Non Leap Year"
   }
 }else if(year%4===0){
   return "Leap Year "
 }else{
   return "Non Leap Year"
 }
};


// 3.Perfect Number Check
var Perfect_Check = (N) => 
{
  let arr = [];
   for(let i=1;i<=N;i++){
     if(N%i===0){
       arr.push(i);
     }
   }  
   let sum = 0;
   for(let i=0;i<arr.length;i++){
     sum = sum + arr[i];
   }
   if(N===sum){
     return "YES"
   }else{
     return "NO"
   }
        
};


// 4.Reverse a Number.
var Reverse_Number = (N) => 
{
  let arr = [];
  while(N!=0){
  let digit = N%10;
  N = parseInt(N/10);
  arr.push(digit);
}
let wordarray = parseFloat(arr.join(""));
return wordarray;
};


// 5.Substring Check.
var Substring_Check = (S1, S2) => 
{
    let substr = S1.includes(S2);
    if(substr==true){
      return "YES"
    }else{
      return "NO"
    }
};