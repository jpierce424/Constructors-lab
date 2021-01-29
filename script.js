function Dog( ownersName, dogsName, color) {
    this.ownersName = ownersName;
    this.dogsName = dogsName;
    this.color = color;
    this.numLegs= 4;
}


let terrier = new Dog("Joe", "Jordan", "black")
console.log(terrier.ownersName + " has a dog named " + terrier.dogsName + " and it has black fur")

let retriever = new Dog("Alessandro", "Nick", "brown")
console.log(retriever.ownersName + " has a dog named " + retriever.dogsName + " and it has brown fur")



