"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const articles = [
    {
      category: "Technology",
      title: "The future of AI in software development",
      description: "Explore how artificial intelligence is revolutionizing software development and enhancing productivity. Discover how these innovations are transforming the software...",
      author: {
        name: "John Smith",
        avatar: "/placeholder.svg",
        initials: "JS"
      },
      date: "July 14, 2021",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600&text=AI+Code",
        "/placeholder.svg?height=400&width=600&text=Machine+Learning"
      ]
    },
    {
      category: "Design",
      title: "Designing for the future: trends and insights",
      description: "Stay ahead of the curve with the latest design trends and insights. Our design team shares their perspective on what's next in the world of digital design...",
      author: {
        name: "Kate Morrison",
        avatar: "/placeholder.svg",
        initials: "KM"
      },
      date: "July 14, 2021",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600&text=UI+Design",
        "/placeholder.svg?height=400&width=600&text=UX+Trends"
      ]
    },
    {
      category: "Engineering",
      title: "Pioneering sustainable engineering solutions",
      description: "Learn about our commitment to sustainability and the innovative engineering solutions we're developing to create a more sustainable future for all...",
      author: {
        name: "Trevor Henderson",
        avatar: "/placeholder.svg",
        initials: "TH"
      },
      date: "July 14, 2021",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600&text=Green+Tech",
        "/placeholder.svg?height=400&width=600&text=Sustainable+Solutions"
      ]
    },
    {
      category: "Product",
      title: "Maximizing efficiency with our latest product updates",
      description: "Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed look at the latest features and improvements...",
      author: {
        name: "Travis Howard",
        avatar: "/placeholder.svg",
        initials: "TH"
      },
      date: "July 14, 2021",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600&text=Product+Features",
        "/placeholder.svg?height=400&width=600&text=Efficiency+Boost"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background text-white">
     
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors cursor-pointer" 
              onClick={() => router.push(`http://localhost:3000/u/My-Lands/${index}`)}
            >
              <CardHeader className="p-0">
                <Image
                  src={article.images[0]}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">
                  {article.category}
                </Badge>
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-400 text-sm">{article.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={article.author.avatar} />
                    <AvatarFallback>{article.author.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{article.author.name}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-400">{article.date}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

