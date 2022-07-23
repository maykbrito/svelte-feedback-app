<script>
	import { Feedback } from '../store'
    import FeedbackItem from './FeedbackItem.svelte';
</script>

{#each $Feedback as fb (fb.id)} 
    <FeedbackItem item={fb} />
{/each}