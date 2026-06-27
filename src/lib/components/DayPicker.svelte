<script lang="ts">
	import type { TripDay } from '$lib/types';

	let {
		days,
		selectedId,
		onselect
	}: {
		days: TripDay[];
		selectedId: string;
		onselect: (id: string) => void;
	} = $props();
</script>

<nav class="day-picker" aria-label="Select trip day">
	<div class="picker-track">
		{#each days as day (day.id)}
			<button
				type="button"
				class="day-tab"
				class:selected={day.id === selectedId}
				aria-current={day.id === selectedId ? 'true' : undefined}
				onclick={() => onselect(day.id)}
			>
				<span class="tab-day">{day.label}</span>
				<span class="tab-date">{day.date.split(',')[1]?.trim() ?? day.date}</span>
				<span class="tab-location">{day.location}</span>
			</button>
		{/each}
	</div>
</nav>

<style>
	.day-picker {
		margin-bottom: 1.75rem;
	}

	.picker-track {
		display: flex;
		gap: 0;
		overflow-x: auto;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		background: var(--color-surface);
		box-shadow: var(--shadow-sm);
		scrollbar-width: thin;
		-webkit-overflow-scrolling: touch;
	}

	.picker-track::-webkit-scrollbar {
		height: 4px;
	}

	.picker-track::-webkit-scrollbar-thumb {
		background: var(--color-border-strong);
		border-radius: 2px;
	}

	.day-tab {
		flex: 1 0 auto;
		min-width: 7.5rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.1rem;
		padding: 0.75rem 1rem;
		border-right: 1px solid var(--color-border);
		color: var(--color-muted);
		transition:
			background 0.15s ease,
			color 0.15s ease;
	}

	.day-tab:last-child {
		border-right: none;
	}

	.day-tab:hover:not(.selected) {
		background: var(--color-bg);
		color: var(--color-text);
	}

	.day-tab.selected {
		background: var(--color-accent-soft);
		color: var(--color-text);
		box-shadow: inset 0 -2px 0 var(--color-accent);
	}

	.tab-day {
		font-family: var(--font-serif);
		font-size: 0.9rem;
		font-weight: 600;
		color: inherit;
	}

	.day-tab.selected .tab-day {
		color: var(--color-accent);
	}

	.tab-date {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-faint);
	}

	.day-tab.selected .tab-date {
		color: var(--color-muted);
	}

	.tab-location {
		font-size: 0.7rem;
		font-weight: 500;
		color: var(--color-faint);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 100%;
	}

	.day-tab.selected .tab-location {
		color: var(--color-muted);
	}
</style>
