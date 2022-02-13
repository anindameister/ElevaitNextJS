import styles from '../styles/Home.module.css'
import{Fragment} from 'react'

function HomePage(){
    return (<Fragment><div>
        <h1 className={styles.centering}>Number of documents:</h1>
        <div className={styles.foo}>
            <button className={styles.arrowRight}></button>
        </div>


    </div><div className={styles.bottomRight}>
            <button className={styles.circular}>+</button>
        </div></Fragment>)
}
export default HomePage