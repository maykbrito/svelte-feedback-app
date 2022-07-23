<script>
    import { Feedback } from "../store";
    import Card from "./Card.svelte";
    export let item;

    const handleDelete = (itemId) => {
        Feedback.update((currentList) => currentList.filter(item => item.id != itemId))
    }
</script>

<Card>
    <div class="num-display">
        {item.rating}
    </div>

    <div class="close" on:click={() => handleDelete(item.id)}>✕</div>

    <div class="text-display">
        {item.text}
    </div>
</Card>

<style>
    .num-display {
      position: absolute;
      top: -1rem;
      left: -1rem;
      width: 5rem;
      height: 5rem;
      background: #ff6a95;
      color: #fff;
      border: 0.1rem #eee solid;
      border-radius: 50%;
      padding: 1rem;
      text-align: center;
      font-size: 1.9rem;
    }
  
    .close {
      position: absolute;
      top: 1rem;
      right: 2rem;
      cursor: pointer;
      background: none;
      border: none;
    }
  </style>