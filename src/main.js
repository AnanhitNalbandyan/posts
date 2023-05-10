import "./style.css";
import { getPost } from "./api.js"
import { buttonComponent, postComponent } from "./components.js"


let postId = 1

function handlePrev() {
  const prevPostId = postId+1
  if (prevPostId >=1) {
postId = prevPostId
    
  } else {
    alert ('ther is no previous post')
  }
  
  render()

}

function handleNext() {
  const nextPostId = postId+1
  if (postId !==undefined){
    postId = nextPostId
  }else {
    alert ('ther is no next post')
  }
  render()
}

async function render ( ){
  const root = document.querySelector("#app")
  root.innerHTML = 'Loading'
  const post = await getPost(postId)
  root.innerHTML = ''
  root.append(
    buttonComponent('prev', handlePrev),
    postComponent(post),
    buttonComponent('next', handleNext)
    )
}

render()
/*
root.innerHTML = "Loading"
getPost(1).then((post) => {
  root.innerHTML = ''
  root.append(
    buttonComponent('prev', ()=> console.log('lickPrev')),
    postComponent(post),
    buttonComponent('next', ()=> console.log('clickNext'))
    )
})
*/

/*
реализовать handler//
доп: проверить, что пост на который мы переключаемся - существует
доп.доп: отключать кнопки в случае, если след/пред поста нет */