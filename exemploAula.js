/* /* let age, isHuman, name
name = "Johnny"
age = 33
isHuman = true
console.log(`O ${name}, tem ${age} e é humando:${isHuman} `)

const person ={
    nikeName: 'Johnny',
    age: 33,
    isAdmin: true
}

//console.log(person.name)//.name somente essa propriedade
console.log(`${person.nikeName} tem ${age} anos`)

const animals = [
    'papagaio',
    'leao',
    'peixe',
    'gato', 
    {
        new: 'cat', // assim ele dá erro e aparece undefined
        age: 8
    }
]
console.log(animals.length)
console.log(animals[3].length)

//EXERCÍCIO

let nickName = "Johnny"
console.log(typeof nickName)

const nameTwo ={
    newName: "Bruna",
    age: 30,
    starts: 1.65,
    isSubscribed: true,
    weight: 50
}
console.log(nameTwo)
console.log(typeof nameTwo)

console.log(`${nameTwo.newName} de idade ${nameTwo.age} e pesa ${nameTwo.weight}`)

const nameTree ={
    newName: "Johnny",
    age: 33,
    starts: 1.75,
    isSubscribed: true,
    weight: 72
}

let nameDuplo = [
    nameTwo,
    nameTree
]

console.log(nameDuplo)


console.log(a)
var a = 1
     

function Person (name){
    this.name = name
    this.walk = function(){
        return this.name + " Está Andando"
    }
}

const johnny = new Person ("Johnny")
const joao = new Person ("Bruna")
    console.log(johnny.walk())
    console.log(joao)
    

    let phase = "auhsuahushua iahsiuhauhsuias uahsiuhaiuhsua uahsuiahusha"
    let myphase = phase.split(" ")//virou array
    //console.log(myphase)
    let newMyPhase = myphase.join("_")
    console.log(newMyPhase) 
   

    let date = new Date('2021-02-12')
    console.log(date)
    */
for (let i = 0; i <= 10; i++){
    console.log(i)
}
for (let i = 100; i >0; i++){
    console.log(i)
}

let i = 232454653
while(i>10){
    console.log(i)
    i /=35
}

let name = "Johnny"
let names = ['Bruna', 'Jenny', 'Johnny', 'Mauri', 'Marilene']
for (let letra of name ){
    console.log(letra)
}
for (let letra of names ){
    console.log(letra)
}

let person = {
    namePerson: 'Johnny',
    age: 33,
    weight: 72.5
}
for (let propriedade in person){
    console.log(propriedade)
    console.log(person[propriedade])
}
