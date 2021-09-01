<script>
    import "../styles/tailwind-output.css";
    import Bg from '../components/helpers/Bg.svelte';
    import Loader from '../components/helpers/Loader.svelte';
    import Footer from '../components/Footer.svelte';
    import Chainsearch from '../components/Chainsearch.svelte';
    import Header from '../components/Header.svelte';


</script>

<svelte:head>
    <script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js"></script>
    <script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
    <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
    <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
    <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
    <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
    <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
    <script async custom-element="amp-font" src="https://cdn.ampproject.org/v0/amp-font-0.1.js"></script>
</svelte:head>


<div id="layout" class="min-h-screen antialiased crypta">
    <Bg />
    <div id="top" class="min-h-screen flex flex-col items-center justify-between relative md:container md:mx-auto px-4 md:px-0 font-text text-text-primary ">
        <Header class="pb-4" :darkmode="darkMode" :isdarkmode="isDarkMode">
                <Chainsearch />
            </Header>
            <main class="w-full flex-1 text-text-primary">
                <slot></slot>
            </main>

            <Footer />
    </div>
</div>

<style>
    :global(.light){

    }
    :global(.dark) {

    }
    @font-face {
        font-family: 'gomono';
        src: url('https://font.okno.rs/go/mono.woff2') format('woff2'),
        url('https://font.okno.rs/go/mono.woff') format('woff'),
        url('https://font.okno.rs/go/mono.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'bariolregular';
        src: url('https://font.okno.rs/bariol/regular.woff2') format('woff2'),
        url('https://font.okno.rs/bariol/regular.woff') format('woff'),
        url('https://font.okno.rs/bariol/regular.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'plan9regular';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src:
                local('plan9regular '),
                local('plan9regular'),
                url('https://font.okno.rs/plan9/regular.woff2') format('woff2'),
                url('https://font.okno.rs/plan9/regular.woff') format('woff'),
                url('https://font.okno.rs/plan9/regular.ttf') format('ttf');
    }
    .crypta {
        background-image: url(https://s.okno.rs/parallelcoin/img/crypt.png);
        background-repeat: no-repeat;
        background-position: left bottom;
        background-size: 120px;
    }
</style>
