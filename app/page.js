import Link from "next/link";


export default function Home() {

 const linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main className="h-screen">
      <h1 className="text-xl">My Cool React Site</h1>
      <p>Hello World!</p>
      <h2>Application Links</h2>
      <ul>
        <li><Link className={linkStyles} href="./week2/">Week 2</Link></li>
        <li><Link className={linkStyles} href="./week3/">Week3</Link></li>
        <li><Link className={linkStyles} href="./week4/functions">Week 4 - Functions</Link></li>
        <li><Link className={linkStyles} href="./week4/counter">Week 4 - Counter</Link></li>
        <li><Link className={linkStyles} href="./week4/managed_form">Week 4 - Dog Form</Link></li>
        <li><Link className={linkStyles} href="./week5/arrays">Week 5 - Array Mutation</Link></li>
        <li><Link className={linkStyles} href="./week5/contact">Week 5 - Contacts Filter/Sort</Link></li>
        <li><Link className={linkStyles} href="./week6/">Week 6 - Managing State</Link></li>
        <li><Link className={linkStyles} href="./week7/">Week 7 - Fetching Data</Link></li>
      </ul>
    </main>
  );
}
