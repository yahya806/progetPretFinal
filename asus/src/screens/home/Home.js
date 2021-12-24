import React from 'react'
import "./home.css"





const Home = () => {
   
    return (
        <div className="bod">
           <div className="ya1">
           <div class="containera">
  <div class="carousel">
    <div class="carousel__face"><span className="spana">This is your way</span></div>
    <div class="carousel__face"><span className="spana">Your Library</span></div>
    <div class="carousel__face"><span className="spana">Make it a friend</span></div>
    <div class="carousel__face"><span className="spana"> It's For you</span></div>
    <div class="carousel__face"><span className="spana">Just try</span></div>
    <div class="carousel__face"><span className="spana">addict to books</span></div>
    <div class="carousel__face"><span className="spana">Raed</span></div>
    <div class="carousel__face"><span className="spana">Enlight your path</span></div>
    <div class="carousel__face"><span className="spana">Welcome</span></div>
  </div>
</div>
</div>
            <div className="ya2">
                  <div style={{borderRadius:"25px"}} className="satal1">
                      <h1 className="hash" style={{paddingTop:"50px"}}>hello and welcome</h1>
                      <p style={{fontSize:"24px"}} >
                                 "I have always imagined that Paradise will be a kind of a Library."<br/>
                                "Nothing is pleasanter than exploring a library."<br/>
                                "The only thing that you absolutely have to know, is the location of the library."<br/>
                                "When in doubt go to the library."
                      </p>
                  </div>
                      <div style={{borderRadius:"25px"}} className="satal2">
                            
                            <img style={{borderRadius:"25px"}} src="hector.jpg"  alt="logo"/>
                      </div>
            </div> 
            <div style={{borderRadius:"25px"}} className="ya3">
                  <div className="satal3">
                      <img   src="annie.jpg" alt="pic"/>
                  </div>
                  <div style={{borderRadius:"25px"}} className="satal4">
                      <h1 className="hash" style={{paddingTop:"50px"}}>The books enlighting the world</h1>
                                    <p style={{fontSize:"24px"}} >
                                                    “So many books, so little time.” ...<br/>
                                                    “A room without books is like a body without a soul.” ...<br/>
                                                    “The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.” ...<br/>
                                                    “Good friends, good books, and a sleepy conscience: this is the ideal life.”<br/>
                                    </p>
                  </div>
              
              </div>    

 
        </div>
    )
}

export default Home
