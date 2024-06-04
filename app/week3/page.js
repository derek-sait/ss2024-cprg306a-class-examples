import Student from "./student-component";



export default function PropsPage(){

    let studentOneID = 123;
    let studentTwoID = 456;

    let studentOne = {
        name: 'Joe',
        age: 25,
        schedule: ['CPRG306', 'CPRG303', 'CPRG123', 'CPRG456'],
        address: {
            line1: '123 Home Street',
            city: 'Calgary',
            postalcode: 'T3H 1C3',
        },
    };

    let studentTwo = {
        name: 'Alice',
        age: 23,
        address: {
            city: 'Edmonton',
            postalcode: 'A1B 2C3',
        }
    }

    let {name, age, address:{city}, schedule:[,,,otherClass] } = studentOne;


    return(
        <main>
            <h1 className="text-2xl">Practice with Props</h1>
            <h2 className="text-xl">Components with Props</h2>

            <Student student={studentOne} studentId={studentOneID} />
            <Student student={studentTwo} studentId={studentTwoID} />

            <h2 className="text-xl">Hardcoded Object</h2>
            <p>Name: {studentOne.name}</p>
            <p>Age: {studentOne.age}</p>
            <p>City: {studentOne.address.city}</p>
            <p>Mobile App Class Code: {studentOne.schedule[1]}</p>
            <h2>Destructured Variables</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>{otherClass}</p>
        </main>
    );
}