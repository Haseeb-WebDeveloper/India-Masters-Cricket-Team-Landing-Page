import { Marquee } from "../magicui/marquee";

const Stories = [
    [
        {
            id: "sachin-1",
            name: "Sachin Tendulkar",
            achievement: "98 runs",
            when: "Against Pakistan, 2003 World Cup",
            description: "Sachin's 98 Against Pakistan, 2003 World Cup",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "sachin-2", 
            name: "Sachin Tendulkar",
            achievement: "Unbeaten 241*",
            when: "In Sydney, 2004",
            description: "Sachin's Unbeaten 241* in Sydney, 2004",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "sachin-3",
            name: "Sachin Tendulkar", 
            achievement: "200 runs",
            when: "In India vs South Africa, 2nd ODI, 2010",
            description: "Sachin's 200 in India vs South Africa, 2nd ODI, 2010",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "sachin-4",
            name: "Sachin Tendulkar",
            achievement: "186* runs",
            when: "VS New Zealand, 1999",
            description: "Sachin Tendulkar's 186* vs New Zealand, 1999",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "sachin-5",
            name: "Sachin Tendulkar",
            achievement: "119* runs",
            when: "VS England 1991",
            description: "Sachin's first century ever - 119* vs England 1991",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        }
    ],
    [
        {
            id: "yuvraj-1",
            name: "Yuvraj Singh",
            achievement: "113 runs",
            when: "VS West Indies, Chennai, World Cup 2011",
            description: "Yuvraj's 113 vs West Indies, World Cup 2011",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "yuvraj-2",
            name: "Yuvraj Singh",
            achievement: "138* runs",
            when: "VS England, Rajkot, 2008",
            description: "Yuvraj's 138* vs England, Rajkot 2008",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "yuvraj-3",
            name: "Yuvraj Singh",
            achievement: "57* runs",
            when: "VS Australia, World Cup 2011",
            description: "Yuvraj's 57* vs Australia, World Cup 2011",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "yuvraj-4",
            name: "Yuvraj Singh",
            achievement: "169 runs",
            when: "VS Pakistan, Bangalore Test 2007",
            description: "Yuvraj's 169 vs Pakistan, Bangalore 2007",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "yuvraj-5",
            name: "Yuvraj Singh",
            achievement: "58 runs off 16 balls",
            when: "VS England, World T20 2007",
            description: "Yuvraj's 58(16) vs England, World T20 2007",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        }
    ],
    [
        {
            id: "raina-1",
            name: "Suresh Raina",
            achievement: "89 runs",
            when: "VS England, 2006",
            description: "Raina's 89 vs England, 2006",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "raina-2",
            name: "Suresh Raina",
            achievement: "101 runs",
            when: "VS South Africa, 2010",
            description: "Raina's 101 vs South Africa, 2010",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "raina-3",
            name: "Suresh Raina",
            achievement: "100 runs",
            when: "VS England, 2014",
            description: "Raina's 100 vs England, 2014",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "raina-4",
            name: "Suresh Raina",
            achievement: "101 runs off 60 balls",
            when: "VS South Africa, World T20 2010",
            description: "Raina's 101(60) vs South Africa, World T20 2010",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "raina-5",
            name: "Suresh Raina",
            achievement: "110* runs",
            when: "VS Zimbabwe, World Cup 2015",
            description: "Raina's 110* vs Zimbabwe, World Cup 2015",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        }
    ],
    [
        {
            id: "pathan-1",
            name: "Irfan Pathan",
            achievement: "Hat-trick",
            when: "VS Pakistan",
            description: "Pathan's Hatrick against Pakistan",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "pathan-2",
            name: "Irfan Pathan",
            achievement: "Player of the Match",
            when: "T20 World Cup final 2007",
            description: "Player-of-the-Match in 2007 T20 World Cup final",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "pathan-3",
            name: "Irfan Pathan",
            achievement: "5 wickets",
            when: "VS Pakistan 2006",
            description: "Fifer against Pakistan 2006",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            id: "pathan-4",
            name: "Irfan Pathan",
            achievement: "First Test century",
            when: "2007",
            description: "Maiden Test century in 2007",
            image: "banner.jpeg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        }
    ]
];

export default function StorySection() {
    return (
        <section className="bg-foreground/5 pb-28 pt-24 flex justify-center items-center flex-col gap-1">
            <div>
                <h2 className="text-center text-[4rem] font-display mb-12 max-w-2xl leading-tight">Classic clips of legendary players</h2>
            </div>
            <Marquee 
                className="space-x-0 [--duration:15s]"
                repeat={10}
                pauseOnHover={true}
            >
                {Stories[0].map((story) => (
                    <a key={story.id} href={story.link} className="relative flex flex-col items-center justify-center border-border border-2 rounded-lg overflow-hidden hover:[&>div]:opacity-100">
                        <img src={story.image} alt={story.description} className="h-60 rounded-lg w-auto" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-orange-500/50 opacity-0 transition-opacity duration-300" />
                        <h1 className="absolute top-2 left-4 uppercase text-pretty text-white text-2xl font-bold [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">{story.description}</h1>
                    </a>
                ))}
            </Marquee>
            <Marquee 
                className="space-x-0 [--duration:15s]"
                repeat={10}
                pauseOnHover={true}
                reverse={true}
            >
                {Stories[1].map((story) => (
                    <a key={story.id} href={story.link} className="relative flex flex-col items-center justify-center border-border border-2 rounded-lg overflow-hidden hover:[&>div]:opacity-100">
                        <img src={story.image} alt={story.description} className="h-60 rounded-lg w-auto" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-orange-500/30 opacity-0 transition-opacity duration-300" />
                        <h1 className="absolute top-2 left-4 uppercase text-pretty text-white text-2xl font-bold [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">{story.description}</h1>
                    </a>
                ))}
            </Marquee>
        </section>
    );
}
