import styles from '../styles/Home.module.css'
import{Fragment} from 'react'
/**
 * The fragment is used to wrap the component in a single element.
 * Now, what is a component? A component is a function that returns some html.
 * In our case, the HomePage function returns some html.
 * The HomePage function is a component in our case
 * The fragment is used to wrap the component, in our case, the HomePage function, in a single element.
 * If we would have not used the fragment, the HomePage function would have not been wrapped in a single element.
 * The reason it is important to wrap the component in a single element is because client side rendering is done using the virtual DOM.
 * client side rendering meaning that the browser renders the application on the screen.
 * rendering means to display the application on the screen.
 * The virtual DOM is a representation of the application that is used by the browser to render the application on the screen.
 * A view of the virtual DOM consists of a tree of nodes.
 * The tree of nodes is a representation of the application that is used by the browser to render the application on the screen.
 * The nodes of this tree are as follows:
 * 1. The root node is the document node. 
 * 2. The document node contains the head node and the body node.
 * 3. The head node contains the title node.
 * 4. The body node contains the div node.
 * 5. The div node contains the h1 node.
 * 6. The h1 node contains the text node.
 * 7. The text node contains the text "Number of documents:".
 * When you return multiple elements from React elements from the render method, the assumtion that the tree will have one root node for the Component will not longer hold, hence making it difficult to process reconcilation algorithm.
 * 
    * @returns 
 */

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