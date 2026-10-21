import Image from "next/image";
import Link from "next/link";

export default function news() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans bg-white">
      
      新聞網站
      
    <button>
        <Link  href="/mainsite">真善美之家</Link>
      </button>
    </div>
  );
}
