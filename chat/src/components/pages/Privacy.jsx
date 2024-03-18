import React from 'react'
import Layout2 from '../Layout/Layout2'
import { useTypewriter , Cursor } from 'react-simple-typewriter';
import usePrivacy from '../../hooks/usePrivacy';

const Privacy = () => {
  const {privacy1} = usePrivacy();
  const {privacy2} = usePrivacy();
  const {privacy3} = usePrivacy();
  const [text1] = useTypewriter({
    words: [privacy1],
    loop: 1 , 
    typeSpeed: 0,
  });
  const [text2] = useTypewriter({
    words: [privacy2],
    loop: 1 , 
    typeSpeed: 0,
  });
  const [text3] = useTypewriter({
    words: [privacy3],
    loop: 1 , 
    typeSpeed: 0,
  });
  return (
    <Layout2>
      <div className='privacy'>
        <h1>Privacy Policy</h1>

        <p>
          {text1}<Cursor cursorColor='white' />
        </p>

        <h2>Information We Collect</h2>

        <p>
          {text2}<Cursor cursorColor='white' />
        </p>

        {/* Add more sections based on your specific privacy practices */}

        <h2>How We Use Your Information</h2>

        <p>
          {text3}<Cursor cursorColor='white' />
        </p>

        <h2>Information Sharing</h2>

        <p>
          We may share your personal information with third parties when
          required by law or when we believe it is necessary to comply with a
          judicial proceeding, court order, or legal process served on our
          Website.
        </p>

        {/* Add more sections based on your specific privacy practices */}

        <h2>Contact Us</h2>

        <p>
          If you have any questions about this Privacy Policy, please contact
          us at [Your Contact Email].
        </p>

        <p>
          This Privacy Policy was last updated on [Date of Last Update] and is
          effective as of [Effective Date].
        </p>
      </div>
    </Layout2>
  )
}

export default Privacy
