import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen">
      <h2>Not Found</h2>
      <p>Could not find the requested resource</p>
      <p>
        View all <Link href="/">Home</Link>
      </p>
    </div>
  );
}
