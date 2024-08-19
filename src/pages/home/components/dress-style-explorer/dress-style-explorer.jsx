import { memo } from "react"
import "./dress-style-explorer.scss"
const DressStyleExplorer = () => {
    return (
        <>
            <section className="container">
                <div className="dress-style-explorer">
                    <div className="dress-style-explorer__wrapper">
                        <h2 className="dress-style-explorer__title">BROWSE BY dress STYLE</h2>
                        <div className="dress-style-explorer__cards">
                            <div className="dress-style-explorer__card">
                                <h3 className="dress-style-explorer__card-title">Casual</h3>
                            </div>
                            <div className="dress-style-explorer__card">
                                <h3 className="dress-style-explorer__card-title">Formal</h3>
                            </div>
                            <div className="dress-style-explorer__card">
                                <h3 className="dress-style-explorer__card-title">Party</h3>
                            </div>
                            <div className="dress-style-explorer__card">
                                <h3 className="dress-style-explorer__card-title">Gym</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(DressStyleExplorer)