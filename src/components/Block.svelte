<script>
    export let slug;
    // export let block;

    // const isHexKey = ( key ) => {
    //     if (validateTypes.isStringHex(key) && key.length === 64) return true;
    //     return false;
    // };
    //
    // function isNumber(n) {
    //     return Object.prototype.toString.call(n) !== '[object Array]' &&!isNaN(parseFloat(n)) && isFinite(n);
    // }
    //
    // const displayNumber = (value, toFixed = 0) => {
    //     if (!value) return '0'
    //     if (!Encoder.BigNumber.isBigNumber(value)) value = Encoder('bigNumber', value)
    //     let v =  Encoder('bigNumber', value.toFixed(toFixed))
    //     return v.toFormat({  decimalSeparator: '.', groupSeparator: ',', groupSize: 3})
    // }
    //
    // const formatValue = ( value, toFixed = 0 ) => {
    //     if (typeof value === 'undefined' || value == null) return "NULL"
    //     if (value.__fixed__) return displayNumber(value.__fixed__, toFixed)
    //     if (isNumber(value)){
    //         return parseFloat(value).toLocaleString()
    //     }else{
    //         if (validateTypes.isString(value)) return value
    //         else return JSON.stringify(value)
    //     }
    // }
    //
    // "use strict";
    // Vue.component('loading-screen', {
    //     template: '<div id="loading">Loading...</div>'
    // })
    //
    // module.exports = {
    //     data() {
    //         return {
    //             isLoading: true,
    //             info:[],
    //             block: [],
    //             isDarkMode:true,
    //         }
    //     },
    //     props: ['slug'],
    //     mounted() {
    //         this.getBlock();
    //         isLoading: false;
    //     },
    //     methods: {
    //         darkMode(mode) {
    //             this.isDarkMode = mode;
    //         },
    //         async getBlock(){
    //             const res = await fetch(`https://enso.okno.rs/explorer/parallelcoin/block/${this.slug}`);
    //             const block = await res.json();
    //             this.block = block;
    //         }
    //     }
    // }
    // const html = '<amp-list layout="flex-item"\n' +
    //     '          src="amp-state:block"\n' +
    //     '          items="."\n' +
    //     '          single-item\n' +
    //     '          class="cgl">\n' +
    //     '    <template type="amp-mustache">\n' +
    //     '        <section class="flex-1 flex flex-col container mx-auto px-4 px-0 main-wrap">\n' +
    //     '            <header class="flex flex-col">\n' +
    //     '                <h1 class="my-8 flex flex-col xl:flex-row justify-between items-center heading-shadow-invert text-primary whitespace-nowrap overflow-ellipsis overflow-hidden" title="ParallelCoin Block"><strong class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl xl:text-8xl"> Block</strong><span class="text-7xl md:text-8xl xl:text-9xl xl:text-10xl">{{block}}</span></h1>\n' +
    //     '            </header>\n' +
    //     '            <article class="flex flex-col rounded md:rounded-lg bg-invert text-xl text-invert container mx-auto px-4 px-0 main-wrap">\n' +
    //     '                    <div class="flex-row header">\n' +
    //     '                        <h1 class="text-5xl heading-shadow whitespace-nowrap overflow-ellipsis overflow-hidden">Block {{height}}</h1>\n' +
    //     '                    </div>\n' +
    //     '                    <div class="grid grid-cols-5 gap-0 divide-y-2 divide-black divide-dotted divide-opacity-20">\n' +
    //     '                        {{#blockhash}}<div class="font-bold tracking-wide py-2">Block hash</div>{{/blockhash}}\n' +
    //     '                        {{#blockhash}}<div class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden">\n' +
    //     '                        <a class="no-underline hover:no-underline" href=\'"/block/" + hash\'>{{hash}}</a>\n' +
    //     '                    </div>{{/blockhash}}\n' +
    //     '                        {{#hash}}<div class="font-bold tracking-wide py-2">Hash</div><div class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden">{{hash}}</div>{{/hash}}\n' +
    //     '                            {{#previousblockhash}}<div class="font-bold py-2">Previous block Hash</div><div  class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden"><a class="no-underline hover:no-underline" href=\'"/block/" + previousblockhash\'>{{ previousblockhash }}</a></div>{{/previousblockhash}}\n' +
    //     '                            {{#nextblockhash}}<div class="font-bold py-2">Next block Hash</div><div  class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden"><a class="no-underline hover:no-underline" href=\'"/block/" + nextblockhash\'>{{ nextblockhash }}</a></div>{{/nextblockhash}}\n' +
    //     '                            {{#bits}}<div class="font-bold py-2">Bits</div><div  class="col-span-4 value py-2">{{bits}}</div>{{/bits}}\n' +
    //     '                            {{#confirmations}}<div class="font-bold py-2">Confirmations</div><div  class="col-span-4 value py-2">{{confirmations}}</div>{{/confirmations}}\n' +
    //     '                            {{#difficulty}}<div class="font-bold py-2">Difficulty</div><div class="col-span-4 value py-2">{{difficulty}}</div>{{/difficulty}}\n' +
    //     '                            {{#merkleroot}}<div class="font-bold py-2">Merkle root</div><div class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden">{{merkleroot}}</div>{{/merkleroot}}\n' +
    //     '                            {{#nonce}}<div class="font-bold py-2">Nonce</div><div class="col-span-4 value py-2">{{nonce}}</div>{{/nonce}}\n' +
    //     '                            {{#size}}<div class="font-bold py-2">Size</div><div  class="col-span-4 value py-2">{{size}}</div>{{/size}}\n' +
    //     '                            {{#pow_algo}}<div class="font-bold py-2">POW algo</div><div  class="col-span-4 value py-2">{{pow_algo}}</div>{{/pow_algo}}\n' +
    //     '                            {{#pow_hash}}<div class="font-bold py-2">Hash</div><div  class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden">{{pow_hash}}</div>{{/pow_hash}}\n' +
    //     '                            {{#pow_algo_id}}<div class="font-bold py-2">Hash</div><div  class="col-span-4 value py-2">{{pow_algo_id}}</div>{{/pow_algo_id}}\n' +
    //     '                            {{#time}}<div class="font-bold py-2">Time</div><div class="col-span-4 value py-2">{{time}}</div>{{/time}}\n' +
    //     '                            {{#timeutc}}<div class="font-bold py-2">Time UTC</div><div  class="col-span-4 value py-2">{{timeutc}}</div>{{/timeutc}}\n' +
    //     '                            {{#version}}<div class="font-bold py-2">Version</div><div  class="col-span-4 value py-2">{{version}}</div>{{/version}}\n' +
    //     '                            {{#tx}}<div class="font-bold py-2">Number of transactions</div><div class="col-span-4 value py-2">{{tx.length}}</div>{{/tx}}\n' +
    //     '                            {{#tx}}<div class="font-bold py-2">Transactions</div>{{/tx}}\n' +
    //     '                            {{#tx}}<div class="col-span-4 value py-2">\n' +
    //     '                        <div class="value flex flex-col my-4 p-6 bg-black bg-opacity-25 rounded-lg">\n' +
    //     '                        {{#tx}}<a class="whitespace-nowrap overflow-ellipsis overflow-hidden no-underline hover:no-underline" href=`/transaction/{{.}}`>{{.}}</a>{{/tx}}' +
    //     '                        </div>\n' +
    //     '            </article>\n' +
    //     '            <footer class="flex space-between">\n' +
    //     '                {{#previousblockhash}}<a class="flex-1 justify-center p-6 button blue text-2xl no-underline hover:no-underline title" href="/block/{{previousblockhash}}"><i class="fas fa-angle-left mr-2"></i>Previous block</a>{{/previousblockhash}}\n' +
    //     '                {{#nextblockhash}}<a class="flex-1 justify-center p-6 button blue text-2xl no-underline hover:no-underline" href="/block/{{nextblockhash}}">Next block<i class="fas fa-angle-right mr-2"></i></a>{{/nextblockhash}}\n' +
    //     '            </footer>\n' +
    //     '        </section>\n' +
    //     '    </template>\n' +
    //     '</amp-list>\n';

    const html =`<amp-list layout="responsive"
          width="600"
          height="400"
          src="amp-state:block"
          items="."
          single-item
          class="cgl">
    <template type="amp-mustache">
            <section class="flex-1 flex flex-col container mx-auto px-4 px-0 main-wrap">
                    <header class="flex flex-col">
                            <h1 class="my-8 flex flex-col xl:flex-row justify-between items-center heading-shadow-invert text-light whitespace-nowrap overflow-ellipsis overflow-hidden" title="ParallelCoin Block">
                            <strong class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl xl:text-8xl"> Block</strong><span class="text-7xl md:text-8xl xl:text-9xl xl:text-10xl">` + slug + `</span></h1>
                        </header>
                    <article class="flex flex-col rounded md:rounded-lg bg-dark text-xl text-light container mx-auto p-8 main-wrap">
                               <div class="grid grid-cols-5 gap-0 divide-y-2 divide-black divide-dotted divide-opacity-20">
                                        {{#blockhash}}<div class="font-bold tracking-wide py-2">Block hash</div><div class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden"><a class="no-underline hover:no-underline text-green_blue hover:text-orange" href="/block/{{blockhash}}">{{blockhash}}</a></div>{{/blockhash}}
                                        {{#hash}}<div class="font-bold tracking-wide py-2">Hash</div><div class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden">{{hash}}</div>{{/hash}}
                                            {{#previousblockhash}}<div class="font-bold py-2">Previous block Hash</div><div  class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden"><a class="no-underline hover:no-underline text-green_blue hover:text-orange" href="/block/{{ previousblockhash }}">{{ previousblockhash }}</a></div>{{/previousblockhash}}
                                            {{#nextblockhash}}<div class="font-bold py-2">Next block Hash</div><div  class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden"><a class="no-underline hover:no-underline text-green_blue hover:text-orange" href="/block/{{ nextblockhash }}">{{ nextblockhash }}</a></div>{{/nextblockhash}}
                                            {{#bits}}<div class="font-bold py-2">Bits</div><div  class="col-span-4 value py-2">{{bits}}</div>{{/bits}}
                                            {{#confirmations}}<div class="font-bold py-2">Confirmations</div><div  class="col-span-4 value py-2">{{confirmations}}</div>{{/confirmations}}
                                            {{#difficulty}}<div class="font-bold py-2">Difficulty</div><div class="col-span-4 value py-2">{{difficulty}}</div>{{/difficulty}}
                                            {{#merkleroot}}<div class="font-bold py-2">Merkle root</div><div class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden">{{merkleroot}}</div>{{/merkleroot}}
                                            {{#nonce}}<div class="font-bold py-2">Nonce</div><div class="col-span-4 value py-2">{{nonce}}</div>{{/nonce}}
                                            {{#size}}<div class="font-bold py-2">Size</div><div  class="col-span-4 value py-2">{{size}}</div>{{/size}}
                                            {{#pow_algo}}<div class="font-bold py-2">POW algo</div><div  class="col-span-4 value py-2">{{pow_algo}}</div>{{/pow_algo}}
                                            {{#pow_hash}}<div class="font-bold py-2">Hash</div><div  class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden">{{pow_hash}}</div>{{/pow_hash}}
                                            {{#pow_algo_id}}<div class="font-bold py-2">Hash</div><div  class="col-span-4 value py-2">{{pow_algo_id}}</div>{{/pow_algo_id}}
                                            {{#time}}<div class="font-bold py-2">Time</div><div class="col-span-4 value py-2">{{time}}</div>{{/time}}
                                            {{#timeutc}}<div class="font-bold py-2">Time UTC</div><div  class="col-span-4 value py-2">{{timeutc}}</div>{{/timeutc}}
                                            {{#version}}<div class="font-bold py-2">Version</div><div  class="col-span-4 value py-2">{{version}}</div>{{/version}}
                                            {{#tx}}<div class="font-bold py-2">Number of transactions</div><div class="col-span-4 value py-2">{{tx.length}}</div>{{/tx}}
                                            {{#tx}}<div class="font-bold py-2">Transactions</div>{{/tx}}
                                            {{#tx}}<div class="col-span-4 value py-2">
                                            <div class="value flex flex-col my-4 p-6 bg-black bg-opacity-25 rounded-lg">
                                                {{#tx}}<a class="whitespace-nowrap overflow-ellipsis overflow-hidden no-underline hover:no-underline text-green_blue hover:text-orange" href="/transaction/{{.}}">{{.}}</a>{{/tx}}
                                            </div>
                                        </div>{{/tx}}
                               </div>
                                </article>
                    <footer class="flex space-between">
                            {{#previousblockhash}}<a class="flex-1 justify-center p-6 button blue text-2xl no-underline hover:no-underline title text-green_blue hover:text-orange" href="/block/{{previousblockhash}}"><i class="fas fa-angle-left mr-2"></i>Previous block</a>{{/previousblockhash}}
                            {{#nextblockhash}}<a class="flex-1 justify-center p-6 button blue text-2xl no-underline hover:no-underline text-green_blue hover:text-orange" href="/block/{{nextblockhash}}">Next block<i class="fas fa-angle-right mr-2"></i></a>{{/nextblockhash}}
                        </footer>
                </section>
        </template>
</amp-list>`
</script>


<amp-state id="block" src="https://enso.okno.rs/explorer/parallelcoin/block/{slug}"></amp-state>


{@html html}



<style>


</style>
