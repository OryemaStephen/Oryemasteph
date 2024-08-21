// import React from 'react'
import { useState } from "react";
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';

const AboutContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const handleCancel = ()=>{
        setFormData({
            name: '',
            email: '',
            message: ''
          })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send(
          'service_dbma1ll', 
          'template_6jjz1kc', 
          formData, 
          'z8XuPpnJZ9SabQfG3'
        )
        .then((response) => {
          alert('SUCCESS!', response.status, response.text);
          handleCancel()
        })
        .catch((err) => {
          alert('FAILED...', err);
        });
      };
  return (
        <div className="w-11/12 p-5 mx-auto my-5 bg-white border rounded-lg lg:border-none lg:w-full border-slate-500">
            <h2 className="mb-4 text-2xl font-bold">Let&apos;s Work Together</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Name</label>
                    <input
                    type="text"
                    name="name"
                    className="w-full p-2 mt-1 border rounded"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Email</label>
                    <input
                    type="email"
                    name="email"
                    className="w-full p-2 mt-1 border rounded"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Message</label>
                    <textarea
                    name="message"
                    className="w-full p-2 mt-1 border rounded h-fit"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    ></textarea>
                </div>
                <div className="flex justify-between gap-6 md:justify-end">
                    <button
                    type="button"
                    onClick={handleCancel}
                    className="px-4 py-2 mr-2 text-white bg-gray-400 rounded hover:bg-gray-800 hover:text-white"
                    >
                    Cancel
                    </button>
                    <button
                    type="submit"
                    className="px-4 pt-1 pb-2 text-white bg-gray-800 rounded-lg hover:text-black hover:bg-gray-400"
                    >
                    Send
                    </button>
                </div>
            </form>
      </div>
  )
}

AboutContact.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

export default AboutContact