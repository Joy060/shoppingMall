import Footer from "../component/Footer";
import Header from "../component/Header";

const DefaultLayout = ({children}) =>{

    return<div>
        <Header />
            {children}
        <Footer />
    </div>
}

export default DefaultLayout;