
//--------Chapter 31 to 34-------------------------
// //------------Question no 1------------------
// var a = new Date();
// document.write(a)

//-------------Question no 2------------
// var month = ["Janvary","febary","March","April","May","June","July","Augest","setembar","octubare","Novembr","Decembr"]
// var a=new Date()
// var b=month[a.getMonth()]
// console.log(b)

//--------------Question no 3---------------------
// var day = ["Sun","Monday","tuesday","Wednesday","Thuesday","friday","Saturday"]
// var d=new Date();
// var c=day[d.getDay()]
// console.log(c)


// //--------------Question no 4------------
// var day = ["Sun","Monday","tuesday","Wednesday","Thuesday","friday","Saturday"]
// var a=new Date();
// var b=day[a.getDay()]
// if(b==day[0,6]){
//     document.write("Today is Fun Day")
//     }else{
//         document.write(b)
//     }



// //---------------Question no 5--------------
// var a = new Date();
// var b= a.getDay();
// if (b<=15){
//     document.write("First 15 Day of the Month")
// }else if (b>=15){
//     document.write("last 15 Day of the Month")
// }


// //---------------------Question no 7-------------
// var a = new Date()
// var b = a.getHours()
// if (b <=12){
//     document.write("Its Am")
// }else if ( b >= 12)
// {
//     document.write("Its Pm")
// }

//---------------------Question no 8--------------------
// var a =new Date()
// a.setDate(31)
// document.write(a)

//--------------Question no 10---------------
// var a =new Date();
// a.setSeconds(2015)
// document.write(a)

// //-----------Question no 12-----------------
// var a=new Date()
// a.getDate()
// document.write("Current Date ",a,"<br>")
// var b=new Date()
// b.setDate("December 15 1990")
// document.write("100 year back it was, ",b)
//----------------Chapter 35-to-38-------------
//----------------Question no 1-------------------
// date()
// function date(){
//     document.write(new Date())
// }

//---------------Question no 2------------


// function fulname(fname,lname){
//     document.write("Greek User " +fname +" "+lname)
// }
// fulname("Yasir","Ali")

//------------------Question no 3-----------

//  var num=+prompt("Enter YOu add num")
// var num1=+prompt("Enter YOu add num2")

// sum(num,num1)
// function sum(num,num1){
//     document.write(num+num1)
// }

//--------------------Question no 4------------------
// function sumfuntion(num1,num2,opt){
//     if(opt=="+"){
//      document.write(num1+num2)
//     }else if(opt=="-"){
//         document.write(num1-num2)
//     }else[
//         document.write(num1*num2)
//     ]
// }
// sumfuntion(1,2,"+")

//--------------------Question no 5-------------------
// function squre(a){
//     document.write(a*a)
    
// }
// squre(3)
//--------------Question no 6------------------------

    // // Factorial of n = n! = n × (n – 1) × (n – 2) × … × 1
    // var fact = 1;
    // var factorialNumber = +prompt("Enter a number to find the factorical that number : ")
    // document.write("Factorial Of " + factorialNumber + " ! <br>")

    // // factorial of negative number is not possible 
    // if (factorialNumber < 0) {
    //     document.write("The factorial of the negative number doesnot perform")
    // }

    // // factorial of 0! = 1
    // else if (factorialNumber === 0) {

    //     document.write("The factorial of 0 is 1")
    // }
    // else if (factorialNumber >= 1) {
    //     for (i = 1; i <= factorialNumber; i++) {

    //         fact = fact * i;
    //         document.write(i + " ")

    //     }
    //     document.write(" =  " + fact)

    // }



//---------------Question no 7-----

// function startend(startnum,endnum){
//     for( i=startnum;i<=endnum;i++){
//         console.log(i)
//     }
// }
// startend(1,6)