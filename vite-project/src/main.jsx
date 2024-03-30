import ReactDOM from 'react-dom/client'
import React from 'react'

// import App from './App.jsx'

// function MyApp()  { // babble or any transpilers convert this in an object like ReactElement
//   return (
//     <div>
//        <h1>Custom App !!</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: "click here to visit google"
// }

// const anotherElement =  <a href="https://www.google.com" target="_blank">Visit Google</a>

const anotherUser = "mohd shoaib again"
const ReactElement = React.createElement(
  'a',
  {href: "https://google.com", target: '_blank'},
  "click here to visit the google ",
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root'))
.render(
  // <App />
  // <MyApp/> // you can call this as a method MyApp() because this is a function also
  ReactElement 
  // anotherElement // 
  // reactElement
)

// ReactElement is not working because here we are directly passing an object which has some keys and values but we don't know that what type of keys and values render expects and when we pass a tag then it converts it in an object of its pre-decided structure and then it works.