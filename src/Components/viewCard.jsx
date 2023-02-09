import "../styles/styles.css";


export default function ViewCard({ img}) {
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
