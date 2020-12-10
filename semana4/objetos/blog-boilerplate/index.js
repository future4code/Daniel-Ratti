let tituloForm = document.getElementById('titulo-post')
let autorForm = document.getElementById('autor-post')
let conteudoForm = document.getElementById('conteudo-post')
let imagemForm = document.getElementById('imagem-post')

const blog = {
    titulo: '',
    autor: '',
    conteudo: ''
}

let posts = []

const criarPost = () => {
    if (tituloForm.value === '', autorForm.value === '', conteudoForm.value === ''){
        alert ("Por favor preencha todos os campos!")
    }else {
        let novoTitle = tituloForm.value
        let novoAutor = autorForm.value
        let novoContent = conteudoForm.value
        let novaImg = imagemForm.value

        blog.titulo = novoTitle 
        blog.autor = novoAutor
        blog.conteudo = novoContent
        blog.imagem = novaImg

        const sectionPost = document.getElementById('container-de-posts')

        sectionPost.innerHTML += `<h1> ${blog.titulo} </h1>`
        sectionPost.innerHTML += `<h3> ${blog.autor} </h3>`
        sectionPost.innerHTML += `<p> ${blog.conteudo} </p>`
        sectionPost.innerHTML += `<img src=${blog.imagem}>`

        posts.push = (blog)

    }

    console.log(posts);

    tituloForm.value = ''
    autorForm.value = ''
    conteudoForm.value = ''
    imagemForm.value = ''
}


