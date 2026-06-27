import type { ActivityCategory } from './types';

const categoryLabels: Record<ActivityCategory, string> = {
	travel: 'Travel',
	dining: 'Dining',
	lodging: 'Lodging',
	outdoors: 'Outdoors',
	sightseeing: 'Sightseeing'
};

export function getActivityCategory(title: string): ActivityCategory {
	const lower = title.toLowerCase();
	if (lower.includes('drive') || lower.includes('arrive')) return 'travel';
	if (lower.includes('sleep') || lower.includes('check in')) return 'lodging';
	if (lower.includes('dinner') || lower.includes('lunch') || lower.includes('chuckwagon'))
		return 'dining';
	if (
		lower.includes('hike') ||
		lower.includes('trail') ||
		lower.includes('stargaz') ||
		lower.includes('sunrise') ||
		lower.includes('loop road')
	)
		return 'outdoors';
	return 'sightseeing';
}

export function getCategoryLabel(category: ActivityCategory): string {
	return categoryLabels[category];
}
