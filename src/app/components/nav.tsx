import Image from "next/image";
import Link from "next/link";
import styles from "../styles/nav.module.css";
import searchIcon from "../../../public/icon_search.svg";

const links = [
  { name: "어워드", href: "/award" },
  { name: "로그인", href: "/log-in" },
  { name: "회원가입", href: "/join-us" },
];

export default function Nav() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">로고</Link>
      </h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <button>
              <Image src={searchIcon} alt="검색" width={20} height={20} />
            </button>
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
