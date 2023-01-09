// MEDIUM: write a program to determine if someone is shouting, whispering, or talking normally

const upperCase = 'SHOUTING';
const lowerCase = 'Whispering';
const neither = 'Talking normally';

//prompts user to write a word using all uppercase, lowercase, or both letters
const input = prompt('Type a word in all uppercase, lowercase or both.');

//returns if user is shouting, whispering, or talking normally
if (input === input.toUpperCase()){
    alert(upperCase)
    console.log('shouting'); 
} else if (input === input.toLowerCase()){
    alert(lowerCase)
    console.log('Whispering');
} else {
    alert(neither)
    console.log('Talking normally');
}
//console.log will insert the following values into the console
//examples: "shouting" , "Whispering" , or "Talking normally"