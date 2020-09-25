// function Person() {
//     let name = "Emmytobs"
//     function getName() {
//         return name;
//     }
//     return {
//         getName,
//         setName(newName) {
//             name = newName;
//         }
//     }
// }

// const person = Person();
// console.log(person.setName("Emmanuel Otobo"));
// console.log(person.getName());

function addTwoNumbers(adder) {
    return function(addee) {
        return adder + addee
    }
}

const addToFive = addTwoNumbers(5);