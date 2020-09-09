/*
    Change the names in the array by putting the first letter in UpperCase
    Use instruction 'for' to console.log each name
*/
// const mcTeam = ["angelo","vincent","carlos","henriette"];
// const capitalizeNames = peopleArray => peopleArray.map(name => 
//     name.split(' ').map(word => 
//         word[0].toUpperCase() + word.slice(1).toLowerCase()
//     ).join(' ')
// );
// const capitalizedNames = capitalizeNames(mcTeam);
// console.log(capitalizedNames);


for (let i = 0; i < mcTeam.length; i++) {
    console.log('1', cTeam[i][0].toUpperCase() + mcTeam[i].substring(1))
  }
//YOUR CODE HERE
for (let i = 0; i < mcTeam.length; i++) {
    let element = mcTeam[index];
    element = element[0].toUpperCase() + element.substring(1);
    console.log('2', element);
    
}

mcTeam.forEach(element => {
    element = element[0].toUpperCase() + element.substring(1);
    console.log('3', element);
});

mcTeam.map(element => {
    element = element[0].toUpperCase() + element.substring(1);
    console.log('4', element);
});

/*EXPECTED RESULT
>Angelo
>Vincent
>Carlos
>Henriette
*/