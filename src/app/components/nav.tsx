import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <h1>
        <Link href="/">로고</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <div>검색</div>
          </li>
          <li>
            <Link href="/award">어워드</Link>
          </li>
          <li>
            <Link href="log-in">로그인</Link>
          </li>
          <li>
            <Link href="join-us">회원가입</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
