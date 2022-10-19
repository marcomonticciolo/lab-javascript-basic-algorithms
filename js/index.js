// Iteration 1: Names and Input
let hacker1 = 'luis'; 
let hacker2 = 'marco'; 

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length < hacker2.length){
    console.log(`the driver has the longest name,it has ${hacker2.length} characters`);
}

    else if (hacker2.length > hacker1.length){
        console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);
    }

    else {
       console.log(`Wow, you both have equally long names, ${hacker1.length,hacker2.length} characters!`); 
    }



// Iteration 3: Loops

let output = ''

for (let i = 0; i < hacker1.length; i++){
   output += hacker1[i].toUpperCase() + ' ';
}
console.log(output);

let ReverseName = ''

for (let i = hacker1.length -1; i >=  0; i--){
ReverseName = ReverseName + hacker1[i];
}
console.log(ReverseName);


// bonus 1 


let paragraph1 = "Sed ultricies massa quis mauris semper, ac auctor neque laoreet. Praesent sodales lectus sit amet arcu feugiat mollis et a ligula. In ultricies felis nisl, ac ornare lacus aliquet et. Praesent fermentum dapibus elit, quis porta diam ultrices eu. Cras quis purus dui. Duis sit amet turpis velit. Sed tincidunt faucibus est. Phasellus eget lacinia dolor. Donec quis dui suscipit, fringilla libero quis, auctor lacus. Phasellus suscipit sem eu ex fermentum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus tempor risus id pharetra vulputate."

let splitParagraph1 = paragraph1.split(" ");
let result = 0;

for (let i = 0; i <= splitParagraph1.length; i++){
  if (splitParagraph1[i] == "et"){
  result++
}
}


console.log(result);

// bonus 2 




