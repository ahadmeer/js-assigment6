// Function chapter
// Q:1

// function newDate(){
//     var d =new Date()
//     document.write(d)
// }

// // newDate();


// // Q:2
// function greet(){
//     var userName=prompt("Enter your name")
//     alert("Hello " + userName);
// }
// greet()


// Q:3
// function add(){
//     var num1 =+prompt("enter first num");
//     var num2 =+prompt("enter second num");
//     var add = num1+num2
//     return add

// }

// var resut =add()
// document.write(resut)


// Q:4
// var num1 = +prompt("enter your num")
// var opt = prompt("enter opt")
// var num2 = +prompt("enter your num")
// function calculator(num1,num2 ,opt){
//     if(opt === '+'){
//        return num1+num2;
//     }
//      else if(opt === '-'){
//          return num1 - num2

//      }
//      else if(opt === '/'){
//         return num1 / num2

//     }
//     else if(opt === '*'){
//         return num1 * num2

//     }
//     else{
//         document.write("wrong opration")
//     }

    
    
// }

// document.write(calculator(num1,num2,opt));


// Q:5
// var userinput = prompt("enter your num")
// function square(userinpurt){
//     return userinput*userinput;

// }

// document.write(square(userinput))

// Q:6
// function factorial(num)
// {
    //   
    // var fact = num;
                // 
    // for(var i=fact-1 ; i>=1;i--)
    // {   
        // 
        // fact=fact*i;
        // document.write("\n"+num);
    //    
    // }
                                        //    
    // document.write("Factorial of "+num+" is "+fact);
// }
// 
// factorial(4);

// Q:8
//  var startnum = prompt("enter start num");
//  var endnum = prompt("enter end num")
// function PrintNmbers(){
              
//     for(var i = 0 ; i <=endnum;i++){
//         document.write("\n"+i)
//     }
// }

// PrintNmbers()



// Q:9
// var height=prompt("enter you height")
// var width=prompt("enter you width")
// function area_of_triangle(width,height)
// {
//     return width*height;

// }
// area_of_triangle(width,height)
// document.write("Area of triangle is :"+area_of_triangle(width,height))




// Q:10
// function charactercount(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(char_count('w3resource.com', 'o'));

// 
    // Q:11
// 
// function cal_circumference(radius)
// {
// return 2*3.14*radius;
// }
// function cal_area(radius)
// {
    // return 3.14*(radius*radius);
// 
// }
// alert("The circumference of circle is:"+cal_circumference(3))
// alert("The Area of circle is:"+cal_area(3))