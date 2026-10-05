import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li >
                    <Link href="" className={`${styles.pdlft5}`}>
                        <Image src="/images/logo-nzgovt.png" width={108} height={22} alt="https://www.govt.nz/ " />
                    </Link>
                </li>
                <li><Link className={`${styles.pdlft5} ${styles.pdrt5}`} href="http://www.immigration.govt.nz/migrant/general/aboutnzis/" accessKey="9">About us</Link> |</li>
            <li><Link className={`${styles.pdlft5} ${styles.pdrt5}`} href="https://www.immigration.govt.nz/about-us/site-information">Legal</Link> |</li>
			<li><Link className={`${styles.pdlft5} ${styles.pdrt5}`} href="http://www.immigration.govt.nz/migrant/general/generalinformation/contactus/complaintsprocess.htm">Complaints</Link> |</li>
            <li ><Link className={`${styles.pdlft5} ${styles.pdrt5}`} href="https://www.immigration.govt.nz/formshelp/terms-of-use-visaview">Terms &amp; Conditions </Link></li>
            </ul>

        </div>
    )
}