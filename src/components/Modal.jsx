import { useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_dbma1ll', 
      'template_6jjz1kc', 
      formData, 
      'z8XuPpnJZ9SabQfG3'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      onClose(); // Close the modal after sending
    })
    .catch((err) => {
      console.error('FAILED...', err);
    });
  };

  return (
    <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-2/3 md:w-1/2 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Hire Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="mt-1 p-2 border w-full rounded"
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
              className="mt-1 p-2 border w-full rounded"
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
              className="mt-1 p-2 border w-full h-fit rounded"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 hover:bg-gray-800 hover:text-white py-2 bg-gray-400 text-white rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 pt-1 pb-2 bg-gray-800 text-white hover:text-black hover:bg-gray-400 rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;