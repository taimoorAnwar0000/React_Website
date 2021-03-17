import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div
          className="about-container1"
          style={{ backgroundImage: 'url("/image/about1.jpg")' }}
        >
          <h1>About</h1>
        </div>

        <div className="about-container2">
          <h1>OUR SERVICE</h1>

          <h6>-----------</h6>
          <h6>
            S&P is an international real estate boutique specializing in the
            design, marketing and sale of super prime real
          </h6>
          <h6>
            estate and properties of distinction. We provide world-class
            developers with a bespoke service that includes
          </h6>
          <h6>
            access to our exclusive worldwide-network of national and
            international sales partners.
          </h6>
        </div>
        <div
          className="about-container3"
          style={{ backgroundImage: 'url("/image/about2.jpg")' }}
        ></div>

        <div className="about-container4">
          <h1>A MEETING OF MINDS</h1>

          <h6>-----------</h6>
          <h6>
            When Sid Landolt and Peter Dupuis formed their partnership in 1983,
            their entrepreneurial synergy was
          </h6>
          <h6>
            undeniable. Sid’s fascination with the way things are built and
            Peter’s marketing vision led to a string of
          </h6>
          <h6>
            worldwide real estate successes. Today, S&P continues to share a
            passion for representing the development
          </h6>
          <h6>industry’s best of the best—the world known as super prime.</h6>
        </div>
        <div
          className="about-container5"
          style={{ backgroundImage: 'url("/image/about3.png")' }}
        ></div>

        <div className="about-container6">
          <h1>SPREZZATURA</h1>

          <h6>-----------</h6>
          <h6>
            Sprezzatura [sprettsa·tu·ra]: a certain nonchalance, so as to
            conceal all art and make whatever one does or says
          </h6>
          <h6>
            appear to be without effort. A chance for the many avenues of our
            global company to unite in one place, S&P’s
          </h6>
          <h6>
            Sprezzatura is our exclusive annual event where we listen, learn,
            collaborate and cultivate. Celebrating a meeting
          </h6>
          <h6>
            of minds, this three-day event features insightful seminars,
            eye-opening experiences and world-class cuisine.
          </h6>
        </div>
        <div
          className="about-container7"
          style={{ backgroundImage: 'url("/image/about4.png")' }}
        ></div>
        <div className="text2">
          <h1>SCHEDULE PRIVATE CONSULTATION</h1>
          <button>INQUIRE</button>
        </div>
        <div className="text3">
          <Link>SUBSCRIBE OUR NEWSLETTER</Link>
        </div>

        <div className="footer">
          <div className="start">
            {" "}
            <Link>NEWS</Link>
          </div>
          <div className="start">
            <Link>PRESS</Link>
          </div>

          <div className="start">
            <Link>WORLD HOUSING</Link>
          </div>
          <Link>WORLD FINEST REAL ESTATE</Link>
          <Link>PRIVACY</Link>
          <Link>TERMS</Link>
        </div>
      </div>
    );
  }
}

export default About;
