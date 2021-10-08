export default function Share() {
  return (
    <div>
			{/* 주소는 encodeURIComponent api 사용  */}
      <a
        href="https://www.facebook.com/dialog/share?app_id=1193167394529339&display=popup&href=https://projectlion.io&redirect_uri=http://localhost:3000"
        target="_blank"
      >
        facebook share button
      </a>
      <div>
        <a
          class="twitter-share-button"
          href="https://twitter.com/intent/tweet?url=https://projectlion.io&title=abcdefg"
          data-size="large"
          data-text="custom share text"
          data-url="https://www.naver.com"
          data-hashtags="example,demo"
          data-via="twitterdev"
          data-related="twitterapi,twitter"
					target="_blank"
        >
          Tweet
        </a>
      </div>
    </div>
  );
}
