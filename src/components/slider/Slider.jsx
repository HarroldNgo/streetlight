import "./slider.css"
import React from "react";
import SliderR from "react-slick";

export default function Slider({ posts }) {

    const PF = "http://localhost:5000/images/"
    function loop(n) {
        return ([...Array(n)].map((e, i) => posts.map((post, j) => (
            (post.comingsoon ?
                <div className="post">
                    <div className="middle">
                        <h4 className="hovertitle">{post.title}</h4>
                        <p className="hovertext">{(post.body).split(' ').slice(0, 20).join(" ")}</p>
                    </div>
                    <img key={i} src={PF + post.photo} alt="" className="slider-image" />
                </div>
                : <div className="post">
                    <div className="middle">
                        <h4 className="hovertitle">{post.title}</h4>
                        <p className="hovertext">{(post.body).split(' ').slice(0, 20).join(" ")}</p>
                    </div>
                    <a className="slider-link" key={j} href={`/post/${post._id}`}>
                        <img key={i} src={PF + post.photo} alt="" className="slider-image" />

                    </a>
                </div>)

        ))))
    }
    var settings = {
        initialSlide: Math.floor(Math.random() * 10),
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
    }
    return (
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

    )
}
