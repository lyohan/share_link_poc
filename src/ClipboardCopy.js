import { useState } from 'react'

export default function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  // TODO: Implement copy to clipboard functionality
  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    }
  }

  const handleCopyClick = async () => {
		try {
			if ('clipboard' in navigator) {
				// 링크복사
				await navigator.clipboard.writeText(copyText);
			}
			// 복사된 후 알림 처리
			alert('복사 되었습니다.')
		} catch(e) {

		}
    // copyTextToClipboard(copyText)
    //   .then(() => {
    //     // If successful, update the isCopied state value
    //     setIsCopied(true);
    //     setTimeout(() => {
    //       setIsCopied(false);
    //     }, 1500);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <div>
      <input type="text" value={copyText} readOnly />
      <button onClick={handleCopyClick}>
        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
      </button>
    </div>
  );
}
