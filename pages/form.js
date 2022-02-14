import { Fragment } from "react";
import styles from '../styles/Home.module.css'

function Form() {
    return <Fragment>
        <div className={styles.sizingTable}>
            <table>
                <tr>
                    <td></td>
                    <td><button className={styles.positioningCross}>X</button></td>


                </tr>


                <tr>
                    <td>title:</td>
                    <td><input type="text" id="title" name="title" required className={styles.positioningInputBox}></input></td>

                </tr>
                <tr>
                    <td>author:</td>
                    <td><input type="text" id="author" name="author" required className={styles.positioningInputBox}></input></td>

                </tr>
                <tr>
                    <td>date:</td>
                    <td><input type="date" id="date" name="date" required></input></td>

                </tr>
                <tr>
                    <td> </td>
                    <td><button className={styles.positioningButton}>Create</button></td>

                </tr>

            </table>
        </div>
    </Fragment>
}
export default Form;