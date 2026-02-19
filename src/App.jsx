import { Header } from "./Components/Header";
import { Post } from "./Post";

import './global.css';

import styles from "./App.module.css"

function App() {
  return (
    <div>
        <Header />
         <div className={styles.wrapper}>
          <aside>
            <h1>sidebard</h1>
          </aside>
          <main>
            <Post  author="Ruan" content="Meu primeiro post"/>
          </main>
         </div>
    </div>
)
}

export default App;
