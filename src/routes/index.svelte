<script>
    import Blocks from '../components/Blocks.svelte';
    import Status from '../components/Status.svelte';

    let info = {
        blocks:[],
        difficulty_sha256d:0,
        difficulty_scrypt:0
    }
</script>


<Status />


    <Blocks />
