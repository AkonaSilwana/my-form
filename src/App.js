
import { useState } from 'react';
import './App.css';
import ModalUI from './components/modal';


function App() {
  const [name, setName] = useState("")
  const [email, SetEmail] = useState("")
  const [age, setAge] = useState("")



  const submit = () => {
    console.log(name)
    console.log(email)
    console.log(age)
     
  }

  return (
    <div className="App">
      
      <form onSubmit={submit}>
       <h1 >WELCOME TO OUR PAGE</h1>
         <div>
          <fieldset>
        <input
        value={name}
        type={'text'}
        placeholder='Name'
        onChange={(event) => {setName(event.target.value);
         
        }}
      
        />
        </fieldset>
        <fieldset>
        <input
        value={email}
        type={'email'}
        placeholder='Email'
         onChange={(event) => {SetEmail(event.target.value);
         
        }}
        
        />
        </fieldset>
        <fieldset>
        <input
        value={age}
        type={'number'}
        placeholder='age'
         onChange={(event) => {setAge(event.target.value);
         
        }}
         
         />
         </fieldset>
        </div>
       
      </form>
      <ModalUI name= {name} email={email} age={age}/>
      
      
       
    </div>
   
  );
}

export default App;
