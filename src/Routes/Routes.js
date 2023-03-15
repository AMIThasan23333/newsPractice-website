
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Main from '../Layout/Main';




 export const router = createBrowserRouter([



     {
        path : '/',
        element : <Main></Main>,

        children : [

            {
                path : '/',
                loader: () => fetch('http://localhost:5000/news'),
                element: <Home></Home>
                
            },

            {
                path : '/',
                element: <Home></Home>
            },


        ]
     }


 ])