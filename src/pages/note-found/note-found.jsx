import Empty from "../../components/empty/empty"
import image from "../../assets/images/not-found/notFound.png"
import { memo } from "react"
const NoteFound = () => {
    return (
        <>
            <section className="">
                <div className="container">
                    <Empty image={image} subtitle={"There's nothing here!"} text="Sorry, the page you were looking for in this blog does not exist." />
                </div>
            </section>
        </>
    )
}

export default memo(NoteFound)