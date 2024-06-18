import ContactList from "./contact-list";

export default function ContactPage(){
    return(
        <main className="bg-sky-100 p-10">
            <h1 className="text-3xl mb-5">Contact List</h1>
            <ContactList />
        </main>
    );
}