import Link from "next/link";

export default function MyFirstComponent() {

    let a = 3;
    let b = 4;

  return (
    <div>
      <h2>My First Component!</h2>
      <Link href="https://www.sait.ca">SAIT Website</Link>
      <p>{a} + {b} = {a+b}</p>
    </div>
  );
}
