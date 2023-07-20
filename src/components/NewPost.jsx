import Header from './Header'
import Footer from './Footer'
import NewPostForm from './NewPostForm'

const NewPost = () => {
    return(
        <>
            <Header />
            <main>
                <NewPostForm />
            </main>
            <Footer />
        </>
    )
}

export default NewPost
