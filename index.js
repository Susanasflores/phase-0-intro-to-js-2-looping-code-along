const cards = ["Jeffrey", "Luis", "Luz", "Alexis"]

function writeCards(names, str) {
  for (let i = 0; i < names.length; i++) {
    console.log(`I bought you a present ${names[i]}, happy ${str}`); 
  }
  
  return names;
}

writeCards(cards, "Thanksgiving");
