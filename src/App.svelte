<script lang="ts">
  import { getDailyQuote } from './lib/api'

  getDailyQuote().then(
    (res) => {
      console.log(res)
    }
  )

  console.log('test')
</script>
