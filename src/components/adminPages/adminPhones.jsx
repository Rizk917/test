import axios from "axios";
import React, { useEffect, useState ,useRef} from "react";
// import { Link, useParams } from "react-router-dom";
import AdminNav from "./adminNav";
import { useNavigate } from 'react-router-dom';

const AdminPhonedata = () => {
  // const [formData, setFormData] = useState("");
  const form = useRef();
  const navigate = useNavigate();
 
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////ADD PHONES/////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
  const onChange = (e) => {
    if(e.target.name == "image")
    setNewPhones({ ...newPhones, [e.target.name]: e.target.files[0] });
    
    else
    setNewPhones({ ...newPhones, [e.target.name]: e.target.value });

    
  };

  const [newPhones, setNewPhones] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let newData = new FormData();
    newData = newPhones;

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    try {
      const response = await axios.post(
        "https://mobilixbackend.onrender.com/phones",
        newData,
        config
      );
      form.current.reset();
      loadphoness();
    } catch (err) {
      console.log("error", err);
    }
  };


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////LOAD PHONES/////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
  const [phoness, setphoness] = useState([]);
  useEffect(() => {
    loadphoness();
  }, []);

  const loadphoness = async () => {
    const result = await axios.get("https://mobilixbackend.onrender.com/phones");
    const sortedphones = result.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setphoness(sortedphones);
  
    
  };
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////DELETE PHONES/////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
  const deletephones = async (id) => {
    await axios.delete(`https://mobilixbackend.onrender.com/phones/${id}`);
    loadphoness();
  };

  return (
    <>
      <div className="phn-data-wrapper">
        <AdminNav />
        <h1 className="khfi">Add New Phone</h1>
        <div className="form-admin">
          <form ref={form} className="contact-formm" encType="multipart/form-data">
            <input
              type="text"
              name="phoneModel"
              // value={phoneModel}
              placeholder="Enter phoneModel"
              onChange={onChange}
              required
            />
              <input
              type="text"
              name="description"
              // value={display}
              placeholder="Enter  description data"
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="display"
              // value={display}
              placeholder="Enter  display data"
              onChange={onChange}
              required
            />
                  <input
              type="text"
              name="memory"
              // value={display}
              placeholder="Enter memory size"
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="prodDate"
              // value={prodDate}
              placeholder="Enter production Date"
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="body"
              // value={body}
              placeholder="enter body data"
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="camera"
              // value={camera}
              placeholder="Enter camera data "
              onChange={onChange}
              required
            />{" "}
            <input
              type="text"
              name="vendor"
              // value={vendor}
              placeholder="Enter The Vendor/Manifacturer"
              onChange={onChange}
              required
            />
            <input
              type="file"
              name="image"
              id="image"

              onChange={onChange}
            />
            <button className="button2" type="submit" onClick={onSubmit}>
              Post
            </button>
          </form>
        </div>
        <div className="content-table">
          <h1>Phones</h1>
          <table>
            <thead>
              <tr>
                <th scope="col">index</th>
                <th scope="col">phoneModel</th>
                <th scope="col">display</th>
                <th scope="col">camera</th>
                <th scope="col">body</th>
                <th scope="col">prodDate</th>
                <th ></th>
              </tr>
            </thead>
            <tbody>
              {phoness.map((phones, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{phones.phoneModel}</td>
                  <td>{phones.display}</td>
                  <td>{phones.camera}</td>
                  <td>{phones.body}</td>
                  <td>{phones.prodDate}</td>
                  {/* <td>{phones.vendor}</td> */}

                  <td>
                    <button
                      className="tbl-btn"
                      onClick={() => deletephones(phones._id)}
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
    </>
  );
};

export default AdminPhonedata;
