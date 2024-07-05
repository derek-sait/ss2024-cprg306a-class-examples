
export default function Artwork({artworkObj}){
    const {
        title,
        primaryImageSmall = "./notfound.png",
        artistDisplayName,
        objectDate,
        department
    } = artworkObj;
    return(
        <div className="mx-20 my-10 p-5 bg-blue-400 rounded">
            <h3 className="text-lg">{title}</h3>
            <img className="max-h-60 border-2 border-cyan-900" src={primaryImageSmall} />
            <ul>
                <li><b>Artist:</b> {artistDisplayName}</li>
                <li><b>Date:</b> {objectDate}</li>
                <li><b>Department:</b> {department}</li>
            </ul>
        </div>
    );
}