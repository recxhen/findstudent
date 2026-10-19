import Link from "next/link";

export default function mainsite() {
  return (
    <>
      <h1>我們的網站</h1>
      <Link href="/news">新聞網站</Link>
      <Link href="/mainsite">真善美之家</Link>
    </>
  );
}
