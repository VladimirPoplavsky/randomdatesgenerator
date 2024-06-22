import React from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard/src";

const CopyButton = ({ textToCopy }) => {
    const [copied, setCopied] = React.useState(false);
    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
        navigator.clipboard.writeText(textToCopy)
            .catch((err) => alert('Failed to copy dates: ', err));
    };

    return (
        <div>
            <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
                <button>{copied ? 'Copied' : 'Copy to clipboard'}</button>
            </CopyToClipboard>
        </div>
    );
};

export default CopyButton;
