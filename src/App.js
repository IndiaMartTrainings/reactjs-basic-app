// import Greet from "./1.components/1.function/Greet";
// import { Named } from "./1.components/1.function/Named";
// import Welcome from "./1.components/2.class/Welcome";
// import { WelcomeOne } from "./1.components/2.class/WelcomeOne";
// import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";

import Welcome from "./3.props/Welcome";
import Counter from "./4.state/Counter";
import Message from "./4.state/Message";
import Person from "./4.state/Person";
import ClassClick from "./5.event-handling/ClassClick";
import EventBind from "./5.event-handling/EventBind";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";
import UserGreeting from "./6.conditional-rendering/UserGreeting";
import UserGreetingOne from "./6.conditional-rendering/UserGreetingOne";
import UserGreetingThree from "./6.conditional-rendering/UserGreetingThree";
import UserGreetingTwo from "./6.conditional-rendering/UserGreetingTwo";
import NameList from "./7.list-rendering/NameList";
import NameListFive from "./7.list-rendering/NameListFive";
import NameListFour from "./7.list-rendering/NameListFour";
import NameListOne from "./7.list-rendering/NameListOne";
import NameListThree from "./7.list-rendering/NameListThree";
import NameListTwo from "./7.list-rendering/NameListTwo";
import Stylesheet from "./8.styling/Stylesheet";
// import './8.styling/style.css'
// import Inline from "./8.styling/Inline";
// import './8.styling/appStyles.css'
// import styles from './8.styling/appStyles.module.css'
import Form from "./9.form-handling/Form";
import FormOne from "./9.form-handling/FormOne";


function App() {
  return (
    <div className="container">
      <FormOne />
      {/* <Form /> */}
      {/* <h1>This h1</h1>
      <h2 className="error">This is Error</h2> <br />
      {/* <h2 className={styles.success}>This is Success</h2> */}
      {/* <h3 className={styles.standard}>This is H3</h3> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameListFive /> */}
      {/* <NameListFour /> */}
      {/* <NameListThree /> */}
      {/* <NameListTwo /> */}
      {/* <NameListOne /> */}
      {/* <NameList /> */}
      {/* <UserGreetingThree /> */}
      {/* <UserGreetingTwo /> */}
      {/* <UserGreetingOne /> */}
      {/* <UserGreeting /> */}
      {/* <Parent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Person /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Welcome name="Scott" skill="Manager">
        <p>This is class child component</p>
      </Welcome>
      <Welcome name="Adam" skill="Business Analyst" />
      <Welcome name="Tuan" skill="TechBoss" />
      <br /><br />
      <Greeting name="Scott" skill="Manager">
        <p>This is function child component</p>
      </Greeting>
      <Greeting name="Adam" skill="Business Analyst"/>
      <Greeting name="Tuan" skill="TechBoss"/> */}
      {/* <Greet />
      <Greet />
      <Greet />
      <Named />
      <Welcome />
      <WelcomeOne />
      <Hello /> */}
    </div>
  );
}

export default App;
