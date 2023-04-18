import React, { useState } from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const slides = [
    {
      imageUrl:
        "https://rare-gallery.com/uploads/posts/850200-Interior-Design-Bathroom.jpg",
      title: "Go To Marbles",
      btnText: "view marbles",
      navigateTo: "/products",
    },
    {
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/61a4eb7958cbd07dda6c9261/79c5300a-2f6b-420c-bc9a-bf03ee99ba36/white-bath-with-large-format-wall-tiles.jpg",
      title: "Go To opinion",
      btnText: "view Opinions",
      navigateTo: "/opinion",
    },
    {
      imageUrl:
        "https://resources.gaggenau.com/wp-content/uploads/gg-kitchen-contest-update.jpg",
      title: "Go To about",
      btnText: "view about",
      navigateTo: "/about",
    },
  ];
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index == slides.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previousSlide = () => {
    if (index == 0) {
      setIndex(slides.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="home">
      <div className="slide-container">
        <i onClick={previousSlide} class="fa-solid fa-caret-left"></i>
        <i onClick={nextSlide} class="fa-solid fa-caret-right"></i>
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
    </div>
  );
};

export default Home;
