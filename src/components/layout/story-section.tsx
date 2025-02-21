import { Marquee } from "../magicui/marquee";

const Stories = [
    [
        {
            id: "sachin-1",
            name: "Sachin Tendulkar",
            achievement: "98 runs",
            when: "Against Pakistan, 2003 World Cup",
            description: "Sachin's 98 Against Pakistan, 2003 World Cup",
            image: "https://data1.ibtimes.co.in/en/full/599672/sachin-tendulkar.jpg",
            link: "https://www.facebook.com/watch/?v=2584290218392691",
        },
        {
            id: "sachin-2", 
            name: "Sachin Tendulkar",
            achievement: "Unbeaten 241*",
            when: "In Sydney, 2004",
            description: "Sachin's Unbeaten 241* in Sydney, 2004",
            image: "https://sc0.blr1.cdn.digitaloceanspaces.com/article/142178-vzhksconcu-1590917337.jpg",
            link: "https://www.youtube.com/watch?v=uOA25BRgSic",
        },
        {
            id: "sachin-3",
            name: "Sachin Tendulkar", 
            achievement: "200 runs",
            when: "In India vs South Africa, 2nd ODI, 2010",
            description: "Sachin's 200 in India vs South Africa, 2nd ODI, 2010",
            image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202202/sachin200_1200x768.jpeg?size=690:388",
            link: "https://www.youtube.com/watch?v=OzfdMB2bVuA",
        },
        {
            id: "sachin-4",
            name: "Sachin Tendulkar",
            achievement: "186* runs",
            when: "VS New Zealand, 1999",
            description: "Sachin Tendulkar's 186* vs New Zealand, 1999",
            image: "https://scontent.fknu1-2.fna.fbcdn.net/v/t1.6435-9/124045290_3939095289442871_5962850973004373788_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yf5HBslJwm8Q7kNvgGIe0Si&_nc_oc=AdgEbLsaydFf4w5Ga7-vPXzH2rJZtHJaInur5do1c9Dq91YwssdjaIhV2r_kexY1r1bkHZ9EQmQkxU82Xzuw066p&_nc_zt=23&_nc_ht=scontent.fknu1-2.fna&_nc_gid=Ai2_p9mZ2sjhyRNXfn_AeJc&oh=00_AYBRrzIbLnmRAlwt52BIYW9Bu0RTK5oImaVHKcDHbf9ECA&oe=67E0250A",
            link: "https://www.youtube.com/watch?v=cv0OE3wYRIg",
        },
        {
            id: "sachin-5",
            name: "Sachin Tendulkar",
            achievement: "119* runs",
            when: "VS England 1991",
            description: "Sachin's first century ever - 119* vs England 1991",
            image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/sachin-tendulkar-144726942-16x9_0.jpg?VersionId=gRtUFNvZKrUp0t4qGMg4L7sTKOP46vZz&size=690:388",
            link: "https://www.youtube.com/watch?v=G27C4AHk-Iw",
        }
    ],
    [
        {
            id: "Yuvraj-1",
            name: "Yuvraj Singh",
            achievement: "113 runs",
            when: "VS West Indies, Chennai, ICC Cricket World Cup 2011",
            description: "113 (123 balls) vs West Indies, Chennai, ICC Cricket World Cup 2011",
            image: "https://i.ytimg.com/vi/6H4KqNb1gVk/maxresdefault.jpg",
            link: "https://fb.watch/xUmU2um5I7/",
        },
        {
            id: "yuvraj-2", 
            name: "Yuvraj Singh",
            achievement: "138* runs",
            when: "VS England, Rajkot, 2008",
            description: "138* (78 balls) vs England, Rajkot, 2008",
            image: "https://i.pinimg.com/736x/ae/d6/e7/aed6e7bbc330fbde670abde0d780ba08.jpg",
            link: "https://www.youtube.com/watch?v=T3fh0XfVpA4",
        },
        {
            id: "yuvraj-3",
            name: "Yuvraj Singh", 
            achievement: "57* runs",
            when: "VS Australia, Ahmedabad, ICC Cricket World Cup 2011",
            description: "57* (65 balls) vs Australia, Ahmedabad, ICC Cricket World Cup 2011",
            image: "https://i.pinimg.com/736x/f5/64/9f/f5649fcb1d612bcf08ed35f94876f676.jpg",
            link: "https://www.facebook.com/watch/?v=2521566004721665",
        },
        {
            id: "yuvraj-4",
            name: "Yuvraj Singh",
            achievement: "169 runs",
            when: "VS Pakistan, Bangalore Test 2007",
            description: "169 vs Pakistan, Bangalore Test 2007",
            image: "https://storage.googleapis.com/cenews-bucket/News/mazcQYjLlSOMtCTJmCMW.png",
            link: "https://www.youtube.com/watch?v=u30HFt9tj9U",
        },
        {
            id: "yuvraj-5",
            name: "Yuvraj Singh",
            achievement: "58 runs off 16 balls",
            when: "VS England, Durban, World T20 2007",
            description: "58(16) vs England, Durban, World T20 2007",
            image: "https://images.mykhel.com/img/2019/09/yuvrajsingh-1568875026.jpg",
            link: "https://www.youtube.com/watch?v=8b0ubLO2MUE",
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
            image: "/Hatrick-against-Pakistan.jpg",
            link: "https://www.youtube.com/watch?v=WJXAXt8KP4U",
        },
        {
            id: "pathan-2", 
            name: "Irfan Pathan",
            achievement: "Player of the Match",
            when: "T20 World Cup final 2007",
            description: "Player-of-the-Match in 2007 T20 World Cup final",
            image: "https://dxn76xj9mnmqa.cloudfront.net/images/Irfan-Pathan_t20_world_cup_2007.width-800.jpg",
            link: "https://fb.watch/xUsDyV6wLg/",
        },
    ]
];

