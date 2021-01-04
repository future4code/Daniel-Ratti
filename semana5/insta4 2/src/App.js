import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const Input = styled.input `
  width: 300px;
  margin:10px;
  border: 1px solid orangered;
  padding:20px 20px;
`
const Button = styled.button `
  width: 100px;
  margin:10px;
  padding: 10px;
  background-color:orangered;
  color:white;
  border:none;
  outline:none;
  font-size:large;
`

class App extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      posts: [
        {
          nomeUsuario: "Daniel",
          fotoUsuario: "https://picsum.photos/50/50", 
          fotoPost: 'https://picsum.photos/200/150'
        },
        {
          nomeUsuario: "Ian",
          fotoUsuario: "https://picsum.photos/44/50",
          fotoPost: 'https://picsum.photos/200/160'
        },
        {
          nomeUsuario: "Victor",
          fotoUsuario: "https://picsum.photos/47/50", 
          fotoPost: 'https://picsum.photos/200/161'
        },
      ],
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    }
  }

  addPost = () => {
    const novaPostagem = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const newPost = [...this.state.posts, novaPostagem]
    this.setState({posts: newPost})
  }

  onChangeInputName = event => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputFotoUser = event => {
    this.setState ({valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = event => {
    this.setState ({valorInputFotoPost: event.target.value})
  }

  render() {

    const divPost = this.state.posts.map ((post, index,) => {
      return (
        <div key={index} className ={'app-container'}>
          <Post
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost}
          />
        </div>
      )
    })

    return (
      <div className={'app-container'}>
        <Input
          nomeUsuario={this.state.valorInputNome}
          onChange={this.onChangeInputName}
          placeholder={"Seu nome:"}
        />

        <Input
          fotoUsuario={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUser}
          placeholder={"link de uma foto sua!"}
        />

        <Input
          fotoPost={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={'link para foto do post!'}
        />

        <Button onClick = {this.addPost}>Postar</Button>
        {divPost}

      </div>
    );
  }
}

export default App;