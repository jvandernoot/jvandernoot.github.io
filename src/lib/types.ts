export type ActivityCategory = 'travel' | 'dining' | 'lodging' | 'outdoors' | 'sightseeing';

export interface Activity {
	time: string | null;
	title: string;
	notes: string | null;
	link: string | null;
}

export interface TripDay {
	id: string;
	date: string;
	label: string;
	location: string;
	dayNumber: number;
	activities: Activity[];
}
