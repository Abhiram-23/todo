import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState , useEffect} from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase'
import firebase from 'firebase';
function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);
  const addTodo = (event) =>{
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hai welcome 🚀</h1>
      <form>
      <FormControl>
      <InputLabel > ⚔️ Write a Todo</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>
      <Button disabled={!input} type="submit"  variant="contained" onClick={addTodo} color="primary" disableElevation>
      Todo
      </Button>
      {/* <button type="submit" onClick={addTodo}>Todo</button> */}
      </form>
      <ul>
        {todos.map(todo =>(
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
