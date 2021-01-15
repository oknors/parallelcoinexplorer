<script>
    //utils
    import { formatValue } from '../js/utils'

    export let difficulty = 0;
</script>

<style>
    .flex-column{
        align-items: center;
        width: 225px;
        z-index: 10;
    }
</style>
<div class="flex-column">
    <div class="text-body-1 font-secondary">Difficulty</div>
    <h2>{formatValue(difficulty)}</h2>
</div>
