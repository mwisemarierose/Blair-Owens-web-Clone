import "../styles/styles.css";


export default function ListingCard({ img}) {
  return (
    <div className="property-container">
      <div
        className="top-img"
        style={{
          background: `url(${img})`,
        }}
      >
       
      </div>
    </div>
  );
}
