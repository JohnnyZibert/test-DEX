import { Header } from './header/Header'
import styles from './HomePage.module.scss'
import { SideBarHome } from './sidebar/SideBarHome'

export const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBarHome />
        {/*<MainContent />*/}
      </div>
    </>
  )
}
