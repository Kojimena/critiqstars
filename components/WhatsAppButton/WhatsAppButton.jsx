import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppButton = () => {
    const phoneNumber = '34685693461';

    return (
        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer"
           style={{
               position: 'fixed',
               right: '20px',
               bottom: '20px',
               backgroundColor: '#25D366',
               color: 'white',
               borderRadius: '50%',
               padding: '10px',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               fontSize: '24px',
               boxShadow: '2px 2px 3px rgba(0,0,0,0.3)'
           }}
        >
            <IoLogoWhatsapp />
        </a>
    );
}

export default WhatsAppButton;
