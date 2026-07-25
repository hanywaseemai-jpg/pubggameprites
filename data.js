/* ===================================================================
   Mock data — will be replaced by Supabase queries in Phase 2
=================================================================== */

const GAMES = [
  {
    id:"g1",
    title:"Horizon Forbidden West",
    slug:"horizon-forbidden-west",
    platform:["PS5","PS4"],
    genre:["Action","Adventure"],
    region:"Region 2 - Arabic",
    languages:["English","Arabic","French"],
    size:"105 GB",
    publisher:"Sony Interactive Entertainment",
    releaseDate:"2022-02-18",
    cover:"https://images.unsplash.com/photo-1616710393862-b02a6e69e0b7?q=80&w=800&auto=format&fit=crop",
    gallery:[
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=900&auto=format&fit=crop"
    ],
    trailer:"dQw4w9WgXcQ",
    description:"Join Aloy as she braves the Forbidden West — a majestic but dangerous frontier that conceals mysterious new threats. Explore distant lands, fight bigger and more awe-inspiring machines, and encounter new tribes as she attempts to uncover the mysteries of a world-ending storm.",
    featured:true,bestSeller:true,newRelease:false,
    rating:4.7,reviewCount:1284,
    stock:{primary:34,secondary:12,full:6},
    price:{primary:29.99,secondary:19.99,full:44.99,oldPrimary:59.99}
  },
  {
    id:"g2",
    title:"Spider-Man 2",
    slug:"spider-man-2",
    platform:["PS5"],
    genre:["Action","Adventure"],
    region:"Region 2 - Arabic",
    languages:["English","Arabic"],
    size:"98 GB",
    publisher:"Sony Interactive Entertainment",
    releaseDate:"2023-10-20",
    cover:"https://images.unsplash.com/photo-1608889175638-9e0a0e5a4707?q=80&w=800&auto=format&fit=crop",
    gallery:[
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=900&auto=format&fit=crop"
    ],
    trailer:"dQw4w9WgXcQ",
    description:"Peter Parker and Miles Morales return in the highly anticipated sequel, swinging through New York with new powers, new villains, and a story that pushes both heroes to their limits.",
    featured:true,bestSeller:true,newRelease:true,
    rating:4.9,reviewCount:2310,
    stock:{primary:50,secondary:20,full:0},
    price:{primary:34.99,secondary:24.99,full:0,oldPrimary:69.99}
  },
  {
    id:"g3",
    title:"God of War Ragnarök",
    slug:"god-of-war-ragnarok",
    platform:["PS5","PS4"],
    genre:["Action","RPG"],
    region:"Region 2 - Arabic",
    languages:["English","Arabic","Spanish"],
    size:"120 GB",
    publisher:"Sony Interactive Entertainment",
    releaseDate:"2022-11-09",
    cover:"https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=800&auto=format&fit=crop",
    gallery:[
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519669417670-68775a50919e?q=80&w=900&auto=format&fit=crop"
    ],
    trailer:"dQw4w9WgXcQ",
    description:"Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world.",
    featured:true,bestSeller:true,newRelease:false,
    rating:4.9,reviewCount:3421,
    stock:{primary:40,secondary:15,full:4},
    price:{primary:32.99,secondary:22.99,full:49.99,oldPrimary:64.99}
  },
  {
    id:"g4",
    title:"Gran Turismo 7",
    slug:"gran-turismo-7",
    platform:["PS5","PS4"],
    genre:["Racing","Sports"],
    region:"Region 2 - Arabic",
    languages:["English","Arabic"],
    size:"95 GB",
    publisher:"Sony Interactive Entertainment",
    releaseDate:"2022-03-04",
    cover:"https://images.unsplash.com/photo-1541348263662-e068662d82af?q=80&w=800&auto=format&fit=crop",
    gallery:[
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=900&auto=format&fit=crop"
    ],
    trailer:"dQw4w9WgXcQ",
    description:"The real driving simulator returns. Collect, tune, and race your dream cars across iconic circuits in stunning detail with full ray tracing support.",
    featured:false,bestSeller:true,newRelease:false,
    rating:4.6,reviewCount:987,
    stock:{primary:28,secondary:9,full:2},
    price:{primary:27.99,secondary:17.99,full:39.99,oldPrimary:54.99}
  },
  {
    id:"g5",
    title:"Resident Evil 4",
    slug:"resident-evil-4",
    platform:["PS5"],
    genre:["Horror","Shooter"],
    region:"Region 2 - Arabic",
    languages:["English","Arabic","Japanese"],
    size:"58 GB",
    publisher:"Capcom",
    releaseDate:"2023-03-24",
    cover:"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    gallery:[
      "https://images.unsplash.com/photo-1587573089734-599851ea3271?q=80&w=900&auto=format&fit=crop"
    ],
    trailer:"dQw4w9WgXcQ",
    description:"Survival is just the beginning. Six years after the biological disaster in Raccoon City, Leon S. Kennedy is sent to rescue the President's kidnapped daughter.",
    featured:false,bestSeller:false,newRelease:true,
    rating:4.8,reviewCount:1560,
    stock:{primary:22,secondary:10,full:5},
    price:{primary:26.99,secondary:16.99,full:37.99,oldPrimary:0}
  },
  {
    id:"g6",
    title:"EA Sports FC 25",
    slug:"ea-sports-fc-25",
    platform:["PS5","PS4"],
    genre:["Sports"],
    region:"Region 2 - Arabic",
    languages:["English","Arabic"],
    size:"48 GB",
    publisher:"EA Sports",
    releaseDate:"2024-09-27",
    cover:"https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=800&auto=format&fit=crop",
    gallery:[
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=900&auto=format&fit=crop"
    ],
    trailer:"dQw4w9WgXcQ",
    description:"The world's game. Play with your favorite clubs and stars across men's and women's football with the most authentic gameplay yet.",
    featured:false,bestSeller:true,newRelease:true,
    rating:4.3,reviewCount:2044,
    stock:{primary:60,secondary:25,full:8},
    price:{primary:24.99,secondary:14.99,full:34.99,oldPrimary:44.99}
  },
  {
    id:"g7",
    title:"Street Fighter 6",
    slug:"street-fighter-6",
    platform:["PS5","PS4"],
    genre:["Fighting"],
    region:"Region 2 - Arabic",
    languages:["English","Japanese"],
    size:"32 GB",
    publisher:"Capcom",
    releaseDate:"2023-06-02",
    cover:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=800&auto=format&fit=crop",
    gallery:[
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=900&auto=format&fit=crop"
    ],
    trailer:"dQw4w9WgXcQ",
    description:"A new era of Street Fighter begins. Master unique fighters, real-time commentary, and a living, breathing world in Battle Hub.",
    featured:false,bestSeller:false,newRelease:false,
    rating:4.5,reviewCount:743,
    stock:{primary:18,secondary:6,full:3},
    price:{primary:23.99,secondary:15.99,full:32.99,oldPrimary:0}
  },
  {
    id:"g8",
    title:"Final Fantasy XVI",
    slug:"final-fantasy-xvi",
    platform:["PS5"],
    genre:["RPG","Adventure"],
    region:"Region 2 - Arabic",
    languages:["English","Japanese"],
    size:"89 GB",
    publisher:"Square Enix",
    releaseDate:"2023-06-22",
    cover:"https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=800&auto=format&fit=crop",
    gallery:[
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=900&auto=format&fit=crop"
    ],
    trailer:"dQw4w9WgXcQ",
    description:"The realm of Valisthea is home to the Mothercrystals, natural formations that have blessed the land with the magical energy known as Aether for centuries.",
    featured:true,bestSeller:false,newRelease:false,
    rating:4.6,reviewCount:1122,
    stock:{primary:15,secondary:5,full:1},
    price:{primary:31.99,secondary:21.99,full:42.99,oldPrimary:59.99}
  },
  {
    id:"g9",
    title:"Alan Wake II",
    slug:"alan-wake-2",
    platform:["PS5"],
    genre:["Horror","Adventure"],
    region:"Region 2 - Arabic",
    languages:["English","Arabic"],
    size:"63 GB",
    publisher:"Remedy Entertainment",
    releaseDate:"2023-10-27",
    cover:"https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=800&auto=format&fit=crop",
    gallery:[
      "https://images.unsplash.com/photo-1520520298-9b31ef6a8ce8?q=80&w=900&auto=format&fit=crop"
    ],
    trailer:"dQw4w9WgXcQ",
    description:"Wake up. A survival horror story where two lead characters navigate different worlds and dangers, connected by fate and a story only you can complete.",
    featured:false,bestSeller:false,newRelease:true,
    rating:4.7,reviewCount:512,
    stock:{primary:20,secondary:7,full:2},
    price:{primary:29.99,secondary:19.99,full:39.99,oldPrimary:0}
  },
  {
    id:"g10",
    title:"Diablo IV",
    slug:"diablo-iv",
    platform:["PS5","PS4"],
    genre:["RPG","Action"],
    region:"Region 2 - Arabic",
    languages:["English","Arabic"],
    size:"90 GB",
    publisher:"Blizzard Entertainment",
    releaseDate:"2023-06-06",
    cover:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=800&auto=format&fit=crop",
    gallery:[
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=900&auto=format&fit=crop"
    ],
    trailer:"dQw4w9WgXcQ",
    description:"Return to the dark, gothic world of Sanctuary in Diablo IV. Face the malevolent Lilith as she seeks to overwhelm the world with her father's Burning Hells.",
    featured:false,bestSeller:true,newRelease:false,
    rating:4.4,reviewCount:1830,
    stock:{primary:25,secondary:8,full:3},
    price:{primary:28.99,secondary:18.99,full:38.99,oldPrimary:49.99}
  },
  {
    id:"g11",
    title:"Ghost of Tsushima",
    slug:"ghost-of-tsushima",
    platform:["PS5","PS4"],
    genre:["Action","Adventure"],
    region:"Region 2 - Arabic",
    languages:["English","Arabic","Japanese"],
    size:"75 GB",
    publisher:"Sony Interactive Entertainment",
    releaseDate:"2020-07-17",
    cover:"https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop",
    gallery:[
      "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=900&auto=format&fit=crop"
    ],
    trailer:"dQw4w9WgXcQ",
    description:"In the late 13th century, the Mongol empire has laid waste to entire nations. Jin Sakai, one of the last surviving samurai, must set aside tradition to save his home.",
    featured:false,bestSeller:true,newRelease:false,
    rating:4.9,reviewCount:2765,
    stock:{primary:33,secondary:11,full:4},
    price:{primary:26.99,secondary:16.99,full:36.99,oldPrimary:49.99}
  },
  {
    id:"g12",
    title:"Mortal Kombat 1",
    slug:"mortal-kombat-1",
    platform:["PS5"],
    genre:["Fighting"],
    region:"Region 2 - Arabic",
    languages:["English"],
    size:"55 GB",
    publisher:"NetherRealm Studios",
    releaseDate:"2023-09-19",
    cover:"https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop",
    gallery:[
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=900&auto=format&fit=crop"
    ],
    trailer:"dQw4w9WgXcQ",
    description:"A new era of the iconic franchise begins as Liu Kang has restarted history creating a new timeline with unique twists on your favorite characters.",
    featured:false,bestSeller:false,newRelease:true,
    rating:4.2,reviewCount:640,
    stock:{primary:19,secondary:6,full:0},
    price:{primary:25.99,secondary:0,full:0,oldPrimary:0}
  }
];

