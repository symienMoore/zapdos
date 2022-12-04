import React, { useState } from 'react'



const NoChatsFound = () => {
  return (
    <div>
      <h1>Oh no! Lokks like you havent been chatting with anyone!</h1>
    </div>
  )
}

const ChatsDisplay = (props) => {
  return (
    <div>

    </div>
  )
}

const Chat = () => {
  const [chats, setChats] = useState<any[]>([])
  return (
    <div>
        {chats ?
          <ChatsDisplay /> :
          <NoChatsFound />
        }
    </div>
  )
}

export default Chat