<script>
	import { Feedback } from '../store'
    import FeedbackItem from './FeedbackItem.svelte';
    import FeedbackStats from './FeedbackStats.svelte';
</script>

<FeedbackStats />
{#each $Feedback as fb (fb.id)} 
    <FeedbackItem item={fb} />
{/each}