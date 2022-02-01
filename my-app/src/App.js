import Nav from "./components/Nav";
import Button from "./components/Button";
import imagem1 from "../../components/Card";
import imagem2 from "../../components/Card2";
import imagem3 from "../../components/Card3";
import imagem4 from "../../components/Card4";

import styles from "./styles.module.css";

function App() {
  return (
    <div> 
      <div className= {styles.container}>
        <Nav/>
        <Button/>
      </div>
      <div className={styles.container}>
        <Card
          description="Alguma coisa"
          image={imagem1}
          title="Declarative"
          function={duvidaDoBruno}
        />

        <Card
          description="coisa alguma"
          image={imagem2}
          title="Declarative"
        />
        <Card
          description="Treco"
          image={DeclarativeImage}
          title="Declarative"
        />
        <Card
          description="Tapa na pantera"
          image={DeclarativeImage}
          title="Declarative"
        />
      </div>
    </div>
  );
}

export default App;
