import React, { useState } from 'react';


const CopyButton = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 1500); // Reset copied state after 1.5 seconds
            })
            .catch(err => alert('Failed to copy dates'));
    };

    return (
        <button onClick={handleCopy}>
            {copied ? 'Copied' : 'Copy to clipboard'}
        </button>
    );
};

export default CopyButton;
