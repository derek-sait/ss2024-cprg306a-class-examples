

export default function Page(){

    let emptyArray = [];
    let numbers = [5,3,9,1,4];
    // numbers.push(12);
    // numbers.pop();
    // numbers.splice(1,3);
    let doubled = numbers.map( (num) => num * 2 );
    let lessThanFive = numbers.filter( (num) => num < 5 );
    let moreNumbers = [6,7,8];
    let allNumbers = numbers.concat(moreNumbers);
    let numbersToBeSorted = [...allNumbers];
    // let sortedNumbers = allNumbers.toSorted();
    let sortedNumbers = numbersToBeSorted.sort( (a,b) => b - a );
    let sum = allNumbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
        );

    let newNumbers = [...numbers, 12, 23, 34, ...moreNumbers];

        let originalStudent = {
            name: 'Alice',
            age: 25,
            email: 'alice@sait.ca'
        }
        let newStudent = {
            ...originalStudent,
            phone: '1234567890'
        }
        let studentCopy = {...originalStudent};

        studentCopy.name = 'bob';

    return(
        <main>
            <p>{ numbers.join(' | ')}</p>
            <p>{ doubled.map( (num) => `${num},`) }</p>
            <p>{ lessThanFive.join(',') }</p>
            <p>{ allNumbers.join(',') }</p>
            <p>{ sortedNumbers.join(',') }</p>
            <p>{sum}</p>
            <p>{newNumbers.join(',')}</p>
            <p>{ JSON.stringify(originalStudent) }</p>
            <p>{ JSON.stringify(studentCopy) }</p>
        </main>
    );
}