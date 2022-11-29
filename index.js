
//  dom practice what is taught by masoom sir

// let obj = document.getElementsByClassName('heading');
// let obj1 = document.getElementById('unorder-list');
   
// let show = obj1.firstElementChild.nodeName;
// let show2 = obj1.firstChild.nodeName;
// let show3 = obj1.nextElementSibling.nodeName;
// // let show4 = obj.nextElementSibling.nodeName; // why is it not working using classname
// let show5 = obj1.previousElementSibling.nodeName;

// console.log(show); // LI
// console.log(show2);// #text
// console.log(show3);// script
// // console.log(show4);
// console.log(show5);//H1

// console.log(document);


// dom lecture 1 practice by prakash sir date:28-11-2022

// console.log("Hello");

// console("Hello"); // this will give error and the code did not run run it stops here and shows error
// // so js is single threaded code because it execute code line by line.
// console.log("Hello");

// console.log("Hello");

// console.log("Hello");

// console.log("Hello");

// console.log("Hello");

// console.log("Hello");


// console.log(document); // document is a html file, inside document we have all html code.

// const selector1 = document.getElementById('para2'); // it will select the element in html which has a id of para2
// console.log(selector1,"it is selected");

// const selector2 = document.getElementsByClassName('para1'); // it will select the element in html which has a class name of para1.
// console.log(selector2,"it is selected") // when  i am doing it adding some element to it it is not changing its property showing same?

// const selector3 = document.getElementsByTagName('div'); // it will select all the tagname provided in parameters.
// console.log(selector3,'selected'); // it will give html collection like an array. but why when give id to tag it is showing a list?

// const selector4 = document.querySelector('#para2');
// console.log(selector4,"selected"); //doubts1: when we select it is giving all element inside div but not in using class name.
 //                                  doubt2: when we are providing in selector id it showing in list why?

// const selector5 = document.querySelectorAll('.para1,#para2,div'); // it will select the multiple element inside it either class name,id name and tag name.return node list like an array.
// console.log(selector5,'selected');

// console.log(document.body);



// lecture 2 practice by kamal sir date:29-11-2022

// console.log(document); // why it is showing paragraph tag? when i use script tag in head.
// const selector1 = document.querySelector("#id1,#id2,#id3");
// console.log(selector1);

// console.log(document.getElementById('id1'));
//  const ele = document.getElementById('id1');
// //   console.log(ele.style); // it will give the all the css property for the element.
// console.log( ele.style.fontSize = '50px') // it will change the css of element using js 
// ele.style.color = 'red';
// ele.style.backgroundColor = 'yellow'

// if we want to give multiple style--

// const mulStyle = {
//     fontSize:'60px',
//     backgroundColor:"red",
//     color:"white"
// }

// Object.assign(ele.style,mulStyle);
const ele = document.getElementById('some-para');
const ul = document.getElementById('uno');
// const body = document.getElementById('body');
// console.log(body.innerText);
// console.log(body.innerHTML);
// console.log(body.outerHTML);

// ele.innerHTML = ul.innerHTML;
ele.innerHTML = ul.outerHTML
