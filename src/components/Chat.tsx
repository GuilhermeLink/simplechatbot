'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import { useChat } from "ai/react"
import { ScrollArea } from "./ui/scroll-area"

export function Chat() {

    const { messages, input, handleInputChange, handleSubmit } = useChat({
      api: '/api/chat'
    })

    return (
        <Card className="w-[400px] bg-green-100">
        <CardHeader>
          <CardTitle className="mb-5">ChatBot</CardTitle>
          <CardDescription>Training Chatbot:</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full space-y-4">
            { messages.map(message => {
              return (
                <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-5">
                  {message.role === 'user' && (
                    <Avatar>
                      <AvatarFallback>GM</AvatarFallback>
                      <AvatarImage src="https://github.com/GuilhermeLink.png" />
                    </Avatar>  
                  )}

                  {message.role === 'assistant' && (
                    <Avatar>
                      <AvatarFallback>BT</AvatarFallback>
                      <AvatarImage src="https://github.com/millermedeiros.png" />
                    </Avatar> 
                  )}


                  <p className="leading-relaxed">
                    <span className="block font-bold text-slate-700">
                      {message.role === 'user' ? 'User' : 'AI'}:
                    </span>
                    <span className="bg-gray-200 rounded-lg ">
                      {message.content}
                    </span>
                  </p>
                </div>
              )
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input placeholder="How can i help you?" className="placeholder-opacity-50 border-2 hover:border-green-700" value={input} onChange={handleInputChange}/>
            <Button type="submit" className="bg-black border-black text-white px-4 py-2 rounded hover:bg-green-700">Send</Button>
          </form>
        </CardFooter>
      </Card>
    )
}