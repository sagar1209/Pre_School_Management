import React, { useState } from "react";
import Footer from "../footer/footer";
import useHistory from "react";

const Contact = () => {

//    const  history = useHistory();

  const [data, setData] = useState({
    fullname: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

// Handle Submit
const handleSubmit = async (event) => {
    event.preventDefault();
    const { fullname, email, msg } = data;
    try {
        const res = await fetch('/message', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullname, email, msg 
            })
        })
        console.log(res.status)
        window.alert(res.status)
        if (res.status === 400 || !res) {
            window.alert("message not sent , try again")
        } else {
            window.alert("message sent");
            setData({
                fullname: "",
                email: "",
                msg: "",

            })
            
 
            
        }
    } catch (error) {
        console.log(error);
    }
}
  // document.getElementById('con').classList.add("con2");

  return (
    <>
      <div className="back_image">
        <h1 className="">Contact Us</h1>
      </div>
      <div className="contact_outer">
          <div className="contact_inner">

            <form  onSubmit={handleSubmit}  method="POST"  > 

              <div className="contact_name">
              <br></br>
                <label for="exampleInputEmail1" class="">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Name"
                />
              </div>

              <div className="contact_email">
                <label for="exampleInputEmail1" class="">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="contact_message">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Message"
                  >
                  
                </textarea>
              </div>

              <div className="submitDiv">
                <button type="submit" className="contact_submit">Submit</button>
              </div>
            </form>
          </div>
         
      </div>
      
    </>
  );
};

export default Contact;