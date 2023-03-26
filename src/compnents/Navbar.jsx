

function Navbar({isShown}) {
  
  return (
    <nav> 
      <ul id={!isShown ? "hidden" : ""} >
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
      </ul>
    </nav>
  )
}

export default Navbar