let myName: string = 'Peter';
let isCool: boolean = true;
let displaySkills: Array<string> = ['coder', 'eater', 'playing drums', 'double secret probabtion specialist'];


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
function displayPosition(companyName: string, jobtitle: string, description: string,){
    console.log(`${companyName}`, `${jobtitle}` , `${description}`);
}

interface ISkills{
    skill: string,
    isCool: boolean;

}

const mySkills: ISkills[] = [
    {
        skill: 'displaySkills',
        isCool: true

    }
]


