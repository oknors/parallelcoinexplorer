    <div class="bg">
        <div class="grunge">
            <amp-video width="720" height="405" src="https://s.okno.rs/video/grunge.mp4" poster="https://s.okno.rs/parallelcoin/img/bg.jpg" layout="responsive" controls autoplay loop muted class="grunge__video">
                <div fallback>
                    <p>Your browser doesn't support HTML5 video.</p>
                </div>
                <source type="video/mp4" src="https://s.okno.rs/video/grunge.mp4">
                <source type="video/webm" src="https://s.okno.rs/video/grunge.webm">
            </amp-video>


        </div>
        <div class="space"></div>
    </div>
<style>
    .bg{
        position: fixed;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        margin: 0;
        padding: 0;
        background: #303030 url(https://s.okno.rs/parallelcoin/img/bg.jpg);
        z-index: -1;
        filter: none;
    }

    .grunge{
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .grunge .grunge__video{
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        transform: scale(1.1);
        pointer-events: none;
        opacity: 0.1;
    }

    .space {
        position:fixed;
        width: 400vw;
        height: 400vh;
        top: 50%;
        left: 50%;
        margin-top: -200vh;
        margin-left: -200vw;
        animation: space-rotate 999s linear infinite;
        background-size: 240px;
        -webkit-backface-visibility: visible;
        backface-visibility: visible;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMjQwIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTA2IDkwaDJ2MmgtMnpNNzQgNjNoMXYxaC0xek0yMyA2NmgxdjFoLTF6TTUwIDExMGgxdjFoLTF6TTYzIDEyOGgxdjFoLTF6TTQ1IDE0OWgxdjFoLTF6TTkyIDE1MWgxdjFoLTF6TTU4IDhoMXYxaC0xek0xNDcgMzNoMnYyaC0yek05MSA0M2gxdjFoLTF6TTE2OSAyOWgxdjFoLTF6TTE4MiAxOWgxdjFoLTF6TTE2MSA1OWgxdjFoLTF6TTEzOCA5NWgxdjFoLTF6TTE5OSA3MWgzdjNoLTN6TTIxMyAxNTNoMnYyaC0yek0xMjggMTYzaDF2MWgtMXpNMjA1IDE3NGgxdjFoLTF6TTE1MiAyMDBoMXYxaC0xek01MiAyMTFoMnYyaC0yek0wIDE5MWgxdjFIMHpNMTEwIDE4NGgxdjFoLTF6Ii8+PC9zdmc+);
    }
    @keyframes space-rotate{to{transform:rotate(-360deg)}}
</style>
