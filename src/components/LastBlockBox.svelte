<script>
    //Utils
    import { formatValue } from '../js/utils'

    export let lastBlock = 0;
</script>

<style>
    .flex-column{
        align-items: center;
        width: 225px;
        z-index: 10;
    }
</style>

<div class="flex-column">
    <div class="text-body-1 font-secondary">Last block</div>
    <h2>{formatValue(lastBlock)}</h2>
</div>
