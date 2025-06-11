import logo from './logo.svg';
import './App.css';
import Counter from './components/UseStare/Ex1';
import Example2 from './components/UseStare/Ex2';
import ProductList from './components/UseStare/Ex3';
import ProductSelector from './components/UseStare/Ex4';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counting from './components/Exercise12/Counter';
import TextInput from './components/Exercise12/TextInput';
import ToggleVisibility from './components/Exercise12/ToggleVisibility';
import TodoList from './components/Exercise12/TodoList';
import ColorSwitcher from './components/Exercise12/ColorSwitcher';
import SearchFilter from './components/Exercise12/SearchFilter';
import DragDropList from './components/Exercise12/DragDropList';

function App() {
  return (
    <>
      {/* <Counter/>
      <Example2/>
      <ProductList/>
      <ProductSelector/> */}
      {/* <Counting/>
      <TextInput/> */}
      <ToggleVisibility/>
      <TodoList/>
      <ColorSwitcher/>
      <SearchFilter/>
      <DragDropList/>
    </>
  );
}

export default App;
