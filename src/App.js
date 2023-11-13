
import "./Styles/scss/styles.scss";
import Gallery from "./Components/Gallery";
import { useState, useEffect } from 'react';
import { storage } from './firebase'; 
import { ref, listAll, getDownloadURL } from 'firebase/storage';

function App() {
  const [images, setImages] = useState([]);
  const imagesRef = ref(storage, "images/2023/");

  useEffect(() => {
    return getAllImages();
}, []);

const getAllImages = () => {
  listAll(imagesRef).then((response) => {
    response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
            setImages((prev) => [...prev, url]);                    
        })
    })
})
}



  return (
    <div className="App"> 
    {/* START HEADER */}
      <header>
        <div className="header-container">
          <div id="overlay"></div>
          <div className="title-container">
            <h1>DRINK 'N' RAVE</h1>
          </div>
        </div>
      </header>
      {/* END HEADER */}
      <div className="wrapper">
            <Gallery images={images}/>
        
      </div>

    </div>
  );
}

export default App;
