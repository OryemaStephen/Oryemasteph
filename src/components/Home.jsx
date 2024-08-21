import { useState, useEffect } from 'react';
import Modal from './Modal';

const Home = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    useEffect(() => {
      const words = ['Web Developer!']; 
  
      let typingTimeout;
      const handleTyping = () => {
        const currentWord = words[loopNum % words.length];
        const updatedText = isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1);
  
        setText(updatedText);
  
        if (!isDeleting && updatedText === currentWord) {
          setIsDeleting(true);
          setTypingSpeed(200);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(200);
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
        <div className="w-full px-1 mx-auto text-center md:w-4/5">
          <h2 className="pt-2 text-2xl font-bold">Hello, I am</h2>
          <h2 className="py-5 text-xl font-bold uppercase">Oryema Stephen</h2>
          <h2 className="text-xl font-bold text-zinc-700" style={{ minHeight: '30px' }}>{text || '\u00A0'}</h2>
          <p className="text-lg">
            Building and Maintaining responsive websites.
            Frontend Developer with a bit of the backend skills.
            Converting figma designs into code.
            Making the web more beautiful, one pixel at a time.
          </p>
        </div>
        <div className='flex items-center justify-center w-full gap-3 py-5'>
          <button onClick={openModal} className='px-2 pt-1 pb-2 text-white bg-gray-800 rounded-lg sm:px-5 hover:text-black hover:bg-gray-400'>Hire Me</button>
          <a href='https://drive.google.com/file/d/18nJWPLEpmGJo6BcbxDOWxJzpAPAjzhgw/view?usp=sharing' target='_blank'
                    rel='noopener noreferrer' className='px-2 pt-1 pb-2 text-white bg-gray-800 rounded-lg sm:px-5 hover:text-black hover:bg-gray-400'>Download My Resume</a>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    );
  };
  
  export default Home;