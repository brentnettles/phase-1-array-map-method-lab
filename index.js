const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }
// //Need to make the
// let titleCase = (str) => {
//   return str.split(' ').map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }).join(' ');
// };

// const titleCase = tutorials.map(titleCase);

// console.log(titleCased);

// let labLesson = (titleCase) => {
//   return titleCase.split('').map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }) .join('');
// };


// console.log(labLesson);

const titleCase = (str) => {
  return str.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

const titleCased = () => {
  return tutorials.map(titleCase);
};



console.log(titleCased());

// Loop through each word in the array
// newSentence.map(word => { titleCased
//     console.log(word);
// });

// console.log(newSentence); 