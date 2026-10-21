import Link from "next/link";


export default function mainsite() {
  return (
    <>
      <h1 style={{ color: "purple", fontSize: "1.5rem" }}>我們的網站</h1>
      <button>
        <Link  href="/news">新聞網站</Link>
      </button>
      <button>
        <Link  href="/mainsite">真善美之家</Link>
      </button>
    </>
  );
}
