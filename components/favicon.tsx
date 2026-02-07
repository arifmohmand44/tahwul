import Link from "next/link";
import Image from "next/image";

export default function Favicon() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/favicon.png" // place inside public folder
        alt="TAHWUL Logo"
        width={40}
        height={40}
        priority
      />
    </Link>
  );
}
