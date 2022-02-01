import styles from "./styles.module.css";
import imagem1 from "../../images/logo.jpg"; 
import imagem2 from "../../images/menu.jpg";



function Nav() {

    return (
        <div>
            <div className={styles.imagens}>
                <img src={imagem1} className={styles.AppLogo} alt="logo"  />
                <img src={imagem2} className={styles.AppMenu} alt="menu" />
            <div/> 

            <h3 className={styles.TextH}> Say hello to <br/> ReactJS </h3>
            <p className={styles.TextP}>You will learn how to use <br/> the most popular frontend library, <br/> and become a super Ninja developer. </p>
            </div>
        </div>
    );
}

export default Nav;