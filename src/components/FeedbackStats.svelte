<script>
    import {Feedback} from '../store'
  
    $: count = $Feedback.length
    $: average = $Feedback.reduce((a, {rating}) => a + rating, 0) / $Feedback.length
  </script>
  
  <div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Ratings Average: {average}</h4>
  </div>
  
  <style>
    .feedback-stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  </style>