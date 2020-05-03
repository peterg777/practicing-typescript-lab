function displayPosition(companyName, jobTitle, description) {
    console.log(' ' + jobTitle+ ' at ' + companyName + ' ' + description);

}
function displaySkill(skill, isCool) {
    if (isCool) {
        console.log('* BAM: ' + skill);
    } else {
        console.log('* ' + skill);

    }
}

console.log('Peter Guzzardo' .toUpperCase());
console.log('Career: Stand Up Philosopher');
console.log('Description: Funny, Sarcastic Guy');
console.log('Interests:');
console.log('* listening to music');
console.log('* playing golf');
console.log('* playing drums');
console.log('* fishing');
console.log('My Previous Experience:');

displayPosition('Hello World', 'Foodie', 'ate a shit load');
displayPosition('Initech', 'TPS Report Creator', 'set the building on fire');
displayPosition('Covalence', 'Another pain in the butt', 'is a Catalyst Student');
console.log('My Skills:');

displaySkill('Coder', true);
displaySkill('Eater', true);
displaySkill('Fly Fishing', false);
displaySkill('Playing Drums', true);
displaySkill('Python Programmer', false);
displaySkill('Double Secret Probation Specialist', true);
