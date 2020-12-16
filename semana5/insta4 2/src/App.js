import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Daniel'}
          fotoUsuario={'https://picsum.photos/50/50/'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
        nomeUsuario={'Ian'}
        fotoUsuario={'https://picsum.photos/50/51'}
        fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
        nomeUsuario={'Victor'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/152'}
        />
      </div>
    );
  }
}

export default App;
