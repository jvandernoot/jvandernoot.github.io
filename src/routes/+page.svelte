<script lang="ts">
	import { tripDays, tripTitle, tripSubtitle } from '$lib/data/itinerary';
	import DayPicker from '$lib/components/DayPicker.svelte';
	import DayView from '$lib/components/DayView.svelte';

	let selectedId = $state(tripDays[0].id);

	const selectedDay = $derived(tripDays.find((d) => d.id === selectedId) ?? tripDays[0]);
</script>

<svelte:head>
	<title>{tripTitle}</title>
</svelte:head>

<main class="page">
	<header class="hero">
		<p class="hero-eyebrow">Summer 2026 · Family Road Trip</p>
		<h1 class="hero-title">{tripTitle}</h1>
		<p class="hero-subtitle">{tripSubtitle}</p>
		<dl class="hero-stats">
			<div class="stat">
				<dt>Duration</dt>
				<dd>8 days</dd>
			</div>
			<div class="stat">
				<dt>Distance</dt>
				<dd>~2,000 mi</dd>
			</div>
			<div class="stat">
				<dt>Route</dt>
				<dd>Omaha → Badlands → Black Hills → Home</dd>
			</div>
		</dl>
	</header>

	<DayPicker days={tripDays} {selectedId} onselect={(id) => (selectedId = id)} />

	{#key selectedDay.id}
		<DayView day={selectedDay} />
	{/key}

	<footer class="footer">
		<p>Vandernoot family itinerary</p>
	</footer>
</main>

<style>
	.page {
		max-width: 760px;
		margin: 0 auto;
		padding: 2.5rem 1.5rem 3.5rem;
	}

	.hero {
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--color-border);
	}

	.hero-eyebrow {
		margin: 0 0 0.5rem;
		font-size: 0.72rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--color-accent);
	}

	.hero-title {
		font-size: clamp(1.85rem, 5vw, 2.5rem);
		line-height: 1.15;
		color: var(--color-text);
	}

	.hero-subtitle {
		margin: 0.6rem 0 0;
		font-size: 1.05rem;
		color: var(--color-muted);
		font-weight: 400;
		line-height: 1.5;
	}

	.hero-stats {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem 2.5rem;
		margin: 1.5rem 0 0;
		padding: 0;
	}

	.stat {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.stat dt {
		font-size: 0.68rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-faint);
	}

	.stat dd {
		margin: 0;
		font-size: 0.925rem;
		font-weight: 500;
		color: var(--color-text);
	}

	.footer {
		margin-top: 3rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-border);
	}

	.footer p {
		margin: 0;
		font-size: 0.8rem;
		color: var(--color-faint);
	}
</style>
