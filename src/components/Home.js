import React, { useState } from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import FAQs from "./FAQ";
import Top5 from "./Top5";
import {getTop5Marbles} from "../api"
import { useEffect } from "react";
const Home = () => {

  const [topFiveMarbles, setTopFiveMarbles]= useState([])

  const slides = [
    {
      imageUrl:
        "https://rare-gallery.com/uploads/posts/850200-Interior-Design-Bathroom.jpg",
      title: "Explore Our Stunning Marble Collection",
      btnText: "Browse Our Marble Collection",
      navigateTo: "/marbles",
    },
    {
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/61a4eb7958cbd07dda6c9261/79c5300a-2f6b-420c-bc9a-bf03ee99ba36/white-bath-with-large-format-wall-tiles.jpg",
      title: "Custom Marble Selection",
      btnText: "View Marble Selections",
      navigateTo: "/opinion",
    },
    {
      imageUrl:
        "https://resources.gaggenau.com/wp-content/uploads/gg-kitchen-contest-update.jpg",
      title: "Meet the Team Behind the Marble Magic",
      btnText: "Discover Us",
      navigateTo: "/contact",
    },
    {
      imageUrl:
        "https://d2zpvmybpipqvy.cloudfront.net/media/products/tiles/images/series/amani%20marble/ambience/high-res/generated_amani1.jpg.798x620_q85_crop_upscale%402x.jpg",
      title: "Expert Artisans of Premium Natural Stones",
      btnText: "Get to Know Us Better",
      navigateTo: "/about",
    },
  ];
  const [index, setIndex] = useState(0);
  

  const nextSlide = () => {
    if (index === slides.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previousSlide = () => {
    if (index === 0) {
      setIndex(slides.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const cardsData = [
    {
      title: "Marble vs. Wooden Flooring: Which One Is Good for You?",
      text: "The most important aspect of planning and designing your dream home is the flooring. The flooring of your sumptuous residence can define the aesthetic and character of your choice of design while also adding functionality to the space. You must select a flooring material that goes well with your personality, home aesthetic, functionality of the space, and is easy to maintain. While marble flooring is often the first pick of aesthete homeowners and skilful home designers, people also choose wooden flooring to adorn their homes with. ",
      image:
        "https://i.pinimg.com/originals/81/1c/63/811c63feeff9992b5aa47c07ef11f0f1.jpg",
    },
    {
      title: "Marble Floor Options to Make Your Bedroom a Peaceful Heaven",
      text: "While designing and planning the bedroom space of your new residence or making an attempt to remodel the existing one into a space that screams heaven and peace, it is obvious for you to feel inclined towards investing in the finest interior design elements. Choosing contemporary interior pieces should reflect not only your home’s aesthetics but also your personality. When thinking about picking the right design elements, selecting bedroom marble flooring can never go wrong!",
      image:
        "https://image.architonic.com/pfm3-3/20105401/marblelous-a697-v19-kiruna-merano-pulidos-cmyk-fam-g-arcit18.jpg",
    },
    {
      title: "Should you use marble in exterior wall cladding?",
      text: "Marble is a timeless beauty admired by millions of people for centuries. Its remarkable durability, unrivalled aesthetic appeal, and variety of applications in homes, workspaces, and the finest architectural facades make it the stone of choice for about every renowned architect and interior designer. Most coveted by masterly home designers and aesthete homeowners, imported marble is often an element of first preference in the designing and creation of peculiar yet extraordinarily elegant spaces.",
      image:
        "https://cdn.shopify.com/s/files/1/0026/8192/9772/products/multipanel-linda-barker-calacatta-marble-inc-hydrolock-shower-wall-198.png?v=1664446115",
    },
    {
      title: "Natural Stones for a Minimalist Approach",
      text: "The rage about minimalistic interior design has left no soul unaware of its supremacy. Masterly architects and interior designers frequently prefer a minimalist approach to designing extraordinary residences for their aesthete clients. With a myriad of informative articles and social media posts about interior design trends appearing on our screens almost frequently, you are bound to feel overwhelmed about how to incorporate a minimalist approach into your home.",
      image:
        "https://static.wixstatic.com/media/020191_97833e8a58954326a99cf4736eda4ec3~mv2.jpg/v1/fill/w_3000,h_3000,al_c,q_85/020191_97833e8a58954326a99cf4736eda4ec3~mv2.jpg",
    },
  ];

  useEffect(() => {
    const getBestSelling = async () => {
      let bestSellingMarbles = await getTop5Marbles()
      setTopFiveMarbles(bestSellingMarbles)
      
    } 
    getBestSelling()
  } , [])

  return (
    <div className="home">
      <div className="slide-container">
        <i onClick={previousSlide} className="fa-solid fa-angle-left"></i>
        <i onClick={nextSlide} className="fa-solid fa-angle-right"></i>
        <img src={slides[index].imageUrl} alt="Image 1" />
        <div className="slide-data-container">
          <div className="slide-title-container">
            <h1 className="slide-title">{slides[index].title}</h1>
          </div>
          <Link to={slides[index].navigateTo}>
            <button className="navigate-btn">{slides[index].btnText}</button>
          </Link>
        </div>
      </div>
      <div className="blogs-container">
        <div className="blog-title">Our Recent Blogs</div>
        <div className="blog-sub-title">
          Learn more about the latest happenings in the world of natural stone
          creations
        </div>
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <div key={index} className="Blogs-card">
              <img src={card.image} alt={card.title} />
              <div className="card-content">
                <h2>{card.title}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="faqs">
        <FAQs />
      </div>
      <Top5 marbles={topFiveMarbles}/>
    </div>
  );
};

export default Home;
