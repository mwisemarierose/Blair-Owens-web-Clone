import React from "react";
import { Filter } from "../components/filter";
import NavBar from "../components/NavBar";
import "../styles/styles.css";
import PropertyCard from "../components/listingCard";
import ViewCard from "../Components/viewCard";
import SmallNav from "../Components/smallNav";


function viewPage() {
  const data = [
    {
      price: "230,000",
      bed: "42",
      bath: "12",
      square: "12",
      image:
        "https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Download-HD-Nature-Wallpapers.jpg",
    },
    {
      price: "330,000",
      bed: "32",
      bath: "12",
      square: "12",
      image:
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/3D-HD-Nature-Wallpapers-For-Desktop-1.jpg",
    },
  ];
  const datas = [
    {
      image:
        "https://d37ukvrrv3in12.cloudfront.net/listings/dc1e1b8b-a8a7-4ccf-808e-dc0018f33427/xl/1.jpg",
    },
    {
      image:
        "https://d37ukvrrv3in12.cloudfront.net/listings/dc1e1b8b-a8a7-4ccf-808e-dc0018f33427/xl/1.jpg",
    },
  ];
  return (
    <div>
      <NavBar />
      <Filter />
      
      {/* <div className="naLink">
        <div className="right" style={{float:"left"}}>
          <p>Listings</p>
        </div>
        <div className="left" style={{float:"right"}}>
          <a href="/">Home &gt;</a>
          <a href="">Listings &gt;</a>
          <a href="">8052 Camino De Arriba</a>
        </div>
      </div> */}
      <div className='U-full'>
      <button className="for-sale">FOR SALE</button>  
      <div className='size-De'>8052 Camino De Arriba <span className='right-text0'>$4,980,000</span></div>
        <div className='size-santa'>Rancho Santa Fe, CA 92067<span className='right-text'>Est. Payment $28,492/mo</span></div>
        
</div>
      
      <div className="ViewCard-cOntainer">
        <div className="all-flex">
          <div className="img-view-container"></div>
          <div className="card-Contain">
            <div className="img-view-contain">
              <div className="right-properties">
                {datas.map((item, index) => {
                  return <ViewCard img={item.image} />;
                })}
              </div>
            </div>
            <div className="img-view-contain2" />
          </div>
        </div>

        <div className="left-cards">
          {data.map((item, index) => {
            return (
              <PropertyCard
                price={item.price}
                bath={item.bath}
                bed={item.bed}
                square={item.square}
                img={item.image}
              />
            );
          })}
        </div>
        <div className="text-block">
          <div className="text-line">
            <span className="text1">Bed</span>{" "}
            <span className="text-num1">6</span>
          </div>
          <hr />
          <div className="text-line1">
            <span className="text2">Bath</span>{" "}
            <span className="text-num2">8</span>
          </div>
          <hr />
          <div className="text-line2">
            <span className="text3">Sq Ft</span>{" "}
            <span className="text-num3">7,380</span>
          </div>
          <hr />
          <div className="text-line3">
            <span className="text4">Price Per Sq Ft</span>{" "}
            <span className="text-num4">$674.80</span>
          </div>
          <hr />
          <div className="text-line4">
            <span className="text5">Year Built</span>{" "}
            <span className="text-num5">2009</span>
          </div>
          <hr />
          <div className="text-line5">
            <span className="text6">Lost Size</span>{" "}
            <span className="text-num6">1.01 Acres</span>
          </div>
          <hr />
          <div className="text-line6">
            <span className="text7">Community</span>{" "}
            <span className="text-num7">Cielo</span>
          </div>
          <hr />
          <div className="text-line7">
            <span className="text8">MLS #</span>{" "}
            <span className="text-num8">220007703</span>
          </div>
          <div className="long-text">
            Nestled in the exclusive, guard-gated community of Cielo in Rancho
            Santa Fe, this extraordinary custom-built estate offers panoramic
            views encompassing mountain, ocean & city light vistas. Drive up to
            the home with a private, elegant driveway showcasing gorgeous
            landscape, front yard lawn & expansive motor court. Enjoy a bright
            open airy floor plan from the moment you walk in the front door.
            With soaring ceilings & an abundance of natural light, this
            single-level masterpiece offers an ideal floor plan with not a
            single step in the whole house! On one wing of the house, you will
            find the master bedroom suite, stunning movie theater, beautiful
            office & powder bathroom. On the other wing, you will find 3
            spacious en-
          </div>
          <button className="read-more">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default viewPage;
