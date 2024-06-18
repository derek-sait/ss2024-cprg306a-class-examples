"use client"

import DogForm from './dog-form';
import DogList from './dog-list';
import DogData from './dogs.json';
import { useState } from 'react';

export default function DogPage() {

    const [dogList, setDogList] = useState(
        DogData.map( (dog) => ({...dog}) )
    );

    const handleCreateDog = (newDog) => {
        // dogList.push(newDog); // don't do this, we cannot mutate state variables directly
        setDogList( [...dogList, newDog] );
    }

    const [isDogFormOpen, setDogFormOpen] = useState(false);
    const openDogForm = () => setDogFormOpen(true);
    const closeDogForm = () => setDogFormOpen(false);

    return(
        <main>
            {
                isDogFormOpen && (
                    <DogForm closeFormFunc={closeDogForm} onCreateDog={handleCreateDog} />
                )
            }
            <h1 className='text-3xl font-bold text-center'>Dogs for Adoption</h1>
            <DogList listOfDogs={dogList} />
            <div className='text-center my-5'>
            <button onClick={openDogForm} className="py-2 px-4 rounded-sm bg-blue-600 hover:bg-blue-500 text-white">Open Dog Form</button>
            </div>
            
        </main>
    );
}