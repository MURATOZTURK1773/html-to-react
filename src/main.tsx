import { createRoot } from "react-dom/client";
import App from './App';

const container = document.getElementById('root');

if(!container){
    throw new Error("could now find root container")
}

createRoot(container).render(<App/>)