const CATEGORIES = [
  { name:"Action", icon:"sword", count:142 },
  { name:"Adventure", icon:"compass", count:98 },
  { name:"Horror", icon:"ghost", count:41 },
  { name:"Racing", icon:"flag", count:36 },
  { name:"RPG", icon:"shield", count:120 },
  { name:"Sports", icon:"trophy", count:57 },
  { name:"Fighting", icon:"fist", count:29 },
  { name:"Shooter", icon:"target", count:83 }
];

const HERO_SLIDES = [
  { gameId:"g2", tag:"New Release" },
  { gameId:"g3", tag:"Game of the Year" },
  { gameId:"g1", tag:"Featured" }
];

const REVIEWS = [
  { name:"Ahmed K.", rating:5, date:"2 weeks ago", text:"Absolutely stunning game, delivery of the account was instant after payment approval. Highly recommend this store!", likes:24 },
  { name:"Sara M.", rating:4, date:"1 month ago", text:"Great price compared to PS Store directly. Only wish the secondary account option had more stock.", likes:11 },
  { name:"Omar H.", rating:5, date:"1 month ago", text:"Fast support on WhatsApp, got my credentials within 20 minutes of payment confirmation.", likes:8 }
];

function getGameById(id){ return GAMES.find(g=>g.id===id); }
function getGameBySlug(slug){ return GAMES.find(g=>g.slug===slug); }
function formatDate(d){
  return new Date(d).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
}
