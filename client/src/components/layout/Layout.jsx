import './Layout.css'
import Nav from '../nav/Nav'



function Layout(props) {
  return (
    <div className='layout'>
        <Nav />
        <div className="layout-children">
            {props.children}
        </div>
    </div>
  );
}

export default Layout;
