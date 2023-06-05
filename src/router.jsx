import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Welcome from "./views/Welcome";
import AddingInteractions from './notes/AddingInteractions';
import ConditionalRendering from "./notes/ConditionalRendering";
import RenderingLists from "./notes/RenderingLists";
import Errors from "./error-page/Errors-page";

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
                element: [<ConditionalRendering />, <RenderingLists />, <AddingInteractions />]
        
            }
        ],
    },
    
]);


export default router; 