import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './Home/Home';
import Section from './Section/Section';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import PrimaryMenu from './PrimaryMenu/PrimaryMenu';
import Conference from './Conference/Conference';
import axios from 'axios';
import {Switch,Route} from "react-router-dom";
import Article from './Article/Article';
import ConferenceMenu from './Conference/ConferenceMenu/ConferenceMenu';
import AuthorContainer from './Author/AuthorContainer';
import AuthorMenu from './Author/AuthorMenu/AuthorMenu';
import ViewAll from './ViewAll/ViewAll';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PageLoader from './util/Loader/Loader';
import ArticleMenu from './Article/ArticleMenu';
import { orderByDate } from './util/orderByDate';
import AboutUs from './Footer/About/AboutUs';
import Policy from './util/Policy/Policy';
import Cart from './Cart/Cart';
import SponsorsAndPartners from './SponsorPage/SponsorsAndPartners';
import Poll from './util/Poll/Poll';
import NewsFeed from './util/News/NewsFeed';
import Venue from './Conference/components/ConfInfo/Venue/Venue';
import Invest from './util/Invest/Invest';
import InvestMenu from './util/Invest/InvestMenu';
import Program from './Program/Program';
import AtTheTable from './Program/AtTheTable';
import RFK from './rfk/RFK';


function App() {
  const [articles, setArticles] = useState([]);
  const [conferences, setConferences] = useState([]);
  const [comments,setComments] = useState([]);
  const [editorial, setEditorial] = useState("");
  const [publisher,setPublisher] = useState("");
  const [editCalendar,setCal] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Headlines");

  useEffect(() => {
    const fetchData = async () => {
      try{
        const articles = await axios("https://skytop-strategies.com/wp-json/wp/v2/articles?_fields[]=title&_fields[]=acf&_fields[]=content&_fields[]=date&_fields[]=id&_fields[]=_links&_embed=wp:featuredmedia&per_page=100");
        const conferences = await axios("https://skytop-strategies.com/wp-json/wp/v2/conferences?_fields[]=id&_fields[]=title&_fields[]=acf&_fields[]=content&_fields[]=_links&_embed=wp:featuredmedia&per_page=100");
        const comments = await axios("https://skytop-strategies.com/wp-json/wp/v2/comments?per_page=100");
        const editorials = await axios("https://skytop-strategies.com/wp-json/wp/v2/editorials?_embed=wp:featuredmedia");
        
        setArticles(articles.data);
        setConferences(orderByDate(conferences))
        setComments(comments.data);
        setPublisher(editorials.data[0]);
        setCal(editorials.data[1]);
        setEditorial(editorials.data[2]);
        {console.log(articles.data)}
        {console.log(editorials.data)}
      }catch (err){
        console.error(err);
      }
      setLoaded(true);
    }
    fetchData();
  },[]);
  
  const filterByCategory = (data, category) => {
    const categories = [  
      "Activism", 
      "Capital Markets", 
      "Cyber Resilience", 
      "CSR and Sustainability", 
      "Investment Management", 
      "Washington & The World"]

    if(category === "Headlines" || !categories.includes(category)){
      return data;
    }else{
      return data.filter((item) => item.acf.category === category )

    }
  }
  const changeActiveCategory = (category) => {
    setActiveCategory(category);
  }

  const styleObj = {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 16
}
const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1
      }}
  />
);
  return (
    <div className="App">
      <Header/>
      {loaded ? 
        <div className="main-container">
          <Nav changeActiveCategory={changeActiveCategory} activeCategory={activeCategory}/>
          <Poll />
          <div className="main-grid">
            <Switch>
              <div className="section">
              <div style={styleObj}>
              January 10, 2022
                  
                  <br/>
                  Weekly Edition #1: <b>Transformational Women</b>
                  <ColoredLine color="gold" />
                </div>
             
                <Route exact path="/">
                  <Home 
                    video={"https://www.youtube.com/embed/6WLMz8Qeg4A"} 
                    title={
                      <div className="video-title text-center">
                        <h5>
                          Spotlight on Helen Reddy: A Game Changing Talent and Model of Resilience
                        </h5>
                      </div>
                    }
                    articles={articles} 
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad_link={"https://www.extrahop.com/"}
                    ad={"https://utcoleca.sirv.com/SKYTOP/skytop_ads/extraHop.gif"}
                    calendar={editCalendar}/>
                </Route>

                <Route exact path="/activism">
                  <Section
                    video={"https://www.youtube.com/embed/VnI4ox-lOEU"}
                    title={
                      <div className="video-title text-center">
                        <h5>Evolving Practices in Shareholder Engagement</h5>
                        <p>Jeremy Fielding, CEO Kekst CNC</p>
                      </div>
                    }
                    articles={articles}
                    ids={[2661,2241,2217,2136,1322,643,1284]}
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad_link={"https://www.boardroomalpha.com/"}
                    ad={"https://utcoleca.sirv.com/SKYTOP/skytop_ads/cyberad.png"}/>
                </Route>

                <Route exact path="/investment">
                  <Section
                    video={"https://www.youtube.com/embed/sIMJfTE2NCM?rel=0"} 
                    title={
                      <div className="video-title text-center">
                        <h5>ESG Investing, A Portfolio Perspective</h5>
                        <p>Rodrigo Garcia, CIO and CFO,  Illinois State Treasury</p>
                      </div>
                    }
                    articles={articles}
                    ids={[2424,2157,1804,203,622,583,604]}                    
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad_link={"https://www.boardroomalpha.com/"}
                    ad={"https://utcoleca.sirv.com/SKYTOP/skytop_ads/cyberad.png"}/>
                </Route>

                <Route exact path="/CSR">
                  <Section
                    video={"https://www.youtube.com/embed/WEvUO-l4d7w?rel=0"} 
                    title={
                      <div className="video-title text-center">
                        <h5>Innovation and CSR Brand Strategy </h5>
                        <p>Joe Verrengia, Global Director, Corporate Social Responsibility</p>
                      </div>
                    }
                    articles={articles}
                    ids={[2394,2380,2319,2325,2226,2132,2150,1862]}                    
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad_link={"https://crisisconsultant.com/"}
                    ad={"https://utcoleca.sirv.com/SKYTOP/skytop_ads/ICM.jpg"}/>
                </Route>

                <Route exact path="/cyber">
                  <Section
                    video={"https://www.youtube.com/embed/bcwb-BDxIZo?rel=0"} 
                    title={
                      <div className="video-title text-center">
                        <h5>The Cognitive Hack</h5>
                        <p>James Bone, Executive Director and Founder GRC Index</p>
                      </div>
                    }
                    articles={articles}
                    ids={[2332,2335,2250,1947,187,1306]}                    
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad_link={"https://www.extrahop.com/"}
                    ad={"https://utcoleca.sirv.com/SKYTOP/skytop_ads/extraHop.gif"}/>
                </Route>

                <Route exact path="/capital-markets">
                  <Section
                    video={"https://www.youtube.com/embed/0KQJ3n7GgU4?rel=0"} 
                    title={
                      <div className="video-title text-center">
                        <h5>Activists and Markets</h5>
                        <p>Rich Thomas, Director, Lazard</p>
                      </div>
                    }
                    articles={articles}
                    ids={[2407,2430,2223,2153,2145,1808,1303,585]}                    
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad_link={"https://www.boardroomalpha.com/"}
                    ad={"https://utcoleca.sirv.com/SKYTOP/skytop_ads/cyberad.png"}/>
                </Route>

                <Route exact path="/washington-world">
                  <Section
                    video={"https://www.youtube.com/embed/f8iBhyXnKrg?rel=0"} 
                    title={
                      <div className="video-title text-center">
                        <h5>Forced Labor-- A Global Challenge</h5>
                        <p>Rachel Phillips, Deputy Division Chief for Research and Policy, Office of Child Labor, US Department of Labor</p>
                      </div>
                    }
                    articles={articles}
                    ids={[2418,2368,2328,2247,2121,1815,1812,1316]}                    
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad_link={"https://www.boardroomalpha.com/"}
                    ad={"https://utcoleca.sirv.com/SKYTOP/skytop_ads/cyberad.png"}/>
                </Route>
                
                <Route exact path="/authors/:id"><AuthorContainer articles={articles} comments={comments}/></Route>
                <Route exact path="/articles/:id"><Article articles={articles} comments={comments}/></Route>
                <Route exact path="/editorial"><Article articles={editorial} editorial_title={"Editor's Note"}/></Route>
                <Route exact path="/publisher"><Article articles={publisher} editorial_title={"Publisher's Note"}/></Route>

                <Route exact path="/conferences/:id"><Conference conferences={conferences}/></Route>
                <Route exact path="/conferences/:confId/venues/:id"><Venue /></Route>
                <Route exact path="/index/conferences"><ViewAll conferences={conferences} comments={comments}/></Route>
                <Route exact path="/index/articles"><ViewAll articles={articles} comments={comments}/></Route>
                <Route exact path="/about-us"><AboutUs changeActiveCategory={changeActiveCategory} activeCategory={activeCategory}/></Route>
                <Route exact path="/privacy"><Policy policy="Privacy"/></Route>
                <Route exact path="/sponsors-partners"><SponsorsAndPartners/></Route>
                <Route exact path="/cancel"><Policy policy="Cancel"/></Route>
                <Route exact path="/cart"><Cart/></Route>
                <Route exact path="/invest-in-us"><Invest/></Route>
                <Route exact path="/program"><Program/></Route>
                <Route exact path="/rfk"><RFK/></Route>
                <Route exact path="/AtTheTable"><AtTheTable/></Route>
                
              </div>
            </Switch>

            <div className="side-menu">
              <Switch>
                <Route path={"/conferences/:id"}><ConferenceMenu conferences={conferences}/></Route>
                <Route path={["/authors/:id","/editorial","/publisher"]}><AuthorMenu conferences={conferences}/></Route>
                <Route path="/invest-in-us"><InvestMenu/></Route>
                <Route path="/index/conferences">
                  <div className="pl-3">
                    <NewsFeed/>
                  </div>
                </Route>
                <Route path={"/articles/:id"}>
                  <ArticleMenu 
                    articles={articles} 
                    filterByCategory={filterByCategory} 
                    conferences={conferences}
                  />
                </Route>
                <Route path={"*"}>
                  <PrimaryMenu 
                    ad_link={"https://cmi2i.com/"} 
                    ad={"https://utcoleca.sirv.com/SKYTOP/skytop_ads/CMi2i.png"} 
                    conferences={filterByCategory(conferences,activeCategory)} 
                    editorial={editorial}
                    publisher = {publisher} 
                    comments={comments}
                  />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      : 
        <div className="loader">
          <PageLoader/>
        </div>
      }
        <Footer changeActiveCategory={changeActiveCategory}/>
    </div>
  );
}

export default App;
