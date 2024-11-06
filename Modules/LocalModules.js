const oddeven_num=(number)=>
{
    if(number%2==0){
        console.log("Number Is Even..");
    }
    else{
        console.log("Number Is Odd..");
    }
}
const pos_neg_num=(number)=>{
    if(number>0){
        console.log("Number Is Positivve..");
    }
    else{
        console.log("Number Is Negative..");
    }
}
const prime_num=(number)=>
{
     flag=true;
    if(number<=1)
    {
        flag=false;
    }
    else{
        for(i=2;i<number;i++)
        {
            if(number%i==0)
            {
                flag=false;
            }
        }
        if(flag){
        console.log("Number Is Prime..");}
        else{
            console.log("Number Is Not Prime..");

        }
    }
}
const armst_num=(num)=>{
    let m=0;
    let sum=0;
    temp=num;
    while(num>0){
        m=number%10;
        sum=sum+(m*m*m);
        number=parseInt(number/10);
    }
    if(sum==num){
        console.log("Number Armstrong");
    }
    else{        console.log("Number Not Armstrong");
}

}

const palind_num=(number)=>{
    /*var m;
    var sum=0;
    var temp=number;

    while(number>0){
        m=number%10;
        sum=(sum*10)+m;
        number=number/10;
    }

    if(sum==temp){
        console.log("Palindrom ");
    }
    else{       
         console.log("Palindrom Not")
        };
*/
}
const sum_digit=(number)=>
{
    let sum=0;
    for(i=1;i<=number;i++){
        sum+=i;
    }
    console.log(sum);
}
const fact_num=(number)=>{
    fact=1;
    for(i=1;i<=number;i++)
    {
        fact=fact*i;
    }
    console.log(fact);
}

const leap_year=(year)=>{
   if( year%4==0 || year%400==0 && year%100!=0)
    {
        console.log("Leap Year");
    }
    else{
        console.log("Not Leap Year");

    }
}
const num_digit=(number)=>{
    let digit=0;
    while(number!=0){
        let count=number%10;
        digit++;
        number=parseInt(number/10);
    } 
    console.log(digit); 
}
const max_num=(num1,num2)=>{
    if(num1>num2)
    {
        console.log(num1);
    }
    else{
        console.log(num2);
    }
}

const max_num3=(n1,n2,n3)=>{
    if(n1>n2){
        console.log(n1);
    }
    else if(n2>n3){
                console.log(n2);
    }
    else{
        console.log(n3);
    }

}

module.exports.oddeven_num=oddeven_num;
module.exports.pos_neg_num=pos_neg_num;
module.exports.prime_num=prime_num;
module.exports.fact_num=fact_num;
module.exports.max_num=max_num;
module.exports.max_num3=max_num3;
module.exports.palind_num=palind_num;
module.exports.leap_year=leap_year;
module.exports.num_digit=num_digit;
module.exports.sum_digit=sum_digit;
