const { getBuffer } = require('../../lib/myfunc');
const axios = require('axios'); 
const fetch = require('node-fetch');


module.exports = [
 {
  command: ["dare"],
  operate: async ({ Kango, m, from }) => {
    const dares = [
      "Eat 2 tablespoons of rice without any side dishes.",
      "Spill a secret about yourself.",
      "Call your crush now and send a screenshot.",
      "Drop only emojis for 1 day in group chats.",
      "Sing the chorus of your favorite song.",
      "Change your name to 'I'm a daredevil' for 24 hours.",
      "Tell a random person 'I was told I'm your twin, separated at birth.'",
      "Pretend to be possessed by an animal for 30 minutes.",
      "Record yourself reading a funny quote and send it here.",
      "Prank chat an ex and say 'I still love you.'",
      "Change your profile picture to a funny meme for 5 hours.",
      "Type only in Spanish for 24 hours.",
      "Use a funny voice note greeting for 3 days.",
      "Drop a song quote and tag a suitable member.",
      "Say 'You're beautiful' to someone you admire.",
      "Act like a chicken in front of your parents.",
      "Read a page from a random book aloud and send it here.",
      "Howl like a wolf for 10 seconds outside.",
      "Make a short dance video and put it on your status.",
      "Eat a raw piece of garlic.",
      "Show the last five people you texted and what the messages said.",
      "Put your full name on status for 5 hours.",
      "Make a twerk dance video and put it on your status.",
      "Call your bestie and say 'I love you.'",
      "Put your photo without filters on your status.",
      "Say 'I love you' to someone you secretly admire.",
      "Send a voice note saying 'Can I call you baby?'",
      "Change your name to 'I'm a daredevil' for 24 hours.",
      "Use a Bollywood actor's photo as your profile picture.",
      "Put your crush's photo on status with the caption 'My crush.'",
      "Write 'I love you' to someone and send a screenshot.",
      "Slap your butt and send the sound effect.",
      "Shout 'Bravo!' and send it here.",
      "Snap your face and send it here.",
      "Send your photo with the caption 'I'm feeling confident.'",
      "Kiss your mom or dad and say 'I love you.'",
      "Put your dad's name on status for 5 hours.",
      "Make a TikTok dance challenge video.",
      "Break up with your best friend for 5 hours without telling them.",
      "Tell a friend you love them and want to marry them.",
    ];

    const dareMessage = dares[Math.floor(Math.random() * dares.length)];
    const buffer = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg');

    await Kango.sendMessage(
      from,
      {
        image: buffer,
        caption: `*DARE*\n${dareMessage}`,
      },
      { quoted: m }
    );
  },
},
 {
  command: ['fact'],
  operate: async ({ m, reply }) => {
    try {
      const { data } = await axios.get(`https://nekos.life/api/v2/fact`);
      return reply(`*FACT:* ${data.fact}\n`);
    } catch (err) {
      console.error(err);
      return reply('*An error occurred while fetching the fact.*');
    }
  }
},
 {
  command: ['jokes', 'joke'],
  operate: async ({ Kango, m, reply }) => {
    try {
      let res = await fetch("https://api.chucknorris.io/jokes/random");
      let json = await res.json();
      await Kango.sendMessage(m.chat, { text: json.value }, { quoted: m });
    } catch (error) {
      console.error('Error fetching joke:', error);
      reply('An error occurred while fetching a joke.');
    }
  }
},
 {
  command: ['memes', 'meme'],
  operate: async ({ Kango, m, reply }) => {
    try {
      let res = await fetch("https://api.imgflip.com/get_memes");
      let json = await res.json();

      for (let i = 0; i < 5; i++) {
        let meme = json.data.memes[i];
        await Kango.sendMessage(m.chat, { image: { url: meme.url } }, { quoted: m });
      }
    } catch (error) {
      console.error('Error fetching memes:', error);
      reply('An error occurred while fetching memes.');
    }
  }
},
 {
  command: ['quotes'],
  operate: async ({ m, reply }) => {
    try {
      const { data } = await axios.get(`https://favqs.com/api/qotd`);
      const textquotes = `*QUOTE:* ${data.quote.body}\n\n*AUTHOR:* ${data.quote.author}`;
      return reply(textquotes);
    } catch (err) {
      console.error(err);
      return reply('*An error occurred while fetching the quote.*');
    }
  }
},
 {
  command: ['trivia'],
  operate: async ({ Kango, m, reply }) => {
    try {
      let res = await fetch("https://opentdb.com/api.php?amount=1");
      let json = await res.json();

      let question = json.results[0].question;
      let answer = json.results[0].correct_answer;

      await Kango.sendMessage(m.chat, { text: `Question: ${question}\n\nThink you know the answer? Sending the correct answer after 20 seconds` }, { quoted: m });
      
      setTimeout(async () => {
        await Kango.sendMessage(m.chat, { text: `Answer: ${answer}` });
      }, 20000); // 20 seconds
    } catch (error) {
      console.error('Error fetching trivia question:', error);
      reply('An error occurred while fetching the trivia question.');
    }
  }
},
 {
  command: ["truth"],
  operate: async ({ Kango, m, from }) => {
    const truths = [
      "What's your biggest fear?",
      "Have you ever lied to your best friend?",
      "What's your deepest secret?",
      "Who's your secret crush?",
      "What's the biggest mistake you've ever made?",
      "Have you ever cheated on a test?",
      "What's the most embarrassing thing that's ever happened to you?",
      "Do you have a hidden talent?",
      "What's the biggest lie you've ever told?",
      "Have you ever been in love?",
      "What's the most spontaneous thing you've ever done?",
      "Who's the person you trust most?",
      "What's the biggest risk you've ever taken?",
      "Have you ever regretted something?",
      "What's the most memorable gift you've received?",
      "Have you ever had a crush on someone older?",
      "What's the biggest lesson you've learned?",
      "Have you ever broken someone's heart?",
      "What's the most exciting thing you've done?",
      "Do you believe in soulmates?",
      "What's the biggest challenge you've faced?",
      "Have you ever kept a secret from your parents?",
      "What's the most creative thing you've done?",
      "Have you ever felt betrayed?",
      "What's the biggest adventure you've been on?",
      "Have you ever had a rival?",
      "What's the most thoughtful thing someone's done for you?",
      "Have you ever forgiven someone?",
      "What's the biggest obstacle you've overcome?",
      "Do you believe in karma?",
      "What's the most romantic thing someone's done for you?",
      "Have you ever taken a risk for love?",
      "What's the biggest surprise you've ever received?",
      "Have you ever had a paranormal experience?",
      "What's the most inspiring story you've heard?",
      "Have you ever helped someone in need?",
      "What's the biggest accomplishment you're proud of?",
    ];

    const truthMessage = truths[Math.floor(Math.random() * truths.length)];
    const buffer = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg');

    await Kango.sendMessage(
      from,
      {
        image: buffer,
        caption: `*TRUTH*\n${truthMessage}`,
      },
      { quoted: m }
    );
  },
}, 
 {
  command: ["pickupline"],
  operate: async ({ m: _0x3ebbf5, reply: _0x438fc8 }) => {
    try {
      const { data: _0x11d46b } = await axios.get("https://apis.davidcyriltech.my.id/pickupline");
      return _0x438fc8("*PICKUP LINE:* " + _0x11d46b.pickupline + "\n");
    } catch (_0x84a289) {
      console.error(_0x84a289);
      return _0x438fc8("*An error occurred while fetching the pickup line.*");
    }
  }
},
 {
  command: ['truthdetector', 'liedetector'],
  operate: async ({ m, reply }) => {
    if (!m.quoted) return reply(`Please reply to the message you want to detect!`);

    let responses = [
      "That's a blatant lie!",
      "Truth revealed!",
      "Lie alert!",
      "Hard to believe, but true!",
      "Professional liar detected!",
      "Fact-check: TRUE",
      "Busted! That's a lie!",
      "Unbelievable, but FALSE!",
      "Detecting... TRUTH!",
      "Lie detector activated: FALSE!",
      "Surprisingly, TRUE!",
      "My instincts say... LIE!",
      "That's partially true!",
      "Can't verify, try again!",
      "Most likely, TRUE!",
      "Don't believe you!",
      "Surprisingly, FALSE!",
      "Truth!",
      "Honest as a saint!",
      "Deceptive much?",
      "Absolutely true!",
      "Completely false!",
      "Seems truthful.",
      "Not buying it!",
      "You're lying through your teeth!",
      "Hard to believe, but it's true!",
      "I sense honesty.",
      "Falsehood detected!",
      "Totally legit!",
      "Lies, lies, lies!",
      "You can't fool me!",
      "Screams truth!",
      "Fabrication alert!",
      "Spot on!",
      "Fishy story, isn't it?",
      "Unquestionably true!",
      "Pure fiction!"
    ];

    let result = responses[Math.floor(Math.random() * responses.length)];
    let replyText = `*RESULT*: ${result}`;

    await reply(replyText);
  }
},
 {
  command: ['xxqc'],
  operate: async ({ Kango, m, reply, prefix, command, text }) => {
    if (!text) {
      return reply(`Example: ${prefix + command} pink hello\n\nColour list\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`);
    }
    
    if (text.length > 100) return reply(`Max 100 characters.`);

    let [color, ...message] = text.split(" ");
    message = message.join(" ");
    
    const colorMap = {
      "pink": "#f68ac9",
      "blue": "#6cace4",
      "red": "#f44336",
      "green": "#4caf50",
      "yellow": "#ffeb3b",
      "purple": "#9c27b0",
      "darkblue": "#0d47a1",
      "lightblue": "#03a9f4",
      "ash": "#9e9e9e",
      "orange": "#ff9800",
      "black": "#000000",
      "white": "#ffffff",
      "teal": "#008080",
      "lightpink": "#FFC0CB",
      "chocolate": "#A52A2A",
      "salmon": "#FFA07A",
      "magenta": "#FF00FF",
      "tan": "#D2B48C",
      "wheat": "#F5DEB3",
      "deeppink": "#FF1493",
      "fire": "#B22222",
      "skyblue": "#00BFFF",
      "brightskyblue": "#1E90FF",
      "hotpink": "#FF69B4",
      "lightskyblue": "#87CEEB",
      "seagreen": "#20B2AA",
      "darkred": "#8B0000",
      "orangered": "#FF4500",
      "cyan": "#48D1CC",
      "violet": "#BA55D3",
      "mossgreen": "#00FF7F",
      "darkgreen": "#008000",
      "navyblue": "#191970",
      "darkorange": "#FF8C00",
      "darkpurple": "#9400D3",
      "fuchsia": "#FF00FF",
      "darkmagenta": "#8B008B",
      "darkgray": "#2F4F4F",
      "peachpuff": "#FFDAB9",
      "darkishgreen": "#BDB76B",
      "darkishred": "#DC143C",
      "goldenrod": "#DAA520",
      "darkishgray": "#696969",
      "darkishpurple": "#483D8B",
      "gold": "#FFD700",
      "silver": "#C0C0C0"
    };

    const backgroundColor = colorMap[color.toLowerCase()];

    if (!backgroundColor) return reply("The selected color is not available.");

    const pushname = await Kango.getName(m.sender);
    const profilePic = await Kango.profilePictureUrl(m.sender, "image").catch(() => "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60");

    let obj = {
      type: "quote",
      format: "png",
      backgroundColor,
      width: 512,
      height: 768,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: pushname,
            photo: { url: profilePic }
          },
          text: message,
          replyMessage: {}
        }
      ]
    };
    
    try {
      let response = await axios.post("https://bot.lyo.su/quote/generate", obj, { headers: { "Content-Type": "application/json" } });
      let buffer = Buffer.from(response.data.result.image, "base64");
      
      Kango.sendImageAsSticker(m.chat, buffer, m, {
        packname: `${global.packname}`,
        author: `${global.author}`,
      });
    } catch (error) {
      console.error('Error generating quote:', error);
      reply("An error occurred while generating the quote.");
    }
  }
},
];
