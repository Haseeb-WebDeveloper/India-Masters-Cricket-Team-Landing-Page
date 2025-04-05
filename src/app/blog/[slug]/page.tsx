'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'

// Mock data - replace with your actual data source
const posts = {
  "rohit-sharma-yuvi-friendship": {
    title: "A Tale of Friendship, Support, and Cricketing Triumphs of Rohit Sharma and Yuvraj Singh",
    date: "2024-04-04",
    featuredImage: "/blog/rohit-sharma-yuvi-friendship.png",
    category: "Player Stories",
    content: `
      <p class="text-lg leading-relaxed mb-6">Indian Cricketer Rohit Sharma previously spoke about a turning point in his life that served as a lifeline to overcome a period of uncertainty in his career after being left out of the 2011 ODI World Cup squad. Despondent and not knowing what to do with himself, Rohit received some unexpected support from the only player he had taken for granted, then—Yuvraj Singh.</p>

      <p class="text-lg leading-relaxed mb-6">In a poignant interview, Rohit remembered the time when Yuvraj had called him home for dinner to cheer him up. "I was low and in my room, not knowing what to do next," Rohit recalled. "I recall Yuvi calling me to his bedroom and treating me to dinner. He told me how it feels to be left behind and reassured me that I had many years more to live as a cricketer."</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Words of Motivation</h2>
      <p class="text-lg leading-relaxed mb-6">Yuvraj's words were reassuring; they were also motivating for Rohit. "He said, 'The positive thing is that you still have so many years to go. As we play in the World Cup, use this time to put in hard work on your game, skills, and return. There's no way you won't play for India or lose the World Cup opportunity,", Rohit reminisced during an interview with PTI.</p>

      <p class="text-lg leading-relaxed mb-6">This strong motivation made Rohit regain his determination and focus. He made an unbelievable comeback after the disappointment of 2011 and created a position in the team for the 2015 and 2019 World Cups. His 2019 World Cup performance was also remarkable, as he emerged as the top run-scorer of the tournament and scored a record 648 runs with five centuries. And now, as he is ready to lead India for the first time in the ODI World Cup, he will begin their campaign against Australia on October 8 in Chennai.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Yuvraj's Impact in IML 2025</h2>
      <p class="text-lg leading-relaxed mb-6">To this motivational tale, Yuvraj Singh's recent appearance in the IML 2025, wherein he reignited the passion of cricket enthusiasts with his brilliant play, has been added. His cricketing abilities in the league not just established his age-old worth but also provided a new lease of life to the passion of cricket, inspiring a lot of prospective players and reminding individuals of his legendary status.</p>

      <p class="text-lg leading-relaxed mb-6">Yuvraj's presence in IML 2025 is not participation; it's a celebration of comeback and sportsmanship. His presence has refreshed the league with new life, giving a platform for not just him but other sporting enthusiasts as well to flaunt their talent, leading to an interesting sporting culture.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">A Legacy of Mentorship</h2>
      <p class="text-lg leading-relaxed mb-6">As Rohit enters this World Cup series with Yuvraj's words of motivation ringing in his ears, it is evident that the relationship between these two cricketers is the very essence of the mentorship and motivation culture that is so crucial in sports. They are the story of determination, development, and the sheer faith in second chances, both on and off the field.</p>
    `
  },
  "sachin-iml-2025": {
    title: "The Master Blaster's Big Comeback: Sachin's IML 2025 Saga",
    date: "2024-04-04", 
    featuredImage: "/blog/sachin-iml-2025.jpg",
    category: "Player Spotlight",
    content: `
      <p class="text-lg leading-relaxed mb-6">When you think of cricket greatness, one name stands above all others - Sir Sachin Ramesh Tendulkar. Born on April 24, 1973, this Indian cricket icon has left an indelible mark on the sport that continues to inspire generations.</p>

      <p class="text-lg leading-relaxed mb-6">From his first match against Pakistan in 1989 until his retirement in 2013, Sachin's career was phenomenal. He scored a whopping 34,357 runs in all formats, with 18,426 runs in ODIs and 15,921 runs in Tests. His 100 international centuries stand above all in the history of cricket.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Why is he called the "God of Cricket"?</h2>
      <p class="text-lg leading-relaxed mb-6">Let's deconstruct:</p>
      <ul class="list-disc pl-6 mb-6 text-lg leading-relaxed">
        <li>Record-breaker: 200 Test matches, 463 ODIs, 51 Test centuries, 49 ODI centuries - the list is endless!</li>
        <li>Endurance: A career that lasted 22 years and 91 days.</li>
        <li>Consistency: 1,894 ODI runs in one calendar year (1998).</li>
        <li>World Cup savior: 673 runs in the 2003 World Cup, the most in one edition.</li>
        <li>Early success: The only player to have five Test centuries before the age of 20.</li>
      </ul>

      <p class="text-lg leading-relaxed mb-6">Sachin's influence went beyond the boundary lines. He influenced cricketers such as MS Dhoni, Virat Kohli, and Rohit Sharma. His passion for the game led to many honors, including the Padma Shri, Rajiv Gandhi Khel Ratna, and Arjuna Award.</p>

      <p class="text-lg leading-relaxed mb-6">When Sachin retired from international cricket in 2013, fans believed they'd seen the last of the Master Blaster on the pitch. But cricket had a surprise left up its sleeve!</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">The Return That Shook Cricket's World</h2>
      <p class="text-lg leading-relaxed mb-6">In a turn of events nobody predicted, Sachin Tendulkar said he would make his competitive return to cricket in 2025, aged 51! The reason? The launch of the first International Masters League (IML), a T20 tournament that would comprise iconic retired stars.</p>

      <p class="text-lg leading-relaxed mb-6">Sachin led the India Masters team as its captain, generating waves of euphoria among the cricket fraternity. People questioned if the Master Blaster still had magic in him, but Sachin soon put those doubts to rest.</p>

      <p class="text-lg leading-relaxed mb-6">Leading from the front, Sachin demonstrated his ageless class and unimpaired skills throughout the tournament. His strategic insight and capacity to motivate his team were in full evidence as the India Masters went through the league stages with ease.</p>

      <p class="text-lg leading-relaxed mb-6">Sachin Tendulkar's Success Story, from being a prodigy to the "God of Cricket" and now the victorious comeback captain, solidifies his place in the pantheon of all-time great sportspersons. His IML 2025 win is also a testament that with passion, hard work, and talent, even the unachievable becomes possible.</p>

      <p class="text-lg leading-relaxed mb-6">The Sachin Tendulkar legacy just keeps building, inspiring cricket fans through the ages and demonstrating that some legends don't just die - they improve with age!</p>
    `
  },
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  
  const post = posts[slug as keyof typeof posts]

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl">Post not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-32 md:py-48 border-b border-foreground/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Navigation */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              {/* <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div> */}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          {/* <div className="mt-12 flex items-center justify-center gap-4 border-t pt-8">
            <span className="text-muted-foreground">Share this article:</span>
            <button className="p-2 rounded-full hover:bg-accent">
              <Share2 className="w-5 h-5" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
} 