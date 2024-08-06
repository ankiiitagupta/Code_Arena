import React from 'react';
import {Link} from "react-router-dom";


const Home = () => {
  return (
    <div className="home">
      <h1 className="welcome">Welcome to Code Arena!!</h1>
      <p>Join coding challenges, compete with others, and improve your skills.</p>
      <Link to="/login">
      <button className="join-button">Join Now</button>
      </Link>
      <h2>Compete</h2>
      <p>
              Face off against other coders in real-time coding battles. Test your skills, speed, and accuracy to see who comes out on top.
            </p>
            <h2>Learn</h2>
            <p>
              Access a wide range of tutorials, coding challenges, and resources to help you improve your coding abilities. Learn from the best and become a coding master.
            </p>
            <h2>Connect</h2>
            <p>
              Join a community of passionate coders. Share your experiences, collaborate on projects, and make new friends who share your love for coding.
            </p>
            <h2>Upcoming Events</h2>
            <p>
              Stay tuned for our upcoming coding battles and events. Don't miss out on the chance to participate and win exciting prizes!
            </p>
    </div>
  );
};

export default Home;
