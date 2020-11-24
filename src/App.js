import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.css'

import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import Register from './components/Register/Register'
import KursusSaya from './components/KursusSaya/KursusSaya'

import Course from './screen/CoursePage/CoursePage'
import Class from './screen/ClassPage/ClassPage.jsx'
import ArticlePageList from './screen/ArticlePageList/ArticlePageList'

const App = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { token } = userLogin

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/course-page' component={Course}></Route>
        <Route exact path='/class-page' component={Class}></Route>
        <Route exact path='/article' component={ArticlePageList}></Route>
        <Route exact path='/'>
          {!!token ? <Redirect to='/course' /> : <Redirect to='/login' />}
          <Main />
        </Route>
        <ProtectedRoute
          exact
          path='/course'
          component={KursusSaya}
        ></ProtectedRoute>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

// export default function App() {
//   return (
//     <Router>
//         <Header />

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/register">
//             <Register />
//           </Route>
//           <Route path="/article">
//             <ArticlePageList/>
//           </Route>
//           <Route path="/course">
//             <CoursePage/>
//           </Route>
//           <Route path="/class">
//             <ClassPage/>
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//         <Footer />
//         <br />
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div className="Home">
//       <Banner />
//       <Container>
//       <h2 style={{textAlign:"left"}} >Kursus Pilihan</h2>
//         <br/>
//       <KursusPilihan/>
//       <br />
//       <hr />
//       </Container>
//     </div>
//   );
// }
