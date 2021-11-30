import Navbar from "./Navbar";
import Hero from '../components/Hero'



export default function Layout(props){
	return (
		<>
		
		
	      <main role="main">
	        {props.preContainer && props.preContainer}
	        <div className="album py-5 bg-light">
	          <div className="container">
	            {props.children}
	          </div>
	        </div>
	      </main>
		</>
		);
}