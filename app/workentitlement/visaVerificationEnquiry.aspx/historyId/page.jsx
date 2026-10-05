import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import styles from '../../../../components/styles.module.css'
import Footer from '@/components/Footer';
import InnerContainerDetails from "@/components/InnerContainerDetails";

export const metadata = {
  title: "Visa Verification Result",
};

export default function Page() {

  return (
    <>
      <div className={styles.mainHeader}>
        <div className={styles.pageWrapper}>
          <Header />
        </div>
        <Breadcrumb title="Visa Verification Result" />
      </div>
      <div className={styles.mainInnerContainer}>
      <InnerContainerDetails />
      </div>
      <Footer />
    </>
  );
}
