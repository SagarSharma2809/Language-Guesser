const colors = require('colors');
const franc = require('franc');
const langs = require('langs');




//step 1: take input from user as argument

let input = process.argv[2];

//step 2: use franc to detect language
let langCode = franc(input);

if (langCode === 'und') {

    console.log("Please enter a larger text sample. This one is too short to make a probable guess".red);

}
else {


    console.log('\n');

    //step 3: use langs to get the language Name string

    let langData = langs.where("3", langCode);
    console.log(`OUR BEST GUESS IS : ${langData.name}`.green);

}
