import React from 'react';
import { Router, Route } from "react-router-dom";
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';




// const PageOne = () =>{
//     return (
//         <div>
//             Page One
//             <Link to="/pagetwo">Navigate to page two</Link>
//         </div>
//     )
//
// };
//
// const PageTwo = () =>{
//     return (
//         <div>
//             Page Two
//             <button>Click me!</button>
//             <Link to="/">Navigate to page one</Link>
//
//         </div>
//     )
//
// };

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />

                    {/*<Route path="/" exact component={PageOne}/>*/}
                    {/*<Route path="/pagetwo" component={PageTwo}/>*/}
                </div>

            </Router>
        </div>
    )

};

export default App;

