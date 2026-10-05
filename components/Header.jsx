import Link from 'next/link'
import styles from './styles.module.css'
import GovernmentBar from './GovernmentBar'
import MainHeader from './MainHeader'
import ScamAlert from './ScamAlert'

export default function Header() {
  return (
   <header className="w-full">
      <GovernmentBar />
      <MainHeader />
      <ScamAlert />
    </header>
  )
}