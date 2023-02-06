import React, { useState } from 'react';
import './NewsDetails.css';

export default function NewsDetails () {
  const [news, setNews] = useState({
    title: '',
    description: '',
    author: '',
    date: ''
  });

  const handleChange = (event) => {
    setNews({ ...news, [event.target.name]: event.target.value });
  };

  return (
    <div className="news-details">
      <h1>News Details</h1>
      <form>
        <label>
          Title:
          <input type="text" name="title" value={news.title} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Description:
          <input type="text" name="description" value={news.description} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Author:
          <input type="text" name="author" value={news.author} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Date:
          <input type="text" name="date" value={news.date} onChange={handleChange} />
        </label>
        <br />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};


