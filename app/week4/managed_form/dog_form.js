"use client"

import { useState } from "react";

export default function DogForm(){

    const [dogName, setDogName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [dogBio, setDogBio] = useState("");

    const handleSubmit = (event) => {
        console.dir(event);
        // console.log("Hello World");
        event.preventDefault();

        let newDog = {
            name: dogName,
            img: imageUrl,
            bio: dogBio,
        }

        alert(`This dog is named ${newDog.name}
        \n This is the Image URL: ${newDog.img}
        \n This is their story: ${newDog.bio}`);

        setDogName("");
        setImageUrl("");
        setDogBio("");
    }

    const handleDogName = (event) => {
        // console.dir(event);
        setDogName(event.target.value);
    }
    const handleImageUrl = (event) => setImageUrl(event.target.value);
    const handleDogBio = (event) => setDogBio(event.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Dog Name:</label>
                <input required type="text" onChange={handleDogName} value={dogName} />
            </div>
            <div>
                <label>Image URL:</label>
                <input type="text" onChange={handleImageUrl} value={imageUrl} />
            </div>
            <div>
                <label>Dog Bio:</label>
                <textarea onChange={handleDogBio} value={dogBio}></textarea>
            </div>
            <div>
                <label>Dog Breed</label>
                <select onChange={}>
                    <option value="golden_retriever">Golden Retriever</option>
                    <option value="poodle">Poodle</option>
                    <option value="burnese">Burnese</option>
                </select>
            </div>
            <div>
                <button>Add Dog!</button>
            </div>
            {/* <p>{dogBio}</p> */}
        </form>
    )
}