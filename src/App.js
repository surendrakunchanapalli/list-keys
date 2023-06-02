import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    UniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'surendra',
    role: 'Software Developer',
  },
  {
    UniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'raju',
    role: 'Software Developer',
  },
  {
    UniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'siva',
    role: 'Software Developer',
  },
  {
    UniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Ramu',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.UniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
