import React from 'react';
//import ReactDOM from 'react-dom';
import StreamList from '../streams/StreamList';
import StreamCreate from '../streams/StreamCreate';
import StreamDelete from '../streams/StreamDelete';
import StreamEdit from '../streams/StreamEdit';
import StreamShow from '../streams/StreamShow';
import Header from '../components/Header'
import { Router,Route} from 'react-router-dom';
import history from '../history'


             /*   const pageOne =()=>{
                    return <div>"Hii "</div>;
                };

                const pageTwo =()=>{
                    return <div>  "HEYYY DER" <br/> "YEAHHHH"</div>;
                    
                };*/

const App =()=>{
    return (
  <div>
      <Router history={history}>
      <div>
          <Header />
            <Route path ="/" exact component = {StreamList}/>
            <Route path ="/Stream/new"  exact component ={StreamCreate}/>
            <Route path ="/Stream/edit/:id" exact  component ={StreamEdit}/>
            <Route path ="/Stream/delete" exact component ={StreamDelete}/>
            <Route path ="/Stream/show" exact component ={StreamShow}/>
      </div>
       </Router>  
  </div>
  );    
};

export default App;

// https://github.com/lukehoban/es6features.git//