import Header from './Header';
import Table from './Table';
import Footer from './Footer';

function Layout( {children} ) {
    return(
        <div>
            <Header />
            <div className="container">
            <Table />
            <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;