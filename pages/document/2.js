import { useRouter } from 'next/router'
import { Fragment } from 'react'



function Page() {

    const router = useRouter()
    console.log(router.query.doc_ID)


    return <Fragment>
        <div>
            <h1>Page 2</h1>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis explicabo quod repudiandae laboriosam nulla minus in nobis sit. Hic quia et dolorum labore sed error alias dicta voluptatibus enim expedita!</p>
            <p>In facere incidunt, ratione consectetur asperiores sequi maxime quaerat similique distinctio cupiditate sint commodi facilis voluptas modi saepe quos molestiae fuga sapiente! Facilis molestiae laborum tempora impedit corporis natus facere?</p>
            <p>Vitae natus delectus cupiditate repellat debitis ratione molestiae necessitatibus iusto, autem architecto provident quibusdam nesciunt iste eaque quas minus a qui sed accusamus perferendis nobis dignissimos similique? Laborum, doloribus aliquam.</p>
            <p>Similique magnam tenetur veniam optio rerum explicabo, suscipit facilis velit! Nostrum dolores repellat nemo sed reprehenderit nam sunt qui ipsa minima libero numquam tempore incidunt eaque corrupti, quisquam officia! Quidem.</p>
            <p>Unde, libero doloribus? Vitae quam et aspernatur sint cumque mollitia corporis ducimus maiores excepturi! At impedit nemo tempore odio quos culpa unde, iste debitis asperiores a aspernatur blanditiis necessitatibus vel.</p>
            <p>Eaque vero repellat doloremque blanditiis odit libero labore quis autem, quas at adipisci praesentium quidem ipsum enim natus, excepturi, illo in itaque quos cupiditate accusamus? Laborum veniam excepturi quod labore!</p>
            <p>Eius deleniti doloribus reprehenderit. Omnis, suscipit! Pariatur voluptatum officia error natus. Itaque, officia sit excepturi, ad ea commodi repellat id deleniti est possimus esse culpa, tempore aut! Eum, molestiae earum!</p>



        </div>




    </Fragment>
}
export default Page