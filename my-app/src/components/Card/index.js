import styles from "./styles.module.css"


function Card() {

    return (

         <div className={styles.container}>
           <div className={styles.cardContainer}>
               <img src={props.image} alt= {props.alt} />
               <h3>{props.title}</h3>
               <p> {props.description}</p>
           </div>
         </div>
    );
}

export default Card;



