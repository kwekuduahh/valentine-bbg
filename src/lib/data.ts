export type StoryPage = {
	title: string;
	description: string;
	image: string;
};

export const heroIntro = {
	heading: 'Two souls, one beautiful journey',
	subheading:
		"There's nothing better than getting lost in a magical world between pages or dancing around the living room to our favorite songs. I bring the magic and stories, he brings the logic and adventure - Together, we're the perfect balance. We're two different souls who found each other and decided to write our story together.",
};

export const storyPages: StoryPage[] = [
	{
		title: 'The Day Everything Changed',
		description:
			'We met playing Connect Four. He says it was my smile and laugh that drew him in from across the room. For me, it was his quiet demeanor — calm, steady, and intriguing. We started talking, and hours flew by like minutes. Who knew a simple game could lead to the most important connection of our lives?',
		image: '/storybook-page-1.jpeg',
	},
	{
		title: 'Our First Date',
		description:
			"Our very first date was at a football match — which is hilariously ironic because neither of us actually likes football or soccer! But we didn't care. We spent the entire time talking, laughing, and stealing glances at each other instead of watching the game. It was perfect because it was us — not the sport.",
		image: '/storybook-page-2.jpeg',
	},
	{
		title: 'The Realization',
		description:
			"Somewhere between the Connect Four pieces falling into place and that awkward football date, we realized we were stuck with each other — in the best way possible. He became my forever baby, and I became his. And we've been inseparable ever since.",
		image: '/storybook-page-3.jpeg',
	},
	// {
	// 	title: 'Growing Together',
	// 	description:
	// 		"Somewhere between the Connect Four pieces falling into place and that awkward football date, we realized we were stuck with each other — in the best way possible. He became my forever baby, and I became his. And we've been inseparable ever since.",
	// 	image: '/storybook-page-4.jpeg',
	// },
];

export const herHighlights = [
	'Her laughter turns ordinary days into celebrations.',
	'She is kind in a way that makes everyone feel seen.',
	'She is both gentle and brave, soft-hearted and strong.',
	'Her smile is home, even in unfamiliar places.',
];

export const hisHighlights = [
	'He loves with intention and protects with patience.',
	'His warmth makes difficult days feel lighter.',
	'He listens deeply and speaks with honesty.',
	'His presence feels like peace, even in chaos.',
];

export const roadmapMilestones = [
	{
		year: '2026',
		title: 'Always There for Me',
		description:
			"No matter what's happening, he's my constant. Through good days and bad, he's the steady presence I can always count on. He never lets me face anything alone.",
	},
	{
		year: '2027',
		title: 'Makes Me Laugh',
		description:
			'His sense of humor is my favorite thing. He knows exactly how to make me laugh, even on my hardest days. Our inside jokes are my treasure.',
	},
	{
		year: '2028',
		title: 'Pushes Me to Be My Best',
		description:
			"He believes in me even when I don't believe in myself. He pushes me to be my absolute best, not because he wants me to change, but because he sees my potential and won't let me settle for less.",
	},
	{
		year: 'Forever',
		title: 'Forever Baby',
		description:
			"Forever Baby He's my forever baby. We're stuck with each other forever, and I wouldn't have it any other way. We'll scale all obstacles together, hand in hand.",
	},
];

export const destinationCards = [
	'/destination-1.jpg',
	'/destination-2.jpg',
	'/destination-3.jpg',
];

export const moodboardItems = [
	{ id: 'mood-1', img: '/moodboard-1.svg', url: '#', height: 420 },
	{ id: 'mood-2', img: '/moodboard-2.svg', url: '#', height: 360 },
	{ id: 'mood-3', img: '/moodboard-3.svg', url: '#', height: 500 },
	{ id: 'mood-4', img: '/moodboard-4.svg', url: '#', height: 390 },
	{ id: 'mood-5', img: '/moodboard-5.svg', url: '#', height: 460 },
	{ id: 'mood-6', img: '/moodboard-6.svg', url: '#', height: 430 },
];

export const profileImages = {
	her: '/her-profile.jpeg',
	him: '/his-profile.jpeg',
};

export const spotifyPlaceholder =
	'https://open.spotify.com/embed/playlist/37i9dQZF1DX50QitC6Oqtn?utm_source=generator';
