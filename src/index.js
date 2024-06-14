import ReactDom from "react-dom/client"
import "./style.css"
import Home from "../src/views/Home/Home"
import About from "../src/views/About/About"
import Contact from "../src/views/Contact/Contact"

const root = ReactDom.createRoot(document.getElementById('root'))

const path = window.location.pathname

if(path == "/")
{
    root.render(<Home />)
}
else if(path == "/about")
{
    root.render(<About />)
}
else if(path == "/contact")
{
    root.render(<Contact />)
}
else
{
    root.render(<h1>404 page not found</h1>)
}