export default function StorySection() {
    return (
        <section className=" pb-28 pt-24 flex justify-center items-center flex-col gap-1 overflow-hidden px-4">
            <div>
                <h2 className="text-center text-[3rem] md:text-[5rem] font-display mb-12 max-w-2xl leading-tight">Classic clips of legendary players</h2>
            </div>
            <Marquee 
                className="space-x-0 [--duration:15s]"
                repeat={10}
                pauseOnHover={true}
            >
                {Stories[0].map((story) => (
                    <a key={story.id} href={story.link} className="relative flex flex-col items-center justify-center border-border border-2 rounded-lg overflow-hidden hover:[&>div]:opacity-100">
                        <img src={story.image} alt={story.description} className="md:h-60 h-52  rounded-lg w-auto" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-orange-500/50 opacity-0 transition-opacity duration-300" />
                        {/* <h1 className="absolute bottom-2 left-4 uppercase text-pretty text-white text-2xl font-bold [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">{story.description}</h1> */}
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
                        <img src={story.image} alt={story.description} className="md:h-60 h-52  rounded-lg w-auto" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-orange-500/30 opacity-0 transition-opacity duration-300" />
                        {/* <h1 className="absolute bottom-2 left-4 uppercase text-pretty text-white text-2xl font-bold [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">{story.description}</h1> */}
                    </a>
                ))}
            </Marquee>
            <Marquee 
                className="space-x-0 [--duration:15s]"
                repeat={10}
                pauseOnHover={true}
                reverse={true}
            >
                {Stories[2].map((story) => (
                    <a key={story.id} href={story.link} className="relative flex flex-col items-center justify-center border-border border-2 rounded-lg overflow-hidden hover:[&>div]:opacity-100">
                        <img src={story.image} alt={story.description} className="md:h-60 h-52  rounded-lg w-auto" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-orange-500/30 opacity-0 transition-opacity duration-300" />
                        {/* <h1 className="absolute bottom-2 left-4 uppercase text-pretty text-white text-2xl font-bold [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">{story.description}</h1> */}
                    </a>
                ))}
            </Marquee>
            <Marquee 
                className="space-x-0 [--duration:15s]"
                repeat={10}
                pauseOnHover={true}
                reverse={true}
            >
                {Stories[3].map((story) => (
                    <a key={story.id} href={story.link} className="relative flex flex-col items-center justify-center border-border border-2 rounded-lg overflow-hidden hover:[&>div]:opacity-100">
                        <img src={story.image} alt={story.description} className="md:h-60 h-52  rounded-lg w-auto" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-orange-500/30 opacity-0 transition-opacity duration-300" />
                        {/* <h1 className="absolute bottom-2 left-4 uppercase text-pretty text-white text-2xl font-bold [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">{story.description}</h1> */}
                    </a>
                ))}
            </Marquee>
        </section>
    );
}
