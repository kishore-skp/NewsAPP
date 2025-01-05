import React, { useState, useEffect } from "react";

// A mock service for category operations (can be replaced with actual API calls)
const mockCategoryService = {
  getCategories: async () => {
    // Fetch existing categories (this is a mock, replace with actual API call)
    return Array.from({ length: 100 }, (_, index) => `Category ${index + 1}`);
  },
  addCategory: async (category) => {
    console.log("Category Added: ", category);
  },
  updateCategory: async (oldCategory, newCategory) => {
    console.log(`Category Updated: ${oldCategory} -> ${newCategory}`);
  },
  deleteCategory: async (category) => {
    console.log("Category Deleted: ", category);
  },
};

export default function CategoryComponent() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [categoryToEdit, setCategoryToEdit] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 10;

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await mockCategoryService.getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  // Filter categories based on search term
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the categories to display based on the current page and search term
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstCategory, indexOfLastCategory);

  // Handle adding a new category
  const handleAddCategory = async () => {
    if (newCategory.trim()) {
      await mockCategoryService.addCategory(newCategory);
      setCategories((prevCategories) => [...prevCategories, newCategory]);
      setNewCategory("");
    } else {
      alert("Please enter a valid category.");
    }
  };

  // Handle updating a category
  const handleUpdateCategory = async () => {
    if (categoryToEdit && updatedCategory.trim()) {
      await mockCategoryService.updateCategory(categoryToEdit, updatedCategory);
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category === categoryToEdit ? updatedCategory : category
        )
      );
      setCategoryToEdit("");
      setUpdatedCategory("");
    } else {
      alert("Please select a category to update and provide a new name.");
    }
  };

  // Handle deleting a category
  const handleDeleteCategory = async (category) => {
    await mockCategoryService.deleteCategory(category);
    setCategories((prevCategories) =>
      prevCategories.filter((existingCategory) => existingCategory !== category)
    );
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);

  return (
    <div className="category-container">
      <h1>Manage Categories</h1>

      {/* Add New Category */}
      <div className="add-category">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Enter new category"
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>

      {/* Update Existing Category */}
      <div className="update-category">
        <select
          value={categoryToEdit}
          onChange={(e) => setCategoryToEdit(e.target.value)}
        >
          <option value="">Select category to update</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={updatedCategory}
          onChange={(e) => setUpdatedCategory(e.target.value)}
          placeholder="Enter updated category"
        />
        <button onClick={handleUpdateCategory}>Update Category</button>
      </div>

      {/* List Categories with Delete Option */}
      <div className="category-list">
        <div className="row">
            <div className="col-md-9 col-sm-6">
            <h2 style={{'display':'inline'}}>Existing Categories</h2>
            </div>
            <div className="col-md-3 col-sm-6" style={{'text-align':'end'}}>
      {/* Search Field */}
      <input
          className="searchCategory"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search categories"
        />
            </div>
        </div>
        <ul>
          {currentCategories.map((category, index) => (
            <li key={index}>
              {category}
              <button onClick={() => handleDeleteCategory(category)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>



      {/* Pagination Controls */}
      <div className="category-pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
