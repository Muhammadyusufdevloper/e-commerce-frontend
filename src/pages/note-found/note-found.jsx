import Empty from "../../components/empty/empty"
import image from "../../assets/images/not-found/notFound.png"
import { memo } from "react"
const NoteFound = () => {
    return (
        <>
            <section className="">
                <div className="container">
                    <Empty image={image} />
                </div>
            </section>
        </>
    )
}

export default memo(NoteFound)