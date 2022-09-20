import { React, useState } from 'react'

const ToDoApp = () => {
  const toDoData = [
    {
      id:0,
      topic: "react-router",
      task: "leaderboard",
    },
    {
      id:1,
      topic: "react-hooks",
      task: "contact-manager",
    },
    {
      id:2,
      topic: "useState",
      task: "Counter",
    },
    {
      id:3,
      topic: "useEffect",
      task: "Toggle",
    }
  ]

  const [toDoList, setMyToDoList] = useState(toDoData)

  const handleState=(id)=>{
    const myNewToDoList = toDoList.filter((currElement)=>{
      return currElement.id!==id;
    })

    setMyToDoList(myNewToDoList)
  }

  return (
    <>
      <div className='alignment top'> 

        {
          toDoList.map((list) => {
            return (
              <>
                <div className='box'>
                  <h1 key={list.id}>Topic: {list.topic}</h1>
                  <h2 key={list.id}>Task: {list.task}</h2>
                  <button className='btnStyle' onClick={()=>handleState(list.id)}>remove</button>
                </div> <br/>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default ToDoApp