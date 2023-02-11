import axios from "axios";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";


const ContactUs = (props) => {
  const form = useRef();
  const [error, setError] = useState(null);

  const [myData, setmyData] = useState({
    fullName: "",
    email: "",
    Message: "",
  });
  const { fullName, email, Message } = myData;

  const onChange = (e) => {
    setmyData({ ...myData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_x11nz0r",
        "template_r8t4mxk",
        form.current,
        "-G-4mQwUEY5HmF9QG"
      );

      console.log("email sent successfully");
      form.current.reset();
    } catch (error) {
      console.log("email sending failed", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    setError(null);
    const newContact = {
      fullName: fullName,
      email: email,
      Message: Message,
    };
    await sendEmail(e);

    try {
      await axios.post("https://mobilixbackend.onrender.com/contactus", newContact);
      setmyData({
        fullName: "",
        email: "",
        Message: "",
      });
    } catch (err) {
      console.log("error", err.response.data);
    }
  };

  return (
    <>
      <div className="cntct-us" onClick={() => props.setOpen(true)}>
        <div className="div">
          <h1 className="H1">Contact Us</h1>
        </div>
        <form className="contact-form" ref={form} onSubmit={onSubmit}>
          <input
            type="text"
            name="fullName"
            value={fullName}
            placeholder="Enter your Full name"
            onChange={onChange}
            required
          />

          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter your email "
            onChange={onChange}
            required
          />
          {error === "Email is required" && (
            <div style={{ color: "red" }}>{error}</div>
          )}
          <input
            type="text"
            name="Message"
            value={Message}
            placeholder="Enter your Message"
            onChange={onChange}
            required
          />


          <br />
          <div className="cntct-bck">
            <a href="/">Back</a>
            <button className="form-sbmt" type="submit" onClick={onSubmit}>
              submit
            </button>
          </div>
          <button className="form-sbmit" type="submit">Submit</button>

        </form>
        <h3 className="help">Send us a <br></br>message by filling <br></br>up this form</h3>
      </div>
    </>);
};

export default ContactUs;


























//Mhmd rizk code




// import axios from "axios";
// import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";


// const ContactUs = () => {
//   const form = useRef();

//   const [myData, setmyData] = useState({
//     fullName: "",
//     mail: "",
//     Message: "",
//   });
//   const { fullName, email, Message } = myData;
//   // console.log(myData.message);

//   const onChange = (e) => {
//     setmyData({ ...myData, [e.target.name]: e.target.value });
//   };

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     try {
//       await emailjs.sendForm(
//         "service_x11nz0r",
//         "template_r8t4mxk",
//         form.current,
//         "-G-4mQwUEY5HmF9QG"
//       );

//       console.log("email sent successfully");
//       form.current.reset();
//     } catch (error) {
//       console.log("email sending failed", error);
//     }
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const newContact = {
//       fullName: fullName,
//       mail: email,
//       Message: Message,
//     };
//     await sendEmail(e);

//     // await axios.post("https://mobilixbackend.onrender.com/contactus", newContact);
//     console.log(newContact);
//     // const config = {
//     //   headers: {
//     //     "content-type": "application/json",
//     //   },
//     // };
//     try {
//       await axios.post("https://mobilixbackend.onrender.com/contactus", newContact);
//       setmyData({
//         fullName: "",
//         mail: "",
//         Message: "",
//       });
//     } catch (err) {
//       console.log("error", err.response.data);
//     }
//   };

//   return (
//     <>
//       <div className="cntct-us">
//         <div className="div">
//           <h1 className="H1">Contact Us</h1>
//         </div>
//         <form className="contact-form" ref={form} onSubmit={onSubmit}>
//           <input
//             type="text"
//             name="fullName"
//             value={fullName}
//             placeholder="Enter your Full name"
//             onChange={onChange}
//             required
//           />

//           <input
//             type="text"
//             name="email"
//             value={email}
//             placeholder="Enter your email "
//             onChange={onChange}
//             required
//           />
//           <input
//             type="text"
//             name="Message"
//             value={Message}
//             placeholder="Enter your Message"
//             onChange={onChange}
//             required
//           />


//           <br />
//           <button type="submit" onClick={onSubmit}>
//             submit
//           </button>
//         </form>
//         <h3 className="help">Send us a <br></br>message by filling <br></br>up this form</h3>
//         <div className="cntct-bck">
//           <a href="/">Back</a>
//         </div>
//       </div>
//     </>);
// };

// export default ContactUs;