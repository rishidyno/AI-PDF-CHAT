import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js!</h1>
      <p>
        Get started by editing{" "}
        <code>pages/index.js</code>
      </p>
      <Image src="/favicon.ico" alt="logo" width={100} height={100} />
    </div>
  );
}
  