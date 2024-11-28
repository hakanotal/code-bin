import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
      <Link href="/" className="flex items-center gap-2">
        <Image
          className="dark:invert"
          src="/code-bin/favicon.png"
          alt="CodeBin"
          width={60}
          height={60}
          priority
        />
        <h1 className="text-slate-100 font-bold text-3xl">CodeBin</h1>
      </Link>
      <div className="flex items-center gap-6">
        <h2 className="text-slate-300 font-semibold text-lg">Share your code snippets easily!</h2>
      </div>
    </nav>
  );
}