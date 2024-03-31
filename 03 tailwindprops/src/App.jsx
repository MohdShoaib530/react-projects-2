import './App.css'
import Card from './components/Card'

function App() {
  const userDetails = {
    name: 'mohd shoaib',
    email: 'mohd@gmail.com'
  }
  return (
    <>
      <h1 className='bg-green-600 rounded-lg p-4 text-black mb-4'>Tailwind testing</h1>
      <Card username="mohd shoaib" someObj={userDetails}/>
    </>
  )
}

export default App
