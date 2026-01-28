let  num=5
//increment I++
for(let i=0;i<=num;i++){
    console.log(i)
}
//Decrement i--

for(let i=5;i>=0;i--){
    console.log(i)
}
// Introducing if inside for-loop and printing only if block with break.
for(let i=1;i<=num;i++){
    if(i==2){
        console.log(i)
        break
    }
         
}
// introducing if inside for-loop and printing outside if with break.
for(let i=1;i<=num;i++){
    if(i==2){
        break
    }
    console.log(i)
}
//introducing if and Continue inside for loop.
