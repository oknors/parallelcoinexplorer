<script>
    let info = {
        difficulty_sha256d:0,
        difficulty_scrypt:0
    }
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-0 hero-rec rounded-sm text-text-light">
    <div class="flex flex-col p-6 bg-black bg-opacity-50 rounded-lg text-light"><h4 class="text-2xl font-bold tracking-widest">Last block</h4> <span class="text-3xl">{@html info.blocks}</span></div>
    <div class="flex flex-col mx-8 p-6 bg-black bg-opacity-50 rounded-lg text-light"><h4 class="text-2xl font-bold tracking-widest">Difficulty SHA256d</h4> <span class="text-3xl">{@html info.difficulty_sha256d}</span></div>
    <div class="flex flex-col p-6 bg-black bg-opacity-50 rounded-lg text-light"><h4 class="text-2xl font-bold tracking-widest">Difficulty Scrypt</h4> <span class="text-3xl">{@html info.difficulty_scrypt}</span></div>
</div>
<style>



</style>
