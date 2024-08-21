import { useState, useEffect } from 'react';
import Modal from './Modal';

const Home = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    useEffect(() => {
      const words = ['Frontend Developer']; 
  
      let typingTimeout;
      const handleTyping = () => {
        const currentWord = words[loopNum % words.length];
        const updatedText = isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1);
  
        setText(updatedText);
  
        if (!isDeleting && updatedText === currentWord) {
          setIsDeleting(true);
          setTypingSpeed(100);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(150);
        }
  
        typingTimeout = setTimeout(handleTyping, typingSpeed);
      };
  
      typingTimeout = setTimeout(handleTyping, typingSpeed);
  
      return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, loopNum, typingSpeed]);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    return (
      <div className="w-full h-full">
        <div className="text-center w-full px-1 md:w-4/5 mx-auto">
          <h2 className="text-2xl font-bold pt-2">Hello, I am</h2>
          <h2 className="text-xl font-bold py-5 uppercase">Oryema Stephen</h2>
          <h2 className="text-xl font-bold text-zinc-700" style={{ minHeight: '30px' }}>{text || '\u00A0'}</h2>
          <p className="text-lg">
            Building and Maintaining responsive websites.
            Frontend Developer with a bit of the backend skills.
            Converting figma designs into code.
            Making the web more beautiful, one pixel at a time.
          </p>
        </div>
        <div className='w-full gap-3 flex py-5 items-center justify-center'>
          <button onClick={openModal} className='px-5 pt-1 pb-2 bg-gray-800 text-white hover:text-black hover:bg-gray-400 rounded-lg'>Hire Me</button>
          <a href='https://drive.google.com/file/d/18nJWPLEpmGJo6BcbxDOWxJzpAPAjzhgw/view?usp=sharing' target='_blank'
                    rel='noopener noreferrer' className='px-5 pt-1 pb-2 bg-gray-800 text-white hover:text-black hover:bg-gray-400 rounded-lg'>Download My Resume</a>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    );
  };
  
  export default Home;