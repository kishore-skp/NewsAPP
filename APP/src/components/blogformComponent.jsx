import React, { useState } from 'react';

const BlogInputForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [spotifyLink, setSpotifyLink] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, content, spotifyLink, youtubeLink, image });
  };

  return (
    <form onSubmit={handleSubmit} className="blog-input-form">
      <div className="form-group">
        <label htmlFor="title">Title<span className="mandatory">*</span></label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content<span className="mandatory">*</span></label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="form-control"
          rows="5"
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Category<span className="mandatory">*</span></label>
        <input
          id="content"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="spotifyLink">Spotify Link</label>
        <input
          type="url"
          id="spotifyLink"
          value={spotifyLink}
          onChange={(e) => setSpotifyLink(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="youtubeLink">YouTube Link</label>
        <input
          type="url"
          id="youtubeLink"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageUpload">Image Upload<span className="mandatory">*</span></label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageChange}
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default BlogInputForm;
