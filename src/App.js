import ClipboardCopy from './ClipboardCopy'
import Share from './Share'

function App() {
  return (
    <div className="App">
      <ClipboardCopy copyText="https://www.naver.com" />
      <Share />
    </div>
  );
}

export default App;
