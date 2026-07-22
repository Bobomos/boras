import Link from "next/link";

export default function NotFound() { return <main className="not-found"><p className="eyebrow">404</p><h1>Page not found.</h1><p>The page may have moved or is not available in this language.</p><Link className="pill pill--dark" href="/en">Return home</Link></main>; }
