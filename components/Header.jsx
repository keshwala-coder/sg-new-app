import Link from 'next/link'
import styles from './styles.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <Link className={styles.logo} href="http://www.immigration.govt.nz/">
        <span className="hidden">Immigration New Zealand</span>
      </Link>
      <ul>
        <li>
          <Link href="https://www.immigration.govt.nz/contact" >
          Contact us
          </Link>
        </li>
      </ul>
    </div>
  )
}