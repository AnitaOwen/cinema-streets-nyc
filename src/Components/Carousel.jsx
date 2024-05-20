import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState("0%");
  const [forward, setForward] = useState(true);

  // Array to hold image URLs and fun facts
  const images = [
    {
      url: "https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1716205269/cinema%20streets%20NYC/NYC-bs-1_ceyl6q.jpg",
      fact: "Filming in NYC often involves complex logistics, including securing parking permits, as space is limited and parking regulations are strictly enforced.",
    },
    {
      url: "https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1716204095/cinema%20streets%20NYC/image9_gsezgt.jpg",
      fact: "Law & Order: SVU holds the record for the longest-running primetime live-action series in television history.",
    },
    {
      url: "https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1716200059/cinema%20streets%20NYC/image4_ybsm4s.webp",
      fact: "Despite the high costs, the crowds, and the congestion, New York City continues to be one of the world’s top production destinations.",
    },
    {
      url: "https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1716201495/cinema%20streets%20NYC/image5_ciaand.jpg",
      fact: "In Home Alone 2: Lost in New York, the scene in front of Radio City Music Hall was actually filmed at Rockefeller Center due to logistical reasons, but it remains a memorable moment in the movie.",
    },
    {
      url: "https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1716201580/cinema%20streets%20NYC/image6_yx6m9e.jpg",
      fact: "The iconic Joker movie scene on the steps was filmed at the 'Joker Stairs,' located in the Bronx borough of New York City. These stairs are officially known as the 'Step Street' staircase, connecting Shakespeare and Anderson Avenues in the Highbridge neighborhood.",
    },
    {
      url: "https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1716205923/cinema%20streets%20NYC/WashingtonSquarePark_pj2qcu.jpg",
      fact: "Washington Square Park in New York City has been a popular filming location, appearing in numerous movies and TV shows, including 'When Harry Met Sally,' 'I Am Legend,' and 'August Rush.'",
    },
    {
      url: "https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1716207437/cinema%20streets%20NYC/tcmschanel_amnpov.avif",
      fact: "A notable aspect of filming the Bleu de Chanel commercial was the collaboration with renowned director Martin Scorsese, infusing the advertisement with his signature cinematic style and storytelling prowess.",
    },
    {
      url: "https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1716205644/cinema%20streets%20NYC/friends_qu2y3q.jpg",
      fact: "Monk's Restaurant from Seinfeld, located in New York City, was actually inspired by Tom's Restaurant, a real diner on the Upper West Side of Manhattan.",
    },
    {
      url: "https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1716205832/cinema%20streets%20NYC/MoMa_vfuqpt.jpg",
      fact: `The Metropolitan Museum of Art's grandeur has attracted filmmakers, with iconic scenes from movies such as "Gossip Girl" and "When Harry Met Sally" being shot within its hallowed halls, adding a touch of cinematic splendor to its already rich cultural tapestry`,
    },
    {
      url: "https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1716198414/cinema%20streets%20NYC/image2_gxirk1.webp",
      fact: "Filming in Times Square requires meticulous planning due to the bustling crowds and vibrant lights.",
    },
    // Add more objects for other images...
  ];

  useEffect(() => {
    // Function to shift the image
    const shiftImage = () => {
      setMargin(`-${count * 10}%`);
    };

    // Sliding functionality
    const interval = setInterval(() => {
      if (forward) {
        if (count === images.length - 1) {
          setForward(false);
        } else {
          setCount(count + 1);
        }
      } else {
        if (count === 0) {
          setForward(true);
        } else {
          setCount(count - 1);
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [count, forward, images.length]);

  return (
    <div className>
      <div className="carousel-container">
        <div className="images-container">
          {images.map((image, index) => (
            <div
              key={index}
              className="image"
              style={{
                marginLeft: margin,
                display: index === count ? "block" : "none",
              }}
            >
              {/* <h1>Pic {index + 1}</h1> */}
              <img src={image.url} alt={`image ${index + 1}`} />
              <p className="fun-fact">{image.fact}</p>
            </div>
          ))}
        </div>
      </div>
      {/* button to enter the site */}
      <Link to="/list">
        <button className="get-started-btn hover:bg-green-500">
          CLICK TO EXPLORE
        </button>
      </Link>
    </div>
  );
};

export default Carousel;
