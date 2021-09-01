<script>
    import Ufo from './Ufo.svelte';
    import Themeselect from './helpers/Themeselect.svelte';
    import Logo from '../components/Logo.svelte';



</script>
    <header class="relative w-full flex flex-col items-center justify-center relative">
        <h1 class="text-4xl xl:text-8xl text-light font-title uppercase">ParallelCoin block explorer</h1>
        <div class="w-full flex flex-row items-center justify-between relative">
            <Ufo class="top-2 left-0"></Ufo>
            <a href="/" class="p-4 dark"><Logo size="64" /></a>

            <Themeselect class="absolute top-0 right-0" @darkmode="darkmode" ></Themeselect>
        </div>
        <slot></slot>
    </header>
