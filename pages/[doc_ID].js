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
import{useRouter} from 'next/router'
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
function DocumentPage(){
    /**
     * the useRouter hook is used to create a state which is a variable that can be used in react component
     * the useRouter hook will return a state which is a variable that can be used in react component
     */
    const router=useRouter()
    console.log(router.query.doc_ID) //this is the id of the document
    /**
     * router.query.doc_ID is the id of the document
     
     */

    return <h1>Document 1</h1>
}
export default DocumentPage