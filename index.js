/** 1. ways to print in JavaScript */

//alert("Hello World")
        //console.log("Hello World");
        //document.write("This is Document Write")
       
/**  2. JavaScript console API */

    // console.log("Hello World", 4+6, "Another Log");
    // console.warn("This is Warning..")
    // console.error("This is an Error")

/** 3. JavaScript Variables */       
 // Containers to store data values.

    // var number1 = 10
    // var number2 = 10
    // console.log(number1 + number2)

 /** JavaScript Datatyes */

/**
    
    At a very high level, there are two types of datatypes in JavaScript
    1. Primitive Data Types: undefined, null, number, string, boolean, symbol
    2. Reference Data Types: Arrays, Objects 

    */

    // int data types
    var num1 = 456
    var num2 = 6565

    // String datatypes 
    var str1 = "This is String1"
    var str2 = "This is String2"

    // Object datatypes
    var marks= {
        Hemant: 15,
        Rajnish: 4.5,
        Rishab: 78
    }    
    // console.log(marks)

/** JavaScript Boolean Datatypes */
    var a = true
    var b = false
    // console.log(a)
    // console.log(b)

    // var und = undefined
    var und
    // console.log(und)

    var n = null;
    // console.log(n)

    // Arrays data types
    var arr = [1,2,"Hemant",4,5]
    // console.log(arr)

/** Operators in JavaScript */
    
    // Arithmetic Operators
    var x = 15
    var y = 15
    // console.log(x+y)
    // console.log(x-y)
    // console.log(x*y)
    // console.log(x/y)    

    // Assignment Operators
    var z = x
    // z += 2
    // z -= 2
    // z *= 2
    // z /= 2
    // console.log(z)

    // Comparison Operators
    var d = 45
    var e = 65
    // console.log(d == e)
    // console.log(d >= e)
    // console.log(d <= e)
    // console.log(d < e)
    // console.log(d > e)

    // Logical Operators

    // Logical AND
    // console.log(true && true)
    // console.log(true && false)
    // console.log(false && true)
    // console.log(false && false)

    // Logical OR
    // console.log(true || true)
    // console.log(true || false)
    // console.log(false || true)
    // console.log(false || false)
    
    // Logical NOT
    // console.log(!true)
    // console.log(!false)

    
/** Function in JavaScript */
    // DRY = Do Not Repeat yourself

    // function avg(a,b){
    //     return a+b
    // }

    function avg(a,b){
        c = (a+b)/2
        return c
    }

    c1 = avg(4, 5)
    c2 = avg(5, 6)
    // console.log(c1, c2)

/** Conditional in JavaScript */
    var age = 10
    // if(age>18){
    //     console.log("You are not Kid")
    // }else{
    //     console.log("You are a Kid.")
    // }

    // if-else ladder
    // age = 31 
    // if(age > 32){
    //     console.log("You are not a kid.")
    // } else if(age > 26){
    //     console.log("Bacha nahi hai.")
    // }else if(age >= 18){
    //     console.log("18 bache nahi rahe.")
    // }else{
    //     console.log("Bache rahe")
    // }
    // console.log("End of if-else ladder")

/** JavaScript Loops */    
    
    var arr = [1,2,3,4,5,6,7]
    // console.log(arr)
    // for(var i = 0; i<arr.length; i++){
    //     console.log(arr[i])
    // }        

    // arr.forEach(function(element){
    //     console.log(element)
    // })


    // const ac = 0
    // ac++ // ac = ac +1
    // let j = 0
    // while(j < arr.length){
    //     console.log(arr[j])
    //     j++
    // }    

    // do {
    //     console.log(arr[j])
    //     j++
    // } while (
    //     j< arr.length);

/** break and continue statement */
    // var arr = [1,2,3,4,5,6,7]
    // for(var i = 0; i<arr.length; i++){
    //     if(i == 2){
    //         // break;
    //         continue;
    //     }
    //     console.log(arr[i])
    // }

// let myArr = ["Fan","Camera",34, null, true]
//     // Array methods
//     console.log(myArr.length)
//     // myArr.pop()
//     // myArr.push("Hemant")
//     // myArr.shift()

