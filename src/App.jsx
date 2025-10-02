import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import Data from "./components/data.js"

export default function App(){
  const entryElement = Data.map(data=>{
    return <Entry
    key={data.id}
    {...data}
    />
  })
  return(
    <>
      <Header/>
      <main className="container">
        {entryElement}
      </main>
    </>
  )
}