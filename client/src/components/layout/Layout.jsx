import './Layout.css'
import Nav from '../nav/Nav'
// import Footer from '../footer/Footer'



function Layout(props) {
  return (
    <div className='layout'>
        <Nav />
        <div className="layout-children">
            {props.children}
        </div>
        {/* <Footer /> */}
    </div>
  );
}

export default Layout;