//     const newLen = myArr.unshift("Hemant")

//     console.log(newLen)
//     console.log(myArr)


/** String methods in JavaScript */
// let myString = "Hemant is a good boy."
// console.log(myString.length)
// console.log(myString.indexOf("good"))
// console.log(myString.lastIndexOf("good"))

// console.log(myString.slice(1,4))
// console.log(myString)
// console.log(myString.replace("good","bad"))

    
/** Date in JavaScript */
    // let MyDate  = new Date()
    // console.log(MyDate.getTime())
    // console.log(MyDate.getFullYear())
    // console.log(MyDate.getDate())
    // console.log(MyDate.getDay())
    // console.log(MyDate.getMinutes())
    // console.log(MyDate.getHours())


/** DOM manipulation */
    let elem = document.getElementById('click')
    // console.log(elem)

    let elemClass = document.getElementsByClassName("container")
    // console.log(elemClass)

    // elemClass[0].style.background = 'yellow'
    elemClass[0].classList.add('bg-primary')
    elemClass[0].classList.add('text-success')

    // console.log(elem.innerHTML)
    // console.log(elem.innerText)

    // tn = document.getElementsByTagName('button')
    // console.log(tn)

    // createdElement = document.createElement('p')
    // createdElement.innerText = "This is the created paragraph"
    // tn[0].appendChild(createdElement)

    // createdElement2 = document.createElement('b')
    // createdElement2.innerText = "This is the created bold"
    // tn[0].replaceChild(createdElement2, createdElement)
    // tn[0].removeChild(Element) ---> removes an element 


/** Selecting using Query */
    // sel = document.querySelector('.container')
    // console.log(sel)
    
    // sel = document.querySelectorAll('.container')
    // console.log(sel)    

/** Events in JavaScript */
    // function clicked(){
    //     console.log('The button was clicked')
    // }

    // window.onload = function(){
    //     console.log('The document is loading..')
    // }

    // container1.addEventListener('click', function(){
    //     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
    //     console.log("Clicked on Container")
    // })
    
    // container1.addEventListener('mouseover', function(){
    //     console.log("Mouse on Container")
    // })

    // container1.addEventListener('mouseout', function(){
    //     console.log("Mouse out of Container")
    // })
    

    // let prevHTML = document.querySelectorAll('.container')[1].innerHTML
    // container1.addEventListener('mouseup', function(){
    //     document.querySelectorAll('.container')[1].innerHTML = prevHTML
    //     console.log("Mouse up when clicked on Container")
    // })

    // container1.addEventListener('mousedown', function(){
    //     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
    //     console.log("Mouse down when clicked on Container")
    // })


/** SetTimeout and Setinterval */
    // Arrow Function
    // function sum(a, b){
    //     return a+b
    // }

    // sum = (a,b) => {
    //     return a+b;
    // }

    // logKaro = () =>{
    //     document.querySelectorAll('.container')[1].innerHTML = "<b> set interval fired </b>"
    //     console.log("I am your Log..")
    // }
    // // SetTimeout and  SetInterval
    // setTimeout(logKaro, 5000)
    // clar = setTimeout(logKaro, 5000) // used to stop the setTimeout
    // // setInterval(logKaro, 2000)
    // clr = setInterval(logKaro, 2000) // for stoping this setInterval

  
/** JavaScript LocalStorage */    
// localStorage.set
    // undefined
    // localStorage.setIte
    // undefined
    // localStorage.setItem('Name','Hemant')
    // undefined
    // localStorage.getItem('Name')
    // "Hemant"
    // localStorage.removeItem('name')
    // localStorage.clear()

/** JSON */
    // obj = {name:"Hemant", length:1, a:{this: "that"}}
    // jso = JSON.stringify(obj)
    // console.log( typeof jso)
    // console.log(jso)
    // parsed = JSON.parse(`{"name":"Hemant", "length":1, "a":{"this": "that"}}`)
    // console.log(parsed)


/** Template literals - Backticks */
// a = 52; 
// console.log(`This is my ${a}`)      