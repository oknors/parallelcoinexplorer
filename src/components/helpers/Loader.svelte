    <div id="parallelloader">
        <svg
                viewBox="0 0 1024 1024"
                width="1024"
                height="1024"
        >
            <filter id="dropshadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
                <feOffset dx="0" dy="0" result="offsetblur"/>
                <feFlood flood-color="red"/>
                <feComposite in2="offsetblur" operator="in"/>
                <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            <path class="path" style="filter:url(#dropshadow)" fill="#303030" d="M579.16 191.1C598.36 191.12 618.84 193.71 636.75 198.84C655.95 203.98 671.3 211.65 687.94 221.9C717.36 241.12 740.39 264.19 758.29 294.92C777.47 325.66 785.12 360.22 785.1 397.34C785.07 433.18 776.09 467.72 758.15 498.42C740.21 530.41 717.16 554.73 687.7 572.63C671.06 582.86 653.13 591.81 636.49 596.92C617.28 602.02 598.08 604.57 578.88 604.55L578.93 532.88C613.49 531.62 645.5 520.13 673.68 493.27C701.86 466.41 715.95 434.4 715.97 396C716 357.6 703.22 325.59 676.36 298.69C649.5 271.8 617.51 258.98 579.11 258.95C540.71 258.93 507.43 271.7 481.81 298.56C454.91 325.43 442.07 357.41 442.05 395.81L441.76 822.06C426.41 806.69 402.13 783.63 372.71 754.17L372.95 395.77C372.96 376.57 375.53 357.39 380.66 339.47C385.79 320.28 393.47 303.64 403.72 288.29C422.94 258.86 446.01 235.82 476.74 216.64C507.47 198.74 542.04 191.08 579.16 191.1ZM577.79 330.63C613.63 330.65 643.05 360.11 643.02 395.95C643 431.79 613.54 461.23 577.7 461.2C540.58 462.46 512.42 432.98 512.45 395.86C512.47 360.02 541.95 330.6 577.79 330.63ZM321.76 370.13L321.53 714.46C290.84 683.72 266.53 660.66 252.46 645.29L252.64 370.09L321.76 370.13Z"/>
        </svg>
    </div>
<style>
    #parallelloader{
        width:61%;
        margin:0 auto;
        display:block;
        text-align:center;
    }
    #parallelloader svg{
        max-width: 100%;
        height: auto;
    }
    .path {
        stroke-dasharray: 2110;
        stroke-dashoffset: 2110;
        stroke-width:2;
        stroke-linecap:round;
        animation: dash 1s linear infinite;
        fill-opacity:0;
        stroke:#cf8030;
    }

    @keyframes dash {
        0% {
            stroke-dashoffset: 2110;
            opacity:0;
            stroke:#cf8030;
        }
        15%{
            opacity:1;
            stroke:#cf8030;
        }
        70%{
            opacity:1;
            stroke:#cf8030;
        }
        100%{
            stroke-dashoffset:0;
            opacity:0;
            stroke:#CFCF30;
        }
    }
</style>
