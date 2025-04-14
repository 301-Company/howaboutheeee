import Link from "next/link";

const links = [
  { name: "어워드", href: "/award" },
  { name: "로그인", href: "/log-in" },
  { name: "회원가입", href: "/join-us" },
];

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
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
