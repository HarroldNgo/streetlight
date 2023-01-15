import './about.css'
import Header from "../../components/header/Header"

export default function About() {
    return (
        <div className='about'>
            <Header />
            <div className="about-page-wrapper">
                <div className="aboutus">
                    <h1 className='about-title'><span className='welcome'>Welcome to </span><span className='streetlight'>Streetlight</span></h1>
                    <p className='about-desc'>"Yeah, I'm a streetlight
                        <br/>&nbsp;&nbsp;Chilling in the heat
                        <br/>&nbsp;&nbsp;I illuminate the stories of the people in the street
                        <br/>&nbsp;&nbsp;Some have happy endings
                        <br/>&nbsp;&nbsp;Some are bittersweet
                        <br/>&nbsp;&nbsp;But I know them all
                        <br/>&nbsp;&nbsp;And that's what makes my life complete."</p>
                    <p className='about-credit'>- Usnavi, In the Heights writ. Lin-Manuel Miranda</p>
                </div>
                <div className='about-image'>
                <img src={require("../../components/img/about.png")} alt="about" />
                </div>
            </div>
        </div>
    )
}