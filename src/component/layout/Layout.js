import Header from './Header';
import Table from './Table';

function Layout( {children} ) {
    return(
        <div>
            <Header />
            <div className="container">
            <Table />
            <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default Layout;