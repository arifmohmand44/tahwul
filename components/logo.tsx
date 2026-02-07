import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.svg" // place inside public folder
        alt="TAHWUL Logo"
        className="w-40"
        width={40}
        height={40}
        priority
      />
    </Link>
  );
}
