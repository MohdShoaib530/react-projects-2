/* eslint-disable no-const-assign */
import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setpassword] = useState('');
  const [length, setlength] = useState(6)
  const [includeNumbers, setincludeNumbers] = useState(false)
  const [includeCharacters, setincludeCharacters] = useState(false)
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showPopup]);


  const generatorPassword = useCallback(
    () => {
      let pass = '';
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

      if(includeNumbers){
        str += '0123456789'
      }
      if(includeCharacters) str += '!"#$%&^*()_+=-'

      for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        
        pass += str.charAt(char)
      }

      setpassword(pass)
    },
    [length,includeNumbers,includeCharacters],
  )

  const passwordRef = useRef(null)

  useEffect(() => {
    generatorPassword()
  }, [length,includeCharacters,includeNumbers,generatorPassword])
  
  const copyPasswordClipboard = useCallback(
    () => {
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
      setShowPopup(true);
    },
    [password],
  )
  
  return (
    <div>
      <h1 className="text-4xl text-center mt-4">Password Generator</h1>
      <div className="flex flex-col items-center justify-center bg-gray-500 w-1/2 mx-auto h-fit py-2 px-3 mt-4 rounded-xl">
        <div className="flex flex-row items-center justify-center mt-4 w-full">
          <input 
          type="text" 
          className="p-1 rounded-lg mr-2 text-lg w-4/5 bg-slate-600 text-gray-300 outline-none"
          value={password}
          ref={passwordRef}
          placeholder="Pawword"
          readOnly
          />
          <button 
          className="bg-blue-700 px-2 py-1 rounded-xl hover:bg-blue-200"
          onClick={copyPasswordClipboard}
          >Copy</button>
          {showPopup && <div style={{ position: 'absolute', top: 20, right: 20, background: 'white', padding: 10, border: '1px solid black' }}>Password copied!</div>}
        </div>
        <div className="flex flex-row gap-7 mt-3">
          <div className="text-xl gap-2">
            <input 
            type="range" 
            id="passwordLength"  
            className="mr-2 scale-100"
            min={6}
            max={11}
            value={length}
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label htmlFor="passwordLength">length{length}</label>
          </div>
          <div className="flex flex-row gap-2 text-xl">
            <input 
            type="checkbox" 
            id="includeNumbers"  
            className="font-bold scale-150"
            defaultChecked={includeNumbers}
            onClick={() => {setincludeNumbers((prev) => !prev)}} 
            />
            <label htmlFor="includeNumbers">Numbers</label>
          </div>
          <div className="flex flex-row gap-2 text-xl">
            <input 
            type="checkbox" 
            id="includeCharacters" 
            className="scale-150"
            defaultChecked={includeCharacters}
            onClick={() => {setincludeCharacters((prev) => !prev)}}
            />
            <label htmlFor="includeCharacters">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default App;
