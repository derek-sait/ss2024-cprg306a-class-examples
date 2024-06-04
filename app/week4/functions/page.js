

export default function Page(){

    function helloWorld(username, dayOfWeek){
        // return "Hello World! Welcome back, " + username + ". Today is " + dayOfWeek;
        return `Hello World! Welcome back, ${username}. Today is ${dayOfWeek}.`;
    }

    const helloWorld2 = (username, dayOfWeek) => {
        return `Hello World! Welcome back, ${username}. Today is ${dayOfWeek}.`;
    }

    const helloWorld3 = (username) => `Hello ${username}`;
    const helloMath = (a,b) => a + b;

    const louder = (textFunc, username) => {
        // check to make sure the incoming argument is a function
        const thisText = textFunc(username);
        return `${thisText.toUpperCase()}!!!!`;
    }

    const multiplyBy = (num1) => {
        return (num2) => num1 * num2;
    }

    const multiplyByThree = multiplyBy(3);
    const multiplyByTen = multiplyBy(10);

    const orginalFunc = (num) => {return num + 2};
    const newFunc = orginalFunc;
    
    return(
        <main>
            <h1>Functions</h1>
            <p>{helloWorld("Alice", "Tuesday")}</p>
            <p>{helloWorld2("Joe", "Wednesday")}</p>
            <p>{helloWorld3("Bob")}</p>
            <p>{helloMath(3,4)}</p>
            <p>{louder(helloWorld3, "Robert")}</p>
            <p>{louder(helloWorld2, "Anne")}</p>
            <p>{multiplyByThree(7)}</p>
            <p>{multiplyByTen(7)}</p>
            <p>{newFunc.name}</p>
        </main>
    );
}