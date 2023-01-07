import './about.css'
import Header from "../../components/header/Header"

export default function About() {
    return (
        <div className='about'>
            <Header />
            <div className="about-page-wrapper">
                <div className="aboutus">
                    <h1 className='about-title'>About Us</h1>
                    <p className='about-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit, metus id facilisis ultricies, velit diam auctor est, sit amet interdum magna arcu sit amet sem. Ut varius urna vitae lorem convallis feugiat. Vestibulum consectetur nisi id libero tincidunt egestas. Nulla sit amet metus nisl. Morbi eu erat rutrum arcu pulvinar vehicula blandit eget lacus. Vivamus interdum orci ligula, nec mollis mauris scelerisque vitae. Mauris risus nisi, rhoncus eget dolor eget, interdum placerat lectus. Nullam iaculis metus nisi, vel convallis augue fringilla semper. Maecenas aliquam dictum ligula eu imperdiet. Ut non nisl vel elit gravida finibus in vitae ante. Etiam cursus ipsum quis venenatis ultrices. Curabitur porta metus rutrum diam finibus consectetur.</p>
                </div>
            </div>
        </div>
    )
}
