import Gallery from "./gallery";
import SingleArt from "./single-art";

export default function Page() {

    return(
        <main>
            <header>
                <h1 className="text-3xl text-center">Random Art Gallery</h1>
                <h2 className="text-2xl text-center">from the Metropolitan Museum of Art</h2>
            </header>
            {/* <SingleArt /> */}
            <Gallery />
        </main>
    )
}