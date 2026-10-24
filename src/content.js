// ★ EDIT THIS FILE ONLY ★

const content = {
  // --- Background music ---
  // Put your .mp3 file in public/music/ and set the filename here
  // Set to null to hide the music button
  music: '/music/music.mp3',

  // --- Secret Date / Password Protection ---
  password: {
    code: '2910',
    title: 'enter a secret date',
    subtitle: 'a date only we know ♡',
    buttonText: 'UNLOCK ♡',
    errorMessages: [
      'ماتوقعت تنسين ميلادچ يمعوده',
      'يمعوده تاريخ ميلادچ',
      'دهاچ الرمز 2910',
    ],
    sticker: '/images/hello-kitty-crying.jpg',
  },

  welcome: {
    greeting: 'hello ',
    name: 'my love',
    question: 'would you like to open your gift?',
    yesButton: 'YES PLEASE',
    noButton: 'NO THANKS',
  },

  noThanks: {
    message: "i promise you'll like it",
    tryAgainButton: 'TRY AGAIN',
  },

  menu: {
    title: 'pick a gift',
    subtitle: 'choose one to open ↓',
    items: [
      { id: 'memories', icon: '📸', sticker: '/images/hello-kitty-camera.jpg', label: 'Captured\nMemories' },
      { id: 'flowers', icon: '🌷', sticker: '/images/hello-kitty-flowers.jpg', label: 'Virtual\nFlowers' },
      { id: 'song', icon: '🎵', sticker: '/images/hello-kitty-music.jpg', label: 'our\nsong' },
      { id: 'letter', icon: '💌', sticker: '/images/hello-kitty-cake.jpg', label: 'Love\nLetter' },
    ],
  },

  memories: {
    title: 'our memories',
    returnButton: 'RETURN',
    images: [
      { src: '/images/memory1.jpg', label: '❤️', tag: 'my fav' },
      { src: '/images/memory2.jpg', label: '❤️', tag: 'cute' },
      { src: '/images/memory3.jpg', label: '❤️', tag: 'forever' },
      { src: '/images/memory4.jpg', label: '❤️', tag: 'love' },
      { src: '/images/memory5.jpg', label: '❤️', tag: 'always' },
      { src: '/images/memory6.jpg', label: '❤️', tag: 'mine' },
      { src: '/images/memory7.jpg', label: '❤️', tag: 'us' },
    ],
  },



  flowers: {
    title: 'for you',
    returnButton: 'RETURN',
    flowerName: 'TULIP',
    flowerSubtitle: 'just like you — rare & beautiful',
    // ملحوظة: النصوص مكتوبة بـ backticks (`) عشان تقدر تستخدم الأبوستروف (') براحتك من غير أي إيرور
    poems: [
      `"أحبچ وأحب كل شيء يخصچ"`,
      `"أهيم بعيونچ اللي من شفتهن ماشفت بعدهم شي"`,
      `"كلشي حلو يذكرني بيچ"`,
      `"أم جهالي♥️"`,
      `"أم بيتي"`,
      `"مرتي وتاج راسي"`,
      `"عيوني والدنيه ومابيها"`,
      `"كل ناسي وأهلي"`,
    ],
  },

  song: {
    title: 'our song',
    returnButton: 'RETURN',
    // Put your .mp3 in public/music/ and update this path:
    audioSrc: '/music/music.mp3',
    remindsText: 'this song always makes me think of you',
    songTitle: 'our song',
    artist: 'for you 🎵',
    highlight: 'every lyric feels like us 💕',
  },

  letter: {
    title: 'a letter',
    returnButton: 'RETURN',
    message: ` الى محبوبتي 

كُل عام وأنتِ أجمل وأغلى شخص على قلبي، كُل عام وأنتِ ألي، كُل عام وأنتِ مرتي وأم جهالي، كُل عام وأنتِ أجمل ملاك شافته عيني.
أتمنى من الله يخليچ أسعد انسانه وأعلى المراتب لان والله فرحتچ من فرحتي وحزنچ من حزني، خليچ فرحانه لان مايهون علي زعل البرينسيس مالتي، وأن شاء الله تكونين أجمل دكتوره لقلبي.
كُل عام وأنتِ بخير دكتورتي♥️

أحبچ

بَحرچ`,
    signoff: 'with all my love,',
    signature: 'yours always ♡',
  },


}

export default content
