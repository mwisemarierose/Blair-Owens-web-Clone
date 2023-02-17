import React , {useState ,useEffect} from 'react'
import "./style.css";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillStarFill, BsPencil, BsTrash } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

export const Card =({image,title,district ,id}) =>{
  localStorage.setItem('id',id)
 
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(null);
  const handleBack = () => {
    window.location.href = '/dashboard/edit'; 
  };

  const handleDelete = (id) => {
    fetch(`https://klabapi.onrender.com/api/estate/delete/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          setDeleted(true);
        } else {
          throw new Error('Failed to delete');
        }
      })
      .catch(error => {
        setError(error);
      });
  };

  return (
    <div className="cards col-md-6">
    <div id="listing-card">
    <a href="/dashboard/view" class="image-link">  
    <div id="listing-card-image" class="image-link">
      <img
        src={image}
        className="w-100"
        alt=""
      />
    <div class="view-button">View</div>
    </div>
    </a>
    <div id="listing-card-desc">
      <div id="listing-card-title">{title}</div>
      <div id="listing-card-address">
      
        <IoLocationSharp style={{ color: "#3270FC" }} />
        {district}
      </div>
      <div id="listing-card-rating">
        <BsFillStarFill className="verified" />
        <BsFillStarFill className="verified" />
        <BsFillStarFill className="verified" />
        <BsFillStarFill className="verified" />
        <BsFillStarFill />
      </div>
      <div id="listing-card-viewership">
      {deleted && <p>Deleted successfully</p>}
      {error && <p>{error.message}</p>}
        <BsTrash className="verified delete" onClick={() => handleDelete(id)} />
        <BsPencil className="verified edit" onClick={() =>handleBack()}/>
      </div>
    </div>
  </div>
  </div>
  )
}

