<script lang="ts">
	import type { Activity } from '$lib/types';
	import { getActivityCategory, getCategoryLabel } from '$lib/activity-category';

	let { activity }: { activity: Activity } = $props();

	const category = $derived(getActivityCategory(activity.title));
</script>

<article class="activity">
	<div class="rail">
		<div class="dot" data-category={category}></div>
	</div>
	<div class="content">
		<div class="meta">
			{#if activity.time}
				<time class="time">{activity.time}</time>
			{:else}
				<span class="time open">Flexible</span>
			{/if}
			<span class="category" data-category={category}>{getCategoryLabel(category)}</span>
		</div>
		<h3 class="title">
			{#if activity.link}
				<a href={activity.link} target="_blank" rel="noopener noreferrer">{activity.title}</a>
			{:else}
				{activity.title}
			{/if}
		</h3>
		{#if activity.notes}
			<p class="notes">{activity.notes}</p>
		{/if}
	</div>
</article>

<style>
	.activity {
		display: grid;
		grid-template-columns: 1.5rem 1fr;
		gap: 0 1.25rem;
		position: relative;
	}

	.activity:not(:last-child)::after {
		content: '';
		position: absolute;
		left: 0.4rem;
		top: 1.1rem;
		bottom: -1.25rem;
		width: 1px;
		background: var(--color-border);
	}

	.rail {
		display: flex;
		justify-content: center;
		padding-top: 0.45rem;
	}

	.dot {
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: var(--color-border-strong);
		flex-shrink: 0;
	}

	.dot[data-category='travel'] {
		background: var(--color-slate);
	}

	.dot[data-category='dining'] {
		background: var(--color-accent);
	}

	.dot[data-category='lodging'] {
		background: #7a6b5d;
	}

	.dot[data-category='outdoors'] {
		background: #5a7355;
	}

	.dot[data-category='sightseeing'] {
		background: #6b5b7a;
	}

	.content {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 0.9rem 1.1rem;
		box-shadow: var(--shadow-sm);
		transition:
			border-color 0.15s ease,
			box-shadow 0.15s ease;
	}

	.content:hover {
		border-color: var(--color-border-strong);
		box-shadow: var(--shadow-md);
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		margin-bottom: 0.4rem;
	}

	.time {
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--color-text);
		letter-spacing: 0.02em;
		font-variant-numeric: tabular-nums;
	}

	.time.open {
		color: var(--color-muted);
		font-weight: 500;
		font-style: italic;
	}

	.category {
		font-size: 0.68rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		padding: 0.15rem 0.45rem;
		border-radius: var(--radius-sm);
		background: var(--color-slate-soft);
		color: var(--color-slate);
	}

	.category[data-category='dining'] {
		background: var(--color-accent-soft);
		color: var(--color-accent);
	}

	.category[data-category='outdoors'] {
		background: #edf2eb;
		color: #4a6346;
	}

	.category[data-category='lodging'] {
		background: #f0ece8;
		color: #6b5e52;
	}

	.category[data-category='sightseeing'] {
		background: #f0ecf2;
		color: #5c4f66;
	}

	.title {
		font-family: var(--font-sans);
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.35;
	}

	.title a:hover {
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.notes {
		margin: 0.35rem 0 0;
		font-size: 0.875rem;
		color: var(--color-muted);
		line-height: 1.45;
	}
</style>
