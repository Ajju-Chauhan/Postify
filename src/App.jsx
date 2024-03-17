import Header from './assets/Component/Header'
import Footer from './assets/Component/Footer'
import Sidebar from './assets/Component/Sidebar'
import Creatpost from './assets/Component/Creatpost'
import PostList from './assets/Component/PostList'
import './routes/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import PostListProvider from './Stor/post-list-store'
import { Outlet } from 'react-router-dom'

function App() {
  
  

  return (
    <>
    <PostListProvider>

    <div className="app-container">
  
    <div className="content">
     <Header/>
     <Outlet/>
     <Footer/>
    </div>
    </div>
    </PostListProvider>
      

    </>
  )
}

export default App;
