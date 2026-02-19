import { Header } from "./Components/Header";
import { Post } from "./Post";

import './global.css';

function App() {
  return (
    <div>
        <Header />
         <Post  author="Ruan" content="Meu primeiro post"/>
    </div>
)
}

export default App;
