import HeaderBlock from "./components/HeaderBlock";
import Header from "./components/Header"
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import bg2 from "./assets/bg2.jpg";
import bg3 from "./assets/bg3.jpg";

const App = () => {
    return (
        <>
            <Header
                title="This is title"
                descr="This is Description!"
            />
            <Layout
                urlBg={bg2}
                title="This is title 1"
                descr="This is Description 1!"
                id="1"
            />
            <Layout colorBg={'red'}
                    title="This is title 2"
                    descr="This is Description 2!"
                    id="2"/>
            <Layout
                urlBg={bg3}
                title="This is title 3"
                descr="This is Description 3!"
                id="3"/>
            <Footer />
        </>
    );
}

export default App;
