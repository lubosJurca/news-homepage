// images
import image01 from "../images/image01.jpg"
import image02 from "../images/image02.jpg"
import image03 from "../images/image03.jpg" 

// css
import "../App.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='box'>
            <img src={image01} alt="technology" />
            <div className='box-info'>
            <h3>01</h3>
            <a href='#'>Reviving Retro PCs</a>
            <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div className='box'>
            <img src={image02} alt="technology" />
            <div className='box-info'>
            <h3>02</h3>
            <a href='#'>Top 10 Laptops of 2022</a>
            <p>Our best picks for various needs and budgets.</p>
            </div>
        </div>
        <div className='box'>
            <img src={image03} alt="technology" />
            <div className='box-info'>
            <h3>03</h3>
            <a href='#'>The Growth of Gaming</a>
            <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer