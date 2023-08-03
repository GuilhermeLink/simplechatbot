import { Chat } from "@/components/chat";
import img from "@/lib/background.jpg"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${img})` }}>
      <Chat />
    </div>
  )
}
