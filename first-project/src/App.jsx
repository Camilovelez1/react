import { useState } from 'react';

import PostsLists from './components/PostsLists';
import MainHeader from './components/MainHeader';

function App() {
  const [modalIsVisible, setModalIsVisible ] = useState(true);

  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }
  
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsLists isPosting={modalIsVisible} 
        onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;