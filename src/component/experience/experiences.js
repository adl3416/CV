import React from "react";
import SectionTitle from "../section-title/section-title";
import Experience from "./experience";
import TimelineBatch from "./timeline-batch";
const Experiences = () => {
  return (
    <section id="experience" className="secPad">
      <div className="container">
        <SectionTitle
          title="Professional Experience"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
        <div id="timeline">
          <div className="row timeline-movement timeline-movement-top">
            <div className="timeline-badge timeline-future-movement">
              <a href="#">
                <span className="glyphicon glyphicon-plus"></span>
              </a>
            </div>
            <div className="timeline-badge timeline-filter-movement">
              <a href="#">
                <span className="glyphicon glyphicon-time"></span>
              </a>
            </div>
          </div>
          <div className="row timeline-movement">
            <TimelineBatch month="Feb" year="2014" />
            <Experience
              title="Mussum ipsum cacilds"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate="18/02/2014"
              eDate="Present"
              position="left"
              alone = {false}
            />
            <Experience
              title="Mussum ipsum cacilds"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate="18/02/2014"
              eDate="Present"
              position="right"
              alone = {false}
            />
            
          </div>
          <div className="row timeline-movement">
            <TimelineBatch month="Mar" year="2013" />
            
            <Experience
              title="Mussum ipsum cacilds"
              desc="Lorem ipsum dolor sit , consectetur adipiscing
                          elit."
              sDate="18/02/2024"
              eDate="Present"
              position="right"
              alone = {true}
            />

            <Experience
              title="Mussum ipsum cacilds"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate="10/03/2013"
              eDate="18/02/2014"
              position="left"
              alone = {true}
            />

          </div>
          <div className="row timeline-movement">
            <TimelineBatch month="Jan" year="2010" />


            <Experience
              title="Mussum ipsum cacilds"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate="11/01/2010"
              eDate="10/03/2023"
              position="right"
              alone = {true}
            />


<Experience
              title="Mussum ipsum cacilds"
              desc="Lorem ipsum dolor sit amet,
                          elit."
              sDate="10/03/2023"
              eDate="18/02/2024"
              position="left"
              alone = {true}
            />

          </div>
        </div>
      </div>
    </section>
  );
};
export default Experiences;