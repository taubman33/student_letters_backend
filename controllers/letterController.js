const { application } = require("express")

const letters = 
[
    {
        "initials": "TW",
        "location": "CA",
        "letter": "\"Don’t worry about how hard it gets.  You got this. Look to your classmates they are your backbone.  You will never find better people to go though this experience with then them.  Study the basics, go to office hours every night, even if you don’t have questions just go.  Trust that everyone near you has the same struggles and is looking for someone just like you. Most importantly, YOU. CAN. DO. THIS\""
    },
    {
        "initials": "DL",
        "location": "FLA",
        "letter": "I believe that if you want to succeed in this course you must follow some rules. No matter how difficult it is, DO NOT compare yourself to others. Do not be shy and ask as many questions as you can. It's okay not to understand a concept right away, just keep practicing because it will click eventually. Lastly, DO NOT give up for hard work will never fail you. The light at the end of the tunnel is much closer than you think"
    },
    {
        "initials": "FA",
        "location": "NY",
        "letter": "Hey, you made it. You chose to begin this journey of learning, professional development, and personal growth. The next few weeks are gonna feel like an immense struggle, like Sisyphus rolling a boulder up a hill, only for it to fall down, and you having to start again. Just like Sisyphus, pick yourself back up, and get back at it. Keep trying. That's how you get better. Every time you try, you'll learn something new. You'll figure out a bug. You'll think, \"hey, this is starting to sorta make sense?\" That's the most important thing. Don't give up.       If you can, build a community with your cohort. They will be your best friends during this process. Be kind, help each other. Level up together. Who knows, one day that person in your cohort could be starting up their own company, and they'll remember you and want you on their team.\r\n       Nothing worth having ever came easy. Believe in yourself. Everything else will follow. Good luck!"
    },
    {
        "initials": "JS",
        "location": "TX",
        "letter": "Dear future SEI student,      Sometimes, while learning this content, or doing a lab, or a break out room, or whatever, you’re going to be like: “I don’t know what the fuck is going on.” But, it’ll be ok. You’ll get it with practice, the logic will make sense after the next lesson, it will click while you are brushing your teeth later, when you make a sandwich, or some other dumb unrelated activity. Reach out to the instructors, they know whats up.\r\n       Other times, your power will go out. You’re gonna be out of power for five days, and water too, cause why not. You’re gonna have to get snow out of the yard to flush a turd at 2300 while it is 5 degrees. And you will probably live through all of that, just to be a week behind in class. But then, all of your instructors, and peers are going to rally and help you make it through all of that.     It’ll work out, just keep on trying. It’ll click, and you’ll finish it."
    },
    {
        "initials": "KZ",
        "location": "NY",
        "letter": "Starting this program with no prior experience or background in coding was big challenge for me. Many times I felt like I may not be able to keep up with the material being presented to us, sometimes weeks at a time. But there were many others who felt the same and I was not alone. The entire class, both students and teachers, have been such a  big help in completing this program. Also taking the time after classes to practice helped tremendously. Remember that you are braver than you think, stronger than you seem, smarter than you think, and you are not alone, you are supported by the entire cohort. You got THIS!!!"
    },
    {
        "initials": "JS",
        "location": "TX",
        "letter": "Just get comfortable being uncomfortable. It's going to be fast, you will not understand everything. When lost ask questions, learn how to google errors and research the causes. Above all else keep calm, don't let the stress build up even more by panicking. Don't compare yourself to anyone, just try your best and give it your all. Lastly, don't be an island and go to office hours."
    },
    {
        "initials": "MG",
        "location": "TX",
        "letter": "Dear Future GA Students :    There's several things I'd do on a daily basis during my time at GA, without fail. I'd question myself and wonder if I'd last in the program after spending more than three hours on a single bug. I'd cry at 4am trying to finish homework in time. I'd sleep for less than two hours a night sometimes.\r\n       This will probably be one of the most challenging things you take on in life. But what you'll find, after many sleepless nights, too much coffee, lots of chit chat in breakout rooms, you'll find that it'd become one of the most rewarding things of you're life.\r\n       You may question whether you're suited for this. As an art student with no prior experience programming, I'd ask myself that question constantly. But when my code worked, my program ran, the console was clear, and I'd present in class - those questions, fears, worries, and concerns would wash away.\r\n       If you're questioning whether you're good enough - you are. If you're worried whether you're too slow or too behind - you're right where you need to be."
    },
    {
        "initials": "JC",
        "location": "IL",
        "letter": "I don't know how many years went by where, in the deepest recesses of my mind, a voice was quietly whispering to me \"You deserve to be something more\", and, in that time, how quick I was to dismiss it. But the day I decided to give that voice a proper listen was when I made the move to join a coding boot camp. To say nothing of the quality of the institute or the course composition, making the choice to try to be better changed my life in such a profound way. Not only from the skills I learned or the discipline instilled in me, but for the people that made that same choice with me. My cohort-mates, the fine folks I've learned to know and love in the last 3 months changed my life and and we all became something more, together.\r\n       So make the choice to be something more, no matter how daunting or insurmountable it may seem. You won't be alone in making it."
    },
    {

        "initials": "BR",
        "location": "ME",
        "letter": "This course will be challenging. But you will learn so much information that will be useful to you in the future. There will be days when you'll feel like giving up. There will be times when you have no idea what you're typing. Keep typing anyway. All of the smaller pieces eventually come together to form a bigger picture. And you'll be able to start building everything on your own. DO NOT be afraid to ask questions, or for extra help. The instructors want nothing but for you to succeed. And you will. You've got this."
    },
    {

        "initials": "MA",
        "location": "CA",
        "letter": "Your commitment to yourself will take you through this journey. It's going to be challenging, but it will be worth the hours in front of your computer. Stay hydrated, meal prep, and remember why you decided to take this cohort on. It's not forever, although it might feel like it at times, and it will fly by. Believe me, if I can do it, you a million percent can do it. Give yourself a break and keep moving forward."
    },
    {
        "initials": "KW",
        "location": "UT",
        "letter": "You have begun quite a journey. You will make SO much progress in the coming weeks, it is hard to really imagine the progress you will make. Undoubtedly you will find yourself feeling in over your head, and overwhelmed by the pace of the class.\r\n       Please take this from me, a student who came in to this course with no prior experience and at one point was feeling ready to break down emotionally due to stress on a daily basis - You will become more comfortable. You will get your head back above the water. Believe in yourself, put one foot in front of the other and just make it one day at a time. You will get there, and you will surprise yourself by how much you learn. Soon enough you will feel like you are on top of the world. Keep going!"
    },
    {
        "initials": "MA",
        "location": "IN",
        "letter": "Before coming into this course, you have to understand this is an intense software immersive course and you will encounter multiple errors but don't give up! Failure is just another step closer to success, Being fearful of failure limits what you can do. Like Warren Buffet said, “the more you learn, the more you earn.” Learn to be uncomfortable to discover your limits. Overcoming your fear of failure will not only make you a better person, but it will make life easier. It will open a variety of opportunities. “Once you become fearless, life becomes limitless.” The best investment you can make is in yourself."
    },
    {
        "initials": "ND",
        "location": "IL",
        "letter": "First off congrats on coming this far and making the commitment that takes guts, as for the journey your about to take.. it's going to be difficult, but almost nothing worth having comes easy. Believe in yourself and the people offering you help. there are a thousand things I could say but you'll learn them all soon enough so allow me to be cheesy and say don't give up, you only lose when you stop fighting. P.S. Jeremy loves to help so blow up his inbox at 3AM, he loves that."
    }
]


const getLetters = (req,res)=> {
    res.send(letters)
}


module.exports = getLetters
