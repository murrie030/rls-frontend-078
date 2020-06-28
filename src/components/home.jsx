import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "../css/home.module.css";

class Home extends Component {
  render() {
    return (
      <div className="container" id="content">
        <div id="welcome-section">
          <h1>Connect the world...</h1>
          <p>
            Welcome to the application that is created for the project of
            RailLinkSystems. This application is particular for the passenger
            wagons. The idea is to abstract an intuitive web app into simple
            actions in a responsive GUI. The main focus is on the{" "}
            <Link to="/tcm">
              <a className={styles.a} href="tcm.html">
                Train Composition Message (TCM)
              </a>
            </Link>
            .
          </p>
          <img
            src="/images/Railway-Traffic-Automation.jpg"
            alt="Railway"
            width="700"
            height="300"
          />
        </div>

        <div id={styles.informationSection}>
          <h1>Information</h1>
          <p>
            The European agency{" "}
            <a className={styles.a} href="https://www.era.europa.eu/">
              (ERA, European Union Agency for Railways)
            </a>{" "}
            has prescribed an extensive system of message exchange for the
            communication between carriers and infrastructure managers (IM).
          </p>
          <p>
            An example of a carrier in The Netherlands is NS (Nederlandse
            Spoorwegen) and ProRail is the infrastructure manager. The big
            carriers, like NS, can satisfy the new standards of the ERA.
            However, this application is made for the little ones who seem to
            struggle with this satisfaction.
          </p>
          <p>
            The main goal of this project, is to make a translation of a complex
            SOAP message to an intuitive web app. This allows the little
            carriers to satisfy standards too.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
