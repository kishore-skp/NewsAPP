import React, { useState } from 'react';

const ArticleComponent= ()=> {
  const [title, setTitle] = useState('');
  const [englishTitle, setEnglishTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [credits, setCredits] = useState('');
  const [keywords, setKeywords] = useState('');
  const [youtubeURL, setyoutubeURL] = useState('');
  const [spotifyURL, setspotifyURL] = useState('');


  // Handle image upload
  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      englishTitle,
      summary,
      image,
      content,
      category,
      credits,
      keywords,
      youtubeURL,
      spotifyURL
    };

    // You can send `formData` to an API or handle it as needed.
    console.log('Form Data:', formData);
  };

  return (
    <div className="article-container">
      <h1>Create an Article</h1>
      <form onSubmit={handleSubmit} className="article-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Please enter the title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="englishTitle">English Title</label>
          <input
            type="text"
            id="englishTitle"
            value={englishTitle}
            onChange={(e) => setEnglishTitle(e.target.value)}
            required
            placeholder="Please enter the english title"

          />
        </div>

        <div className="form-group">
          <label htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            placeholder="Please enter the summary"
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageUpload}
            accept="image/*"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="Please enter the content"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
            <option value="business">Business</option>
            <option value="sports">Sports</option>
            <option value="lifestyle">Lifestyle</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="youtubeURL">Youtube URL</label>
          <input
            type="text"
            id="youtubeURL"
            value={youtubeURL}
            onChange={(e) => setyoutubeURL(e.target.value)}
            placeholder="Please paste the youtube URL"
          />
        </div>

        <div className="form-group">
          <label htmlFor="spotifyURL">Spotify URL</label>
          <input
            type="text"
            id="spotifyURL"
            value={spotifyURL}
            onChange={(e) => setspotifyURL(e.target.value)}
            placeholder="Please paste the spotify URL"
          />
        </div>

        <div className="form-group">
          <label htmlFor="credits">Credits</label>
          <input
            type="text"
            id="credits"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            placeholder="Please enter the credit name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="keywords">Keywords</label>
          <input
            type="text"
            id="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Please enter the keyword"
          />
        </div>

        <div className="form-group">
          <button type="submit">Submit Article</button>
        </div>
      </form>
    </div>
  );
}

export default ArticleComponent;
