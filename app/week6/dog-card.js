

export default function DogCard({dogObj}) {

    const {id, name, age} = dogObj;

    return(
        <div className="border border-blue-500 bg-blue-800 m-1 p-2 text-white">
            <h3 className="text-xl font-bold">{name}</h3>
            <p><b>ID:</b> {id}</p>
            <p><b>Age:</b> {age}</p>
        </div>
    );
}