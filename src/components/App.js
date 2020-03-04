import React from 'react';
//import ReactDOM from 'react-dom';
import StreamList from '../streams/StreamList';
import StreamCreate from '../streams/StreamCreate';
import StreamDelete from '../streams/StreamDelete';
import StreamEdit from '../streams/StreamEdit';
import StreamShow from '../streams/StreamShow';
import Header from '../components/Header'
import { Router,Route, Switch} from 'react-router-dom';
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
          <Switch>
            <Route path ="/" exact component = {StreamList}/>
            <Route path ="/Stream/new"  exact component ={StreamCreate}/>
            <Route path ="/Stream/edit/:id" exact  component ={StreamEdit}/>
            <Route path ="/Stream/delete/:id" exact component ={StreamDelete}/> 
            <Route path ="/Stream/:id" exact component ={StreamShow}/>
            </Switch>
        
      </div>
      
       </Router>  
  </div>
  );    
};

export default App;

// Stream/edit/:id  here :id is params value what we need to display .

// https://github.com/lukehoban/es6features.git//