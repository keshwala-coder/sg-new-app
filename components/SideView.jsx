import styles from "./styles.module.css";
import Link from "next/link";
export default function SideView() {
    return(
        <div className={styles.mainNav}>
        <ul>
          <li>
            <Link href="http://www.immigration.govt.nz/employers/resources/visaview/">VisaView</Link>

            <ul>
              <li></li>
              <li>
                <Link href="https://visaview.immigration.govt.nz/organization/selectOrgTypeToRegister.aspx">Register Organisation</Link>
              </li>
              <li>
                <Link href="https://visaview.immigration.govt.nz/workentitlement/visaVerficationQuery.aspx">Verify Visa Record</Link>
              </li>
              <li>
                <Link href="https://visaview.immigration.govt.nz/vvs/viewMyAccount.aspx">My Visa Verification Service Account</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
}