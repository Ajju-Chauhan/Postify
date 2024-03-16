import Header from './assets/Component/Header'
import Footer from './assets/Component/Footer'
import Sidebar from './assets/Component/Sidebar'
import Creatpost from './assets/Component/Creatpost'
import PostList from './assets/Component/PostList'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import PostListProvider from './Stor/post-list-store'

function App() {
  const [selectecTab, setSetlectedTad] = useState("Home");
  

  return (
    <>
    <PostListProvider>

    <div className="app-container">
    <Sidebar selectecTab={selectecTab} setSetlectedTad={setSetlectedTad}/>
    <div className="content">
     <Header/>
     {selectecTab === "Home"?
     <Creatpost/>:
     <PostList/>}
     <Footer/>
    </div>
    </div>
    </PostListProvider>
      

    </>
  )
}

export default App
