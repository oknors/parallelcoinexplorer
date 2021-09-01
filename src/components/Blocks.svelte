
<script>

    // module.exports = {
    //     data() {
    //         return {
    //             isLoading: true,
    //             clicked: false,
    //             info: [],
    //             blocks: [],
    //             itemlist:[
    //                 {field: 'height', title: "Block", link: true, route: 'block'},
    //                 {field: 'confirmations', title: "Confirmations", center: true, shrink: true, flexgrow: true},
    //                 {field: 'hash', title: "Hash", flexgrow: true, shrink: true},
    //                 {field: 'txs', title: "Txs", center: true, flexgrow: true},
    //                 {field: 'time', title: "Time", flexgrow: true, shrink: true}
    //             ],
    //             pageCount: 0,
    //             itemsNum:20,
    //             currentPage:1,
    //             totalVisible: 7,
    //         }
    //     },
    //     mounted() {
    //         this.getBlocks();
    //     },
    //     methods: {
    //         async getBlocks(){
    //             if (this.clicked) {
    //                 return;
    //             }
    //
    //             this.clicked = true;
    //
    //             this.isLoading = true;
    //             this.blocks = []
    //             const res = await fetch(`https://enso.okno.rs/explorer/parallelcoin/blocks/${this.itemsNum}/${this.currentPage}`);
    //             const blocks = await res.json();
    //             this.blocks =  blocks.blocks
    //             this.currentPage =  blocks.currentPage
    //             this.length =  blocks.lastBlock
    //             this.pageCount =  blocks.pageCount + 1
    //
    //             this.isLoading = false;
    //             this.clicked = false;
    //
    //         }
    //     },
    //     watch: {
    //         currentPage: function () {
    //             this.getBlocks();
    //         },
    //         containerWidth() {
    //             // trigger pagination resize
    //             this.$nextTick(() => {
    //                 this.getBlocks();
    //                 window.dispatchEvent(new Event("resize"));
    //             });
    //         }
    //     },
        // components: {
        //     pages: httpVueLoader('https://t.okno.rs/parallelcoin/vue/sub/explorer/pages.vue'),
        //     loader: httpVueLoader('https://t.okno.rs/parallelcoin/vue/loader.vue'),
        //     bigtable: httpVueLoader('https://t.okno.rs/vue/bigtable.vue'),
        // },
    // }
    import AmpOptimizer from '@ampproject/toolbox-optimizer'
    // const AmpOptimizer = require('@ampproject/toolbox-optimizer');

    // create the AMP Optimizer instance
    const ampOptimizer = AmpOptimizer.create();

    const html = '<section class="flex flex-1 flex-col px-4 bg-dark rounded md:rounded-lg">' +
        '                            <div class="flex flex-row py-4 border-dotted border-black border-t border-l-0 border-r-0 border-b-0 items-center justify-between text-light text-sm">\n' +
        '                                <span class="mr-3 text-green_blue hover:text-orange" title="Height">Height</span>\n' +
        '                                <span class="flex-1 truncate font-mono" title="Confirmations">Confirmations</span>\n' +
        '                                <span class="flex-1 truncate font-mono" title="Hash">Hash</span>\n' +
        '                                <span class="ml-2">Time</span></div>\n' +
        '<amp-list class="paged-amp-list" layout="responsive" width="800" height="460" src="https://enso.okno.rs/explorer/parallelcoin/blocks/20/1" [src]="\'https://enso.okno.rs/explorer/parallelcoin/blocks/20/\' + pageNumber" items="blocks" binding="no" reset-on-refresh>\n' +
        '                        <template type="amp-mustache" id="coin-name">\n' +
        '<button on="tap:AMP.navigateTo(url=\'/block/{{height}}\')" class="flex flex-1 w-full flex-row py-2 border-dotted border-black border-t border-l-0 border-r-0 border-b-0 items-center justify-between text-light">\n' +
        '                                <span class="mr-3 text-green_blue hover:text-orange">{{height}}</span>\n' +
        '                                <span class="px-4 truncate font-mono">{{confirmations}}</span>\n' +
        '                                <span class="flex-1 truncate font-mono text-sm text-center">{{hash}}</span>\n' +
        '                                <span class="ml-2">{{time}}</span></button>\n' +
        '                        </template>\n' +
        '                    </amp-list>' +
        '<div class="navigation">\n' +
        '                        <button class="prev" hidden [hidden]="pageNumber < 2" on="tap: AMP.setState({`{ pageNumber: pageNumber - 1 }`})">\n' +
        '                            Previous\n' +
        '                        </button>\n' +
        '                        <button class="next" [hidden]="page ? pageNumber >= page.items.pageCount : false" on="tap: AMP.setState({`{ pageNumber: pageNumber ? pageNumber + 1 : 2 }`})">\n' +
        '                            Next\n' +
        '                        </button>\n' +
        '                    </div></section>\n' +
        '            <amp-state id="page" src="https://enso.okno.rs/explorer/parallelcoin/blocks/20/1" [src]="\'https://enso.okno.rs/explorer/parallelcoin/blocks/20/\' + pageNumber">\n' +
        '            </amp-state>';

    const optimizedHtml = ampOptimizer.transformHtml(html);
</script>

        <h2 class="text-5xl	my-12 font-title text-light uppercase">Blocks</h2>
<!--        <bigtable :items="blocks" :itemlist="itemlist" class="p-8 rounded md:rounded-lg bg-background-primary"></bigtable>-->
<!--        <loader v-if="isLoading"></loader>-->
                    {@html html}

<style>



</style>
