import ReturnButton from "@/components/ReturnButton"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

function Blog() {
    return(
        <>
            <Navbar />
            <div className="title">
                <h1>Blog</h1>
            </div>

            <div className="recentposts">
                <h2>Latest Post</h2>
            </div>

            <div>
                <h2>Older posts</h2>
            </div>
            
            <Footer />
        </>
    )
}

export default Blog