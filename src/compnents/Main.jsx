// components
import Footer from './Footer'

// images
import mainImage from "../images/mainImage.jpg"

// css
import "../App.css"

function Main({isShown}) {
  return (
    <main className={isShown ? "container blur" : "container"}>


          
              
              <img className='main-image' src={mainImage} alt="poster"  />
              
              <h1 className='heading'>The Bright Future of Web 3.0?</h1>

              <div className='desc'>
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button>READ MORE</button>
              </div>
                
              <aside className='aside'>
                <h2>New</h2>
                <div className='article'>
                  <a href='#'>Hydrogen VS Electric Cars</a>
                  <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className='article'>
                  <a href='#'>The Downsides of AI Artistry</a>
                  <p>What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className='article'>
                  <a href='#'>Is VC Funding Drying Up?</a>
                  <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
              </aside>
              
               <Footer /> 
          
        </main>
  )
}

export default Main