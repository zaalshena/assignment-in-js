/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) შედარება
 * 3) If პირობები
 * 4) ლოგიკური ოპერატორები
 * 5) Switch 
 */



// <------- შედარება ---------#### //

const num1 = 0;
const boolean1 = false;
const num2 = 5;
const emptyString = "";
const boolean2 = false;
const text = "I'm Text";
const text2 = "0";

// ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// ჩამოწერეთ ზეპირად!
// მაგ. [1, 2, 3, 4]

// >>> კოდი დაწერეთ აქ 

const isFalse = [];
const isTrue = [];

(!!num1 == true) ? (isTrue.push (num1)) : (isFalse.push (num1));
(!!boolean1 == true) ? (isTrue.push (boolean1)) : (isFalse.push (boolean1));
(!!num2 == true) ? (isTrue.push (num2)) : (isFalse.push (num2));
(!!emptyString == true) ? (isTrue.push (emptyString)) : (isFalse.push (emptyString));
(!!boolean2 == true) ? (isTrue.push (boolean2)) : (isFalse.push (boolean2));
(!!text == true) ? (isTrue.push (text)) : (isFalse.push (text));
(!!text2 == true) ? (isTrue.push (text2)) : (isFalse.push (text2));

console.log ("false: ",isFalse);
console.log ("true: :",isTrue);
//


// შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა

console.log("abc" < "ah")
console.log(2 !== "004")



// <------- ლოგიკური ოპერატორები ---------#### //

// შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// 18 წელზე შესთავაზეთ სასმელი

// >>> კოდი დაწერეთ აქ 

let mainAge = 18;
let userAge = Number(prompt("enter your age"))

if (userAge == mainAge || userAge > mainAge)
  console.log('სასმელს ხომ არ დალევთ?')

//


// მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// >>> კოდი დაწერეთ აქ

 mainAge = 18;
 userAge = Number(prompt("enter your age"))

if(mainAge == userAge){
  console.log  ('სასმელს ხომ არ დალევთ?')

}else if (userAge < mainAge){
  console.log ('უპს ჯერ პატარა ხარ, სასმელს ვერ შემოგთავაზებ') 

}else if (userAge > 100){
  console.log ('დალევის თავი არ გექნებათ თორემ სასმელს შემოგთავაზებდით')

}else if (userAge > 60){
  console.log ('ჯანმრთელობა თუ არ გიშლით ხელს, სასმელს შემოგთავაზებთ')


}else if (userAge > mainAge){
  console.log ('ჰა დალევ ხო? ;-)')
}

//


// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ

let a =  Number (prompt ('enter first number'));
let b =  Number (prompt ('enter second number'));
 
console.log( a < b ? ("a<b") : a = b ? ("a=b") : ("a>b"));
  
//

/*
  ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
  კონკრეტული ციფრები მინიჭებული (თეთრი=4, 
  წითელი=3, მწვანე=2, ლურჯი=1, შავი=0, 
  სხვა ყველა ფერი=undefinde)
*/

let colorId = 3

// დაწერეთ if ისე, რომ როდესაც ჩვენ
// შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// სახით)


// >>> კოდი დაწერეთ აქ


let useColorId = Number(prompt("enter color id"));

if (useColorId==3){
   console.log ('Red')

}else if (useColorId < 3 && useColorId > 1){
  console.log ('Green')

}else if (useColorId < 2 && useColorId > 0){
  console.log ('Blue')

}else if (useColorId < 1 ){
  console.log ('Black')

}else if (useColorId > 3 && useColorId < 5 ){
  console.log ('White')
}
else console.log ("underfined");

//



// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ

 useColorId = Number(prompt("enter color id"));

 a = "undefined"
a = useColorId == 0 ? (a="black") : a;
a = useColorId == 1 ? (a="blue") : a;
a = useColorId == 2 ? (a="green") : a;
a = useColorId == 3 ? (a="red") : a;
a = useColorId == 4 ? (a="white") : a;

console.log(a);

//


// <------- დავალება Switch ---------#### //

// ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// ოღონდ ამჯერად Switch-ის დახმარებით


// >>> კოდი დაწერეთ აქ

 colorId = Number(prompt("enter color id"))
switch(colorId){
  case 0:
    console.log("black")
    break;

  case 1:
    console.log("blue")
    break;

  case 2:
    console.log("green")
    break;

  case 3:
    console.log("red")
    break;

  case 4:
    console.log("white")
    break;

  default: 
    console.log("undefined");
    break;
}

//



//  ||
//  ||
//  ||
// \  /
//  \/

/*
    ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
    ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
    როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
    ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
    კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
    არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
    იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
    დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი

    // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
    // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
    მაგ. 
    """"
      case "გამარჯობა":
        alert("გამარჯობა");
        break;
    """"
*/
const bot = document.getElementById("bot")
bot.addEventListener("click", myFun())

function myFun() {
  let x = prompt("მე მზად არ ვარ პასუხისათვის")

  // >>> კოდი დაწერეთ აქ გამოიყენეთ Switch

let hello = prompt("გამარჯობათ");
    switch (hello){
      case 'გამარჯობათ':
        let a = prompt ('როგორ ხართ?');

        switch (a) {
          case 'კარგად':
            alert ('ძალიან კარგი');
            break;

          case 'ცუდად':
            alert ('სამწუხაროა');
            break;

        }
       a = prompt ('გაქვთ თუ არა მართვის მოწმობა?');
        switch (a) {
          case 'არა':
            alert ('სამწუხაროდ დაგაჯარიმებთ 2000 ლარით');
            break;

          case 'კი':
            alert ('არ დაგაჯარიმებთ ოღონდ იარეთ ბრთხილად')
            break;
          }
        break;
    }
  //

  // რეკურსიული ფუნქცია
  myFun()
}

