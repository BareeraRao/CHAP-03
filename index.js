
let a=3;
let b=5;
console.log("Sum of 3 and 5 is", a + b);
document.write("Sum of 3 and 5 is ", a + b , "<br>");







let c=3;
let d=5;
console.log("multiplacation of 3 and 5 is ", c * d);
console.log("subtraction of 3 and 5 is ", c - d );
console.log("division of 3 and 5 is ", c / d);
console.log("modulus of 3 and 5 is ", c % d);
document.write("multiplacation of 3 and 5 is ", c * d , "<br>");
document.write("subtraction of 3 and 5 is ", c - d , "<br>");
document.write("division of 3 and 5 is ", c / d, "<br>");
document.write("modulus of 3 and 5 is ", c % d , "<br>");


document.write("Value after variable declaration is " +a+ "<br>");
document.write("Initial value: " +b+ "<br>");
document.write("Value after increment is:" +b+ "<br>");
b=b+7;
document.write("Value after addition is:" +b+ "<br>");
b--;
document.write("Value after decrement is:" +b+ "<br>");

 d=b%3;
document.write("The remainder is: "+d);



//QUESTION 4
 let ticket_cost=600;
 let ticket_buy=5;
 let total_cost=ticket_cost*ticket_buy;
 document.write("Total cost to buy " +ticket_buy+ " tickets to a movie is " +total_cost+ "PKR");

//QUESTION 5
 let table=4;
 document.write("Table of " +table+ "<br>");
 function generate_table(num){
     for(var i=1;i<10;i++)
     {
        var res=i*num;
         document.write(num+ " * " +i+ " = " +res+ "<br>");
     }
 }
 generate_table(table);

//QUESTION 6
 let celsius=25;
 fahrenheit= (celsius * 9/5) +32;
 document.write(celsius + "°C is " + fahrenheit + "°F<br>");

 fahrenheit=70;
 celsius=(fahrenheit -32) *5/9;
 document.write(fahrenheit + "°F is " + celsius + "°C<br>");

//QUESTION 7
 let item_1=650;
 document.write("Price of item 1 is "+item_1+ "<br>");

 let quantity_1=3;
 document.write("Quantity of item 1 is "+quantity_1+ "<br>");

 let item_2=100;
 document.write("Price of item 2 is "+item_2+ "<br>");

 let quantity_2=7;
 document.write("Quantity of item 1 is "+quantity_2+ "<br>");

 let shipping_charges=100;
 document.write("Shipping Charges "+shipping_charges+ "<br><br><br>");

 let r=(item_1*quantity_1)+(item_2*quantity_2)+100;
 document.write("Total cost of your order is "+r);

//QUESTION 8
 let total_marks=980;
 document.write("Total marks: "+total_marks+ "<br>");

 let obt_marks=804;
 document.write("Obtained marks: "+obt_marks+ "<br>");
 let per=(obt_marks/total_marks)*100;
 document.write("Percentage: "+per+ "% <br>");

//QUESTION 9
 let dollar=10;
 let riyal=25;
let r1=dollar*104.80;
 let r2=riyal*28;
 let total=r1+r2;
 document.write("Total Currency in PKR: "+total);

//QUESTION 10
 let num= 8; 
 let res= ((num + 5) * 10) / 2;
 document.write("The result of the arithmetic operations is: " + res);

//QUESTION 11
 let current_year=2024;
  document.write("Current year: "+current_year+"<br>");

 let birth_year=2004;
  document.write("Birth year: "+birth_year+"<br>");

 let this_year=current_year-birth_year;
 document.write("Your age is: "+this_year);

//QUESTION 12
 let radius=20;
 document.write("Radius of a circle is: "+radius+ "<br>");
 let circumference=2*3.142*radius;
 document.write("Circumference of a circle is: "+circumference+ "<br>");

 let area=3.142*radius*radius;
 document.write("Area of a circle is: "+area+ "<br>");

//QUESTION 13
 let fav_snack="chocolate";
 document.write("Favourite Snack: "+fav_snack+ "<br>");

 let current_age=15;
 document.write("Current Age: "+current_age+ "<br>");

 let max_age=65;
 document.write("Estimated Maximum Age: "+max_age+ "<br>");

 let amount_of_snack=3;
 document.write("Amount of snacks per day: "+amount_of_snack+ "<br>");

 r=(max_age-current_age)*amount_of_snack;
document.write("You will need "+r+ " "+fav_snack+" to last until the ripe the old age of "+max_age);
