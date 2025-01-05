import { Component } from "react";
import { HomepageComponent } from "./components/homepageComponent";
import { BlogComponent } from "./components/blogComonent";
import BlogInputForm from "./components/blogformComponent";
import articleForm  from "./components/ArticleComponent";
import categoryForm  from "./components/CategoryComponent";
import articleGrid  from "./components/ArticleGridComponent";


const routes=[
    {
        path:"/blogComponent",
        component: BlogComponent
    },
    {
        path:"/blogform",
        component: BlogInputForm
    },
    {
        path:"/articleForm",
        component: articleForm
    },
    {
        path:"/categoryForm",
        component: categoryForm
    },
    {
        path:"/articleGrid",
        component: articleGrid
    },
    {
        path:"/",
        component: HomepageComponent,
        title:"People "
    }
]
export default routes;

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {HomepageComponent} from './components/homepageComponent'; // Import your HomepageComponent
// import {BlogComponent} from './components/blogComonent'; // Import BlogFormComponent
// import BlogFormComponent from './components/blogformComponent'; // Import BlogFormComponent

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomepageComponent />} />
//         <Route path="/blogComponent" element={<BlogComponent />} />
//         <Route path="/blogformComponent" element={<BlogFormComponent />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;