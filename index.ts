#! /usr/bin/env node

//import the inquirer modules which is command line interface
import inquirer from "inquirer" 
import chalk from "chalk"

//dispaly a colorful message
console.log(chalk.cyanBright("\n\tCode With Saima_Word Counter\n"));
console.log("=".repeat(60));

//prompt the user to enter a sentence
let answers= await inquirer.prompt([  
    {
        name:"Sentence",
        type:"input",
        message:"Enter your sentences to count the word:"
    }
]);

//Triming the sentence and splitting it in to words based on spaces
let words = answers.Sentence.trim().split(" ");

//Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold ("Sentences Words:"));
console.log(words);
console.log(chalk.bold(`\n- word count: ${chalk.redBright(words.length)}`));
console.log("=".repeat(60));


