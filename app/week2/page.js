import Link from "next/link";
import MyFirstComponent from "../_components/my-first-component";


export default function Page2() {
    return (
        <main>
            <h1>My Second Page!</h1>
            <p>This is the second page of my React App!</p>
            <MyFirstComponent />
            <Link href="../">Back</Link>
        </main>
    );
}