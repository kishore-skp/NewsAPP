import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const AdminGrid = ({ onDeleteArticle, onSelectArticle }) => {

    const articles = [
        {
          id: 1,
          title: "Introduction to React",
          category: "Technology",
          publishedDate: "2024-12-15",
          author: "John Doe",
          selected: false,
          imageUrl: "https://via.placeholder.com/150",  // Example image URL
        },
        {
          id: 2,
          title: "The Future of Web Development",
          category: "Technology",
          publishedDate: "2024-12-10",
          author: "Jane Smith",
          selected: false,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          title: "A Deep Dive into Machine Learning",
          category: "AI & ML",
          publishedDate: "2024-11-25",
          author: "Alice Johnson",
          selected: false,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 4,
          title: "10 Tips for Better Web Performance",
          category: "Web Development",
          publishedDate: "2024-12-05",
          author: "Bob Lee",
          selected: false,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 5,
          title: "Understanding Blockchain Technology",
          category: "Blockchain",
          publishedDate: "2024-11-30",
          author: "Charlie Brown",
          selected: false,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 6,
          title: "How to Build a Personal Portfolio Website",
          category: "Web Development",
          publishedDate: "2024-12-01",
          author: "David Green",
          selected: false,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 7,
          title: "Exploring Quantum Computing",
          category: "Technology",
          publishedDate: "2024-11-20",
          author: "Eve White",
          selected: false,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 8,
          title: "Mastering JavaScript ES6 Features",
          category: "Programming",
          publishedDate: "2024-12-18",
          author: "Frank Harris",
          selected: false,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 9,
          title: "An Introduction to Python for Data Science",
          category: "Data Science",
          publishedDate: "2024-11-28",
          author: "Grace Wilson",
          selected: false,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 10,
          title: "Cloud Computing: Benefits and Challenges",
          category: "Cloud Computing",
          publishedDate: "2024-12-10",
          author: "Henry Martin",
          selected: false,
          imageUrl: "https://via.placeholder.com/150",
        }
      ];
      
  // State for pagination, sorting, and search
  const [currentPage, setCurrentPage] = useState(0);
  const [articlesPerPage] = useState(5); // Items per page
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'asc' });

  // Sorting function
  const sortArticles = (articles) => {
    const sortedArticles = [...articles];
    sortedArticles.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return sortedArticles;
  };

  // Handling search functionality
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting filtered articles
  const sortedArticles = sortArticles(filteredArticles);

  // Pagination logic
  const indexOfLastArticle = (currentPage + 1) * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = sortedArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Handle sorting on column header click
  const handleSort = (columnName) => {
    let direction = 'asc';
    if (sortConfig.key === columnName && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: columnName, direction });
  };

  return (
    <div className="admin-grid">
      {/* Search Box */}
      <div> 
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      </div>

      {/* Table */}
      <table className="responsive-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('title')}>Title</th>
            <th onClick={() => handleSort('category')}>Category</th>
            <th onClick={() => handleSort('publishedDate')}>Published Date</th>
            <th onClick={() => handleSort('author')}>Author</th>
            <th>Actions</th>
            <th>Select for Carousel</th>
          </tr>
        </thead>
        <tbody>
          {currentArticles.map((article, index) => (
            <tr
              key={article.id}
              className={index % 2 === 0 ? 'even-row' : 'odd-row'}
            >
              <td>{article.title}</td>
              <td>{article.category}</td>
              <td>{article.publishedDate}</td>
              <td>{article.author}</td>
              <td>
                <button onClick={() => onDeleteArticle(article.id)} className="delete-btn">Delete</button>
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => onSelectArticle(article.id)}
                  checked={article.selected}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        pageCount={Math.ceil(sortedArticles.length / articlesPerPage)}
        onPageChange={handlePageChange}
        containerClassName={'grid-pagination'}
        activeClassName={'active'}
        pageClassName={'page'}
        previousClassName={'previous'}
        nextClassName={'next'}
      />
    </div>
  );
};

export default AdminGrid;
