
import './App.css';
import Video from './pages/Video'

function App() {
  return (
    <div className="App">
      <div className="app_videos">
        {

        }
        <Video
          likes={400}
          messages={200}
          shares={20}
          name='Felixxx'
          description='ddddddddddd'
          music='musicss'
          url='https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2'
        />
        <Video
          likes={400}
          messages={200}
          shares={20}
          name='Felixxx'
          description='ddddddddddd'
          music='musicss'
          url='https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2'
        />




      </div>
    </div>
  );
}

export default App;
