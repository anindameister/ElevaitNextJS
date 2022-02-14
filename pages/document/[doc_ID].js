/**
 * http://localhost:3001/aninda
 * @returns this page
 */
/**
 * react hook is used to create a state
 * state is a variable that can be used in react component
 * react component can have multiple states
 * react component is a function that returns some html
 * react component function is a part of react library
 * react library is a collection of react components which is a function that returns some html
 * react library is a collection of react components and react hooks
 * react hook is used to create a state
 * state is a variable that can be used in react component
 * state is a variable inside a react component
 * react component is a function and this function returns some html with the help of variables called state.
 * now, the state which is a variable inside a react component is created using react hook
 * react hook is a function that returns a state and this state is a variable inside a react component which is a function that returns some html
 * @returns 
 */

/**
 * useRouter is a function that returns a history object
 * history object is a collection of functions which are used to navigate the application
 * navigating an application is a process of changing the url
 * @returns 
 */
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import styles from '../../styles/Home.module.css'

/**
 * useRouter is a hook
 * hook is a function that returns a state
 * state is a variable that can be used in react component.
 * React component is a function that returns some html
 * React component is a function which contains one or many react hooks
 * useRouter is imported from next/router
 * next/router is a router within next.js
 * router is a function that returns a history object
 * history object is a collection of functions which are used to navigate the application
 * navigating an application is a process of changing the url
 * next.js is a library which is used to build a server side application
 * the purpose of the server side application created by next.js is to serve the application
 * the server side application serves the application. 
 * Serving an application is a process of sending the application to the client
 * the client is the browser
 * the browser is the application that is used to view the application
 * the application that is used to view the application is called the client side application
 * 
 * @returns 
 */
function DocumentPage() {
    /**
     * the useRouter hook is used to create a state which is a variable that can be used in react component
     * the useRouter hook will return a state which is a variable that can be used in react component
     */
    const router = useRouter()
    console.log(router.query.doc_ID)
    /**
     * console.log(router.query.doc_ID) shows two things
     * 1. undefined because the query is not defined initially
     * 2. aninda because the query is defined after the page is loaded
     * why do we get two things?
     * because the query is not defined initially
     * initially means here that firstly the static html page is loaded
     * the static html page is the page which is created by the server side application
     * after loading the static html page the query is defined
     * and hence we get the result as aninda which is being passed to the url as a query
     * this query is dynamic 
     * if we would have passed arunava instead of aninda to the url then the result would have been arunava
     * let me check that to verify that and yes, it does display the result as arunava
     * the reason we use router.query.doc_ID is to send request to the server side application
     * the server side application will receive the request and will send the response
     * the response could be the html page or the json data which would contain the document with doc_ID
     */

    return <Fragment>
        <h1 className={styles.centering}>Document 1</h1>


        <div className={styles.sizing}>
            <div className={styles.centering}><h6>A very nice title</h6></div>
            <div><strong>Author:</strong>   Mr. X</div>
            <div><strong>Date:</strong> 13.09.19</div>
            <div><strong>Pages:</strong></div>
            <div>


                <button className={styles.gap}>1</button>
                <button className={styles.gap}>2</button>
                <button className={styles.gap}>+</button>
            </div>

        </div>



    </Fragment>
}
export default DocumentPage