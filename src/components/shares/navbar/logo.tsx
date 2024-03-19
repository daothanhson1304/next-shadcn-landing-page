import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Logo"
        width={50}
        height={27}
        priority
      />
      Bird
    </div>
  );
}
