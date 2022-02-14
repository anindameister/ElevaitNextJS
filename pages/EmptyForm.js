import { Fragment } from "react";
import styles from '../styles/Home.module.css'

function EmptyForm() {
    return <Fragment>
        <div className={styles.sizingTable}>
            <table>
                <tr>
                    <td></td>
                    <td><button className={styles.positioningCrossEmptyForm}>X</button></td>


                </tr>
                <tr>
                    <td>text:</td>
                    <td><textarea className={styles.textarea}></textarea></td>


                </tr>
                <tr>
                    <td> </td>
                    <td><button className={styles.positioningButton}>Add Page</button></td>

                </tr>
            </table>
        </div>
    </Fragment>
}
export default EmptyForm;