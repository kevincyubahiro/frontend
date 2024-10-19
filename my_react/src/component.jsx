function Footer()
{
    const HandleClick=(e)=>e.target.textContent="Subscribed";
    const Click=(e)=>e.target.textContent="Ouch";
    const cyx=(e)=>e.target.textContent="I'm kevin";
    return(
        <div>
  <footer>
    <p>&copy; {new Date().getFullYear() }</p>
  </footer>
 <p>I'm Kevin Pro</p>
 <nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">Portifolio</a></li>
    </ul>
    </nav>
    <button onClick={(e)=>HandleClick(e)}>Subscribe</button>
    <button onClick={(e)=>Click(e)}>Click Me</button>
    <button onClick={(e)=>cyx(e)}>see name</button>
 </div>
    );
   
}
export default Footer;