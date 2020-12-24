
import './App.css';
import { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [input, setInput] = useState('');

  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  },[])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  },[])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
    
  }
  return (
    <div className="App">
      <h1>Hello clever programmer</h1>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} ></Input>
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {
        messages.map(message => (
          <Message username={username} message ={message}></Message>
        ))
      }
    
    </div>
  );
}

export default App;
