import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardL}>
                <h1 className={styles.title}> УРИА ҮГ БИЧИХ.</h1>
                <h1 className={styles.linkTitle}>
                    <Link href="/contact" passHref>
                        <>
                        <span className={styles.linkText}>БИД ЮУ ХИЙДЭГ ВЭ</span>
                        <Image src="/img/link.png" width="40px" height="40px" alt="" />
                        </>
                    </Link>
                </h1>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    ХАЯГ БАЙРШИЛ <br/> БЗД
                </div>
                <div className={styles.cardItem}>
                    info@monros.mn <br/> 11 400060
                </div>
            </div>
            <div className={styles.cardS}>
            <div className={styles.cardItem}>
                NEMELT: 
                <br/> _FB _IN _BE _TW
                </div>
            <div className={styles.cardItem}>
                © MNS,
                <br />
                ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    )
}

export default Footer
