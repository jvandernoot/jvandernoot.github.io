import type { TripDay } from './types';

export const tripDays: TripDay[] = [
	{
		id: '2026-07-12',
		date: 'Sunday, July 12',
		label: 'Day 1',
		location: 'Omaha',
		dayNumber: 1,
		activities: [
			{ time: '9:00 AM', title: 'Drive to Omaha', notes: '~6.5 hrs', link: null },
			{
				time: '6:00 PM',
				title: 'Dinner (TBD)',
				notes: 'Old Market',
				link: 'https://oldmarket.com/'
			},
			{ time: '10:00 PM', title: 'Sleep (Omaha)', notes: null, link: null }
		]
	},
	{
		id: '2026-07-13',
		date: 'Monday, July 13',
		label: 'Day 2',
		location: 'Omaha',
		dayNumber: 2,
		activities: [
			{
				time: '10:00 AM',
				title: 'Henry Doorly Zoo',
				notes: 'World-class aquarium & desert dome',
				link: 'https://www.omahazoo.com/'
			},
			{ time: '1:00 PM', title: 'Lunch (TBD)', notes: null, link: null },
			{
				time: '3:00 PM',
				title: 'Gene Leahy Mall',
				notes: 'Downtown park & playground',
				link: 'https://ohmyomaha.com/gene-leahy-mall/'
			},
			{
				time: '6:00 PM',
				title: 'Dinner (TBD)',
				notes: 'Old Market',
				link: 'https://oldmarket.com/'
			},
			{ time: '10:00 PM', title: 'Sleep (Omaha)', notes: null, link: null }
		]
	},
	{
		id: '2026-07-14',
		date: 'Tuesday, July 14',
		label: 'Day 3',
		location: 'Badlands',
		dayNumber: 3,
		activities: [
			{ time: '9:00 AM', title: 'Drive to Cedar Pass Lodge', notes: '~7 hrs', link: null },
			{ time: '1:00 PM', title: 'Lunch', notes: null, link: null },
			{ time: '5:00 PM', title: 'Check into Cedar Pass Lodge', notes: null, link: null },
			{ time: '6:00 PM', title: 'Dinner (Cedar Pass Lodge?)', notes: null, link: null },
			{ time: '8:00 PM', title: 'Stargazing', notes: 'Dark skies over the Badlands', link: null },
			{ time: '10:00 PM', title: 'Sleep (Badlands)', notes: null, link: null }
		]
	},
	{
		id: '2026-07-15',
		date: 'Wednesday, July 15',
		label: 'Day 4',
		location: 'Badlands',
		dayNumber: 4,
		activities: [
			{ time: '8:00 AM', title: 'Hike Notch Trail', notes: null, link: null },
			{ time: '10:00 AM', title: 'Hike Door and Window Trails', notes: null, link: null },
			{ time: '12:00 PM', title: 'Lunch', notes: null, link: null },
			{
				time: '2:00 PM',
				title: 'Visitor Center + Prairie Dog Towns',
				notes: null,
				link: null
			},
			{ time: '3:00 PM', title: 'Drive Badlands Loop Road', notes: 'Scenic drive through the park', link: null },
			{ time: '8:00 PM', title: 'Stargazing', notes: null, link: null },
			{ time: '10:00 PM', title: 'Sleep (Badlands)', notes: null, link: null }
		]
	},
	{
		id: '2026-07-16',
		date: 'Thursday, July 16',
		label: 'Day 5',
		location: 'Custer / Black Hills',
		dayNumber: 5,
		activities: [
			{ time: '6:30 AM', title: 'Sunrise over Badlands', notes: 'Golden hour over the formations', link: null },
			{ time: '9:00 AM', title: 'Drive to Custer', notes: '~2.5 hrs', link: null },
			{ time: '12:00 PM', title: 'Mount Rushmore', notes: null, link: null },
			{ time: '1:00 PM', title: 'Lunch', notes: null, link: null },
			{
				time: '2:00 PM',
				title: 'Crazy Horse (optional)',
				notes: 'Monument in progress',
				link: 'https://crazyhorsememorial.org/'
			},
			{ time: '3:00 PM', title: 'Check into Airbnb (Custer)', notes: null, link: null },
			{
				time: '5:30 PM',
				title: 'Dinner — Hayride & Chuckwagon',
				notes: 'Western cookout experience',
				link: 'https://www.custerresorts.com/activities/activities-experiences/hayride-chuck-wagon-cookout'
			},
			{ time: '10:00 PM', title: 'Sleep (Custer)', notes: null, link: null }
		]
	},
	{
		id: '2026-07-17',
		date: 'Friday, July 17',
		label: 'Day 6',
		location: 'Custer → Sioux Falls',
		dayNumber: 6,
		activities: [
			{ time: null, title: 'Drive to Sioux Falls', notes: '~6 hrs', link: null },
			{ time: null, title: 'Wall Drug', notes: 'Classic roadside stop', link: null },
			{
				time: '1 hr',
				title: 'Corn Palace',
				notes: '8am–9pm · Free admission',
				link: 'https://cornpalace.com/27/About-Us'
			},
			{ time: null, title: 'Check into Airbnb (Sioux Falls)', notes: null, link: null },
			{ time: null, title: 'Dinner', notes: null, link: null },
			{
				time: null,
				title: 'Falls Park',
				notes: 'Evening stroll by the falls',
				link: 'https://www.siouxfalls.gov/activities-recreation/parks-trails/directory/parks/falls'
			},
			{ time: '10:00 PM', title: 'Sleep (Sioux Falls)', notes: null, link: null }
		]
	},
	{
		id: '2026-07-18',
		date: 'Saturday, July 18',
		label: 'Day 7',
		location: 'Sioux Falls → Des Moines',
		dayNumber: 7,
		activities: [
			{ time: '9:00 AM', title: 'Drive to Des Moines', notes: '~4.5 hrs', link: null },
			{
				time: '2:00 PM',
				title: 'Des Moines Capitol Tour',
				notes: 'Closes at 3:45 PM',
				link: 'https://www.legis.iowa.gov/resources/tourcapitol'
			},
			{ time: '5:00 PM', title: 'Check into Airbnb (Des Moines)', notes: null, link: null },
			{ time: '6:00 PM', title: 'Dinner', notes: null, link: null },
			{ time: '10:00 PM', title: 'Sleep (Des Moines)', notes: null, link: null }
		]
	},
	{
		id: '2026-07-19',
		date: 'Sunday, July 19',
		label: 'Day 8',
		location: 'Des Moines → Home',
		dayNumber: 8,
		activities: [
			{ time: '12:00 PM', title: 'Drive to St. Louis', notes: '~6 hrs', link: null },
			{ time: '3:00 PM', title: 'Truman State University', notes: 'Campus visit', link: null },
			{ time: '7:00 PM', title: 'Arrive home', notes: null, link: null }
		]
	}
];

export const tripTitle = 'Badlands Adventure 2026';
export const tripSubtitle = 'July 12 – 19 · Omaha → Badlands → Black Hills → Home';
