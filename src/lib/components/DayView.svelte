<script lang="ts">
	import type { TripDay } from '$lib/types';
	import ActivityCard from './ActivityCard.svelte';

	let { day }: { day: TripDay } = $props();
</script>

<section class="day-view" aria-labelledby="day-heading">
	<header class="day-header">
		<div class="header-main">
			<p class="day-label">{day.label}</p>
			<h2 id="day-heading" class="day-title">{day.date}</h2>
			<p class="day-location">{day.location}</p>
		</div>
		<div class="header-meta">
			<span class="meta-value">{day.activities.length}</span>
			<span class="meta-label">scheduled stops</span>
		</div>
	</header>

	<ol class="timeline">
		{#each day.activities as activity, i (i)}
			<li>
				<ActivityCard {activity} />
			</li>
		{/each}
	</ol>
</section>

<style>
	.day-view {
		animation: fadeIn 0.25s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.day-header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
		padding-bottom: 1.25rem;
		border-bottom: 1px solid var(--color-border);
	}

	.header-main {
		min-width: 0;
	}

	.day-label {
		margin: 0 0 0.2rem;
		font-size: 0.72rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-accent);
	}

	.day-title {
		font-size: clamp(1.35rem, 4vw, 1.75rem);
		line-height: 1.2;
	}

	.day-location {
		margin: 0.35rem 0 0;
		font-size: 0.925rem;
		color: var(--color-muted);
		font-weight: 500;
	}

	.header-meta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		flex-shrink: 0;
		text-align: right;
	}

	.meta-value {
		font-family: var(--font-serif);
		font-size: 1.75rem;
		font-weight: 600;
		line-height: 1;
		color: var(--color-slate);
	}

	.meta-label {
		margin-top: 0.2rem;
		font-size: 0.68rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-faint);
	}

	.timeline {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media (max-width: 480px) {
		.day-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
		}

		.header-meta {
			align-items: flex-start;
			text-align: left;
		}
	}
</style>
