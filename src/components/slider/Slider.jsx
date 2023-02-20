import "./slider.css"
import React from "react";
import SliderR from "react-slick";

export default function Slider({ posts }) {

    const PF = "https://res.cloudinary.com/dmluqp41s/image/upload/"
    function loop(n) {
        return ([...Array(n)].map((e, i) => posts.map((post, j) => (
            (post.comingsoon ?
                <div className="spost">
                    <div className="hover">
                        <h4 className="hovertitle">{post.title}</h4>
                        <p className="hovertext">
                            {(post.desc).split(/\r?\n/).slice(0, post.desc.split(/\r?\n/).length / 2).join("\n")}
                            <br />
                            <span style={{ fontSize: 25 }}>{(post.desc).split(/\r?\n/).slice(post.desc.split(/\r?\n/).length / 2, post.desc.split(/\r?\n/).length).join("\n")}</span>
                        </p>
                    </div>
                    <img key={i} src={PF + post.photo + ".png"} alt="" className="slider-image grey" />
                </div>
                : <div className="spost">
                    <div className="hover">
                        <h4 className="hovertitle">{post.title}</h4>
                        <p className="hovertext">
                            {(post.desc).split(/\r?\n/).slice(0, post.desc.split(/\r?\n/).length / 2).join("\n")}
                            <br />
                            <span style={{ fontSize: 25 }}>{(post.desc).split(/\r?\n/).slice(post.desc.split(/\r?\n/).length / 2, post.desc.split(/\r?\n/).length).join("\n")}</span>
                        </p>
                    </div>
                    <a className="slider-link" key={j} href={`/post/${post._id}`}>
                        <img key={i} src={PF + post.photo + ".png"} alt="" className="slider-image" />
                    </a>
                </div>)

        ))))
    }

    var settings = {
        initialSlide: Math.floor(Math.random() * 10),
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
    }
    return (
        <div className="post-desktop-mobile-wrapper">
            <div className="post-wrapper">
                {posts.length <= 1 ?
                    <SliderR {...settings}>
                        {loop(4)}
                    </SliderR>
                    : posts.length <= 3 ?
                        <SliderR {...settings}>
                            {loop(2)}
                        </SliderR>
                        : <SliderR {...settings}>
                            {loop(1)}
                        </SliderR>}
            </div>
        </div>


    )
}
