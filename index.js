// const cards = ["Jeffrey", "Luis", "Luz", "Alexis"]

function writeCards(names, str) {
  const myMessage = []
  for (let i = 0; i < names.length; i++) {
    myMessage.push(`Thank you, ${names[i]}, for the wonderful ${str} gift!`)
}
return myMessage;
  }
function countDown(number) {
    let count = number;
    while(count >= 0){ 
      console.log(count);
      count -= 1
    }}
// writeCards(cards, "Thanksgiving");
console.log(writeCards(["Alex", "Susana", "Rita"],"Christmas"))
console.log(writeCards(["Romina", "Juan", "Christina"],"Graduation"))
const myArray = ["This", "array", "has", 5, "elements"];
console.log(countDown);
