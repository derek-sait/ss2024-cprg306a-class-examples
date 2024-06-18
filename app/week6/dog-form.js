"use client"

import { useState } from "react";

export default function DogForm({closeFormFunc, onCreateDog}){
    let controlStyles = "block mb-4";
    let inputStyles = "block mt-1 p-1 w-full rounded-sm text-black bg-blue-100 focus:bg-white";

    const [dogId, setDogId] = useState(0);
    const [dogName, setDogName] = useState("");
    const [dogAge, setDogAge] = useState(0);

    // const handleDogIdChange = (event) => setDogId(event.target.value);

    const handleSubmit = (event) => {
        //prevent the default functionality of the form
        event.preventDefault();
        // create new dog object to be added to the dogList
        let newDog = {
            id: dogId,
            name: dogName,
            age: dogAge
        }
        // call the handleCreateDog function from the parent, lifting state back to the parent
        onCreateDog(newDog);
        // reset form back to default values
        setDogId(0);
        setDogName("");
        setDogAge(0);
        // close the form
        closeFormFunc();
    }

    return(
        <div onClick={closeFormFunc} className="absolute w-full h-full flex items-center justify-center bg-gray-950/70">
            <section onClick={ (event) => event.stopPropagation() } className="max-w-md p-8 rounded-lg shadow-md bg-white text-black">
                <h2>Add new dog for adoption</h2>
                <form onSubmit={handleSubmit}>
                    <div className={controlStyles}>
                        <label>ID:</label>
                        <input onChange={ (event) => setDogId(event.target.value) } value={dogId} type="number" className={inputStyles} />
                    </div>
                    <div className={controlStyles}>
                        <label>Name:</label>
                        <input onChange={ (event) => setDogName(event.target.value) } value={dogName} type="text" className={inputStyles} />
                    </div>
                    <div className={controlStyles}>
                        <label>Age:</label>
                        <input onChange={ (event) => setDogAge(event.target.value) } value={dogAge} type="number" className={inputStyles} />
                    </div>
                    <div className={controlStyles}>
                        <button className="w-full py-2 px-4 rounded-sm bg-blue-600 hover:bg-blue-500 text-white">Add Dog</button>
                    </div>
                </form>
            </section>
        </div>
    );
}