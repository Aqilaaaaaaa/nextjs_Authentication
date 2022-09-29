import Link from 'next/link';
import style from '../styles/Navbar.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session, status } = useSession();
  return (
    <nav className={style.navbar}>
      <Link href="/">
        <a className={style.title}>
          Next<span>Auth</span>
        </a>
      </Link>

      <div className={style.navbar_links}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {status === 'authenticated' ? (
            <>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <a onClick={() => signOut()}>Sign Out</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a onClick={() => signIn()}>Sign In</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}