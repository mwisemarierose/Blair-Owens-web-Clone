import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Filter } from "../Components/Filter";
import { NewsCard } from "../Components/BlogCard";
import axios from "axios";
import { Link } from "react-router-dom";
import LoginForm from "./login";

export default function News() {
  const [modalOpen, setModalOpen] = useState(false);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios({
      method: "GET",
      url: "https://newsapi.org/v2/everything?q=tesla&from=2023-01-06&sortBy=publishedAt&apiKey=7e7a2fe4361a4005842ca5d1cac10bdd",
    })
      .then((response) => {
        setBlogs(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <LoginForm />
      <NavBar />
      <Filter />
      <div className="newsBanner">
        <div className="overLay">
          <div className="newsBannerText">
            <h1>Our Blog</h1>
            <p className="text-sm">
              The latest real estate news and insights from San Diego, and
              Beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="newsContainer">
          {blogs.map((item) => {
            if (item.urlToImage !== null) {
              return (
                <NewsCard
                  urlimg={item.urlToImage}
                  title={item.title}
                  description={item.description}
                />
              );
            }
          })}

          <br></br>
          <br></br>
          <br></br>
          <div className="news-page-manager-container">
            <div className="news-page-manager">
              <div>
                <button
                  className="one"
                  style={{
                    backgroundColor: "#151764",
                    border: "1px solid aliceblue",
                    color: "white",
                    boxShadow: "3px 5px 151764",
                  }}
                >
                  1
                </button>
              </div>
              <div>
                <button>2</button>
              </div>
              <div>
                <button>
                  <Link to={"/news/readmore/page2"}>Next Page</Link>{" "}
                  <small></small>
                </button>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}
