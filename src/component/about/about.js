import React from 'react'
import SectionTitle from '../section-title/section-title'
import AboutItem from './about-item'

const About = () => {
  return (
    <section id="aboutUs" className="secPad">
    <div className="container">
        
           <SectionTitle title="I am Sam, a UI Designer & developer" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>

        <div className="row">
            <AboutItem title="Responsive Design" icon="desktop" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt volutpat. Cras eget augue id dui varius pretium."/>
            <AboutItem title="HTML5/CSS3 Dev" icon="css3" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt volutpat. Cras eget augue id dui varius pretium."/>
            <AboutItem title="JavaScript jQuery" icon="lightbulb-o"/>        
        </div>
    </div>
</section>
  )
}

export default About