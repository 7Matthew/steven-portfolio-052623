import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Welcome from "./views/Welcome";
import AddingInteractions from './notes/AddingInteractions';
import ConditionalRendering from "./notes/ConditionalRendering";
import RenderingLists from "./notes/RenderingLists";
import Errors from "./error-page/Errors-page";
import Moa from "./views/documents/Moa";
import Recommendation from "./views/documents/Recommendation";
import Resume from "./views/documents/Resume";

const router = createBrowserRouter([
    
    {
        path: '/',
        element: <App /> , 
        errorElement: <Errors />,
        children: [

            {
                path: "/",
                element: <Navigate to = "/welcome" />
            },

            {
                path:"/welcome",
                element: <Welcome />
            },

            {
                path: '/AddingInteraction',
                element: <Navigate to = "/adding-interactions" />
            },

            {
                path: '/adding-interactions',
                element: <AddingInteractions /> , 
            },

            {
                path: '/notes',
                element: [<ConditionalRendering key={0} />, <RenderingLists key={1}/>, <AddingInteractions key={2}/>]
        
            },
            {
                path: '/documents/moa',
                element: <Moa />
        
            },
            {
                path: '/documents/recommendation-letter',
                element: <Recommendation />
        
            },
            {
                path: '/documents/resume',
                element: <Resume />
        
            }
        ],
    },
    
]);


export default router; 