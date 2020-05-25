import React from 'react';

import linkedin from './images/logotype.svg';
import github from './images/github.svg';
import twitter from './images/twitter.svg';
import devblog from './images/devblog.svg';

import './App.css';
import Title from './components/Title';
import ContentBlock from './components/ContentBlock';
import BlackBox from './components/BlackBox';
import Links from './components/Links';
import Education from './components/Education';
import Badges from './components/Badges';

import data from './data.json';
import SelectLanguage from './components/SelectLanguage';

// let lang = "lt" ;

function App() {
  const [lang, setLang] = React.useState('lt')

  const onChange = (event) => {
    setLang(event.target.value)
  }


  return (
    <div className="App">
      <div className="App-content">
        <SelectLanguage onChange={onChange}/>
        <div className="App-header-blue"></div>
        <div className="App-border">
          <Title level="3" className="App-name">JURGIS AUDICKAS</Title>
          <BlackBox className="App-pro" title={data[lang].header.title}></BlackBox>
        </div>
        <div className="App-info">
          <div className="App-left">
           <ContentBlock title="LINKS">
             <Links src={linkedin} href='www.linkedin.com'>
                LinkedIN
             </Links>
             <Links src={github} href='www.github.com'>
                GitHub
             </Links>
             <Links src={twitter} href='www.twitter.com'>
                Twitter
             </Links>
             <Links src={devblog} href='www.dev.to'>
                DevBlog
             </Links>
           </ContentBlock>
            <ContentBlock title="EDUCATION" className="">
              <Education schoolName='School Name'year='2009 - 2012' degree='Degree'></Education>
              <Education className='hr_dnone' schoolName='School Name'year='2009 - 2012' degree='Degree'></Education>
            </ContentBlock>
            
          </div>
          <div className="App-right">
            <ContentBlock title={data[lang].about.title}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at enim a, lacinia porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit lacus, tempus ac vehicula in, imperdiet dapibus elit. Nullam scelerisque euismod leo id vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam.
            </ContentBlock>

            <div className="skills-space-between">
                <ContentBlock title={data[lang].personalSkills.title}>
                  <Badges skillOne='TEAMWORK' skillTwo='COMMUNICATION' skillThree='ORGANIZATION'></Badges>
                </ContentBlock>
                <ContentBlock title="TECHNICAL SKILLS">
                  <Badges skillOne='HTML' skillTwo='CSS/SCSS' skillThree='JAVASCRIPT' skillFour='REACT.JS'></Badges>
                </ContentBlock>
            </div>
          </div>
        </div>
        <ContentBlock title="WORK EXPERIENCE">
          <div className="work-exp-info">
            <div className="work-space-between">
              <p className="text-center">JOB POSITION</p>
              <p className="text-center">Company</p>
              <p className="text-center">2018 - present</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.</p>
              <ul>
                < li>Lorem ipsum dolor</li>
                <li>Consectetur adipiscing elit</li>
              </ul>
            </div> 
            <div className="work-space-between">
              <p className="text-center">JOB POSITION</p>
              <p className="text-center">Company</p>
              <p className="text-center">2018 - present</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.</p>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Consectetur adipiscing elit</li>
              </ul>
            </div> 
            <div className="work-space-between">
              <p className="text-center">JOB POSITION</p>
              <p className="text-center">Company</p>
              <p className="text-center">2018 - present</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.</p>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Consectetur adipiscing elit</li>
              </ul>
            </div> 
          </div>
        </ContentBlock>
      </div>
    </div>
  );
}

export default App;
