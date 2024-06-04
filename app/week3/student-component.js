


export default function Student({student, studentId}){

    let {name, age, address:{city, postalcode}} = student;

    return (
        <div className="text-red-300 bg-slate-800 border border-cyan-100 m-10 p-5">
            <h3 className="text-lg">{name}</h3>
            <p>Student ID: {studentId}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Postal Code: {postalcode}</p>
        </div>
    );
}