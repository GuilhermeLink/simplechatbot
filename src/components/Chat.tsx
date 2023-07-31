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
        <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Training Chatbot:</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] w-full space-y-4">
            { messages.map(message => {
              return (
                <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
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
                    {message.content}
                  </p>
                </div>
              )
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input placeholder="How can i help you?" value={input} onChange={handleInputChange}/>
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    )
}