import Link from 'next/link'
import styles from './styles.module.css'

export default function Breadcrumb({ title }) {
  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.breadcrumbsMain}>
        <ul>
          <li> <Link href="https://visaviews-immigration-gov-nz.vercel.app/">Home</Link></li>
          <li> <Link href="https://visaviews-immigration-gov-nz.vercel.app/visaview-employers/">VisaView</Link></li>
          <li>{title}</li>
        </ul>
      </div>
    </div>
  )
}