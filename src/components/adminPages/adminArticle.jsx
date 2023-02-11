import axios from "axios";
import React, { useEffect, useState ,useRef} from "react";
import { useNavigate } from 'react-router-dom';

import AdminNav from "./adminNav";


const Adminarticle = () => {
//   const navigate = useNavigate();

 
//   useEffect(() => {
//     if (!localStorage.getItem('token')) {
//       navigate('/');
//     }
//   }, []);
//   const { id } = useParams();



//   ////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////LOAD ARTICLES/////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
//   useEffect(() => {
//     LoadArticles();
//   }, []);
//   const [articles, setArticles] = useState([]);
//   const LoadArticles = async () => {
//     const result = await axios.get("https://mobilixbackend.onrender.com/news");
//     const latest1 = result.data.sort((a, b) => {
//       return new Date(b.createdAt) - new Date(a.createdAt);
//     });
//     setArticles(latest1);
//   };
//   ////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////REMOVE ARTICLES//////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////
//   const deletearticles = async (id) => {
//     await axios.delete(`https://mobilixbackend.onrender.com/news/${id}`);
//     LoadArticles();
//   };

// ////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////ADD ARTICLE////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////

//   const form = useRef();
//   const [article, setArticle] = useState("");

//   const onChange = (e) => {
//     if(e.target.name == "image")
//     setArticle({ ...article, [e.target.name]: e.target.files[0] });
    
//     else
//     setArticle({ ...article, [e.target.name]: e.target.value });

    
//   };

// const onSubmit = async (e) => {
//     e.preventDefault();
//     let newData = new FormData();
//     newData = article;

//     const config = {
//       headers: { "content-type": "multipart/form-data" },
//     };

//     try {
//       console.log(newData)
//       const response = await axios.post(
//         "https://mobilixbackend.onrender.com/news",
//         newData,
//         config
//       );
//       form.current.reset();
//       LoadArticles();
//     } catch (err) {
//       console.log("error", err);
//     }
//   };
// ///////////////////////////////////////////////////////////////////////////////////
const form = useRef();
const navigate = useNavigate();

useEffect(() => {
  if (!localStorage.getItem('token')) {
    navigate('/');
  }
}, []);
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////ADD Articles/////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
const onChange = (e) => {
  if(e.target.name == "image")
  setNewArticles({ ...newArticles, [e.target.name]: e.target.files[0] });
  
  else
  setNewArticles({ ...newArticles, [e.target.name]: e.target.value });

  
};

const [newArticles, setNewArticles] = useState("");

const onSubmit = async (e) => {
  e.preventDefault();
  let newData = new FormData();
  newData = newArticles;

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  try {
    const response = await axios.post(
      "https://mobilixbackend.onrender.com/news",
      newData,
      config
    );
    form.current.reset();
    loadarticles();
  } catch (err) {
    console.log("error", err);
  }
};


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////LOAD Articles/////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
const [articles, setarticles] = useState([]);
useEffect(() => {
  loadarticles();
}, []);

const loadarticles = async () => {
  const result = await axios.get("https://mobilixbackend.onrender.com/news");
  const sortedArticles = result.data.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  setarticles(sortedArticles);

  
};
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////DELETE Articles/////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
const deleteArticles = async (id) => {
  await axios.delete(`https://mobilixbackend.onrender.com/news/${id}`);
  loadarticles();
};


/////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="container">
      <AdminNav />
      <form  ref={form} encType="multipart/form-data"  className=" contact-formm ">
        <h1>Add a New Article</h1>
        <input
          type="text"
          name="title"
          // value={title}
          placeholder="Enter article title"
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="description"
          // value={description}
          placeholder="Enter article Description"
          onChange={onChange}
          required
        />
        <br />
        <input
          type="text"
          name="article"
          // value={article}
          placeholder="Body"
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="date"
          // value={date}
          placeholder="Date"
          onChange={onChange}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          // value={author}
          placeholder="Enter your author "
          onChange={onChange}
          required
        />
        <br />
        <input
          type="file"
          name="image"
          id="image"

          // multiple
          // accept="image/*"
          onChange={onChange}
        />

        <br />
        <button className="tbl-btnn" type="submit" onClick={onSubmit}>
          Post
        </button>
      </form>
      <div className="div-tbl-art">
        <h1>Articles</h1>
        <table className="content-table">
          <thead>
            <tr>
              <th scope="col">index</th>
              <th scope="col">Article Title</th>
              <th scope="col">Author</th>
              <th scope="col">Date</th>
              <th ></th>

            </tr>
          </thead>
          <tbody>
            {articles.map((articless, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{articless.title}</td>
                <td>{articless.author}</td>
                <td>{articless.date}</td>

                <td>
                  <button
                    className="tbl-btn"
                    onClick={() => deleteArticles(articless._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default Adminarticle;
