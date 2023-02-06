import Navbar from "../Components/NavBar";
import LoginForm from "./login";

export default function Home() {
    return (
      <div>
        <LoginForm />
      <Navbar />

      <div className="left-area" >
        <p className="left-item left1">
          Luxury Real Estate
        </p>
       <h1 className="left-item left2">
        IT'S TIME TO FIND YOUR LUXURY HOME
       </h1>
       <p className="left-item left2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid alor the old familer 
        olfre idunt ut labore ellt.</p>
        <img className="left-item left3"
       src="https://d37ukvrrv3in12.cloudfront.net/listings/7ad6d1b4-b42b-4f37-a34b-21dfb0837faf/xl/2.jpg" alt="" />
        </div>
  </div>
    );
  }