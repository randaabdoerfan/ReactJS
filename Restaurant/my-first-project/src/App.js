
import './App.css';
import Card from './card';
import {data} from'./Data';
import Header from './Header';


export default function App() {
  const datashow =
          data.map((el,key)=> <Card post1={el.post1}
          post2={el.post2}
          post3={el.post3}
          post4={el.post4}/>)
  return (
    <div className="App">
      <Header/>
      {datashow}

    </div>
  );
}

