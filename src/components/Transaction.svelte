<script>
    export let slug;
    // export let block;


    const html =`<amp-list layout="responsive"
          width="600"
          height="400"
          src="amp-state:tx"
          items="."
          single-item
          class="cgl">
    <template type="amp-mustache">

            <section class="flex-1 flex flex-col container mx-auto px-4 px-0 main-wrap">
                    <header class="flex flex-col">
                            <h1 class="my-8 flex flex-col xl:flex-row justify-between items-center heading-shadow-invert text-light whitespace-nowrap overflow-ellipsis overflow-hidden" title="ParallelCoin Transaction">
                            <strong class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl xl:text-8xl"> Transaction </strong><span class="text-7xl md:text-8xl xl:text-9xl xl:text-10xl">` + slug + `</span></h1>
                        </header>



<article class="flex flex-col rounded md:rounded-lg bg-dark text-xl text-light container mx-auto p-8 main-wrap">
            <div class="grid grid-cols-5 gap-0 divide-y-2 divide-black divide-dotted divide-opacity-20">
                {{#blockhash}}<div class="font-bold tracking-wide py-2">Block hash</div>
                <div class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden">
                    <a class="no-underline hover:no-underline text-green_blue hover:text-orange"  href="/block/{{blockhash}}">{{blockhash}}</a>
                </div>{{/blockhash}}
                {{#blocktime}}<div class="font-bold tracking-wide py-2">Block time</div><div class="col-span-4 value py-2">{{blocktime}}</div>{{/blocktime}}
                {{#confirmations}}<div class="font-bold tracking-wide py-2">Confirmations</div><div class="col-span-4 value py-2">{{confirmations}}</div>{{/confirmations}}
                {{#locktime}}<div class="font-bold tracking-wide py-2">Lock time</div><div class="col-span-4 value py-2">{{locktime}}</div>{{/locktime}}
                {{#time}}<div class="font-bold tracking-wide py-2">Time</div><div class="col-span-4 value py-2">{{time}}</div>{{/time}}
                {{#txid}}<div class="font-bold tracking-wide py-2">TxID</div><div class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden">{{txid}}</div>{{/txid}}
                {{#version}}<div class="font-bold tracking-wide py-2">Version</div><div class="col-span-4 value py-2">{{version}}</div>{{/version}}

                {{#vin}}<div class="font-bold tracking-wide py-2">Input</div>
                <div class="col-span-4 column w-full">
                    <div class="value my-4 p-4 flex-column w-full  bg-black bg-opacity-25 rounded-lg divide-y-2 divide-black divide-dotted divide-opacity-20" >
                        {{#coinbase}}
                        <div class="flex flex-row my-2"><div class="font-bold tracking-wide w-24">Coinbase</div><div class="value break-all">{{coinbase}}</div></div>
                        {{/coinbase}}
                        {{#sequence}}
                        <div class="flex flex-row my-2"><div class="font-bold tracking-wide w-24\t">Sequence</div><div class="value">{{sequence}}</div></div>
                        {{/sequence}}
                        {{#scriptSig}}
                        <div class="flex flex-row my-2">
                            <div class="font-bold tracking-wide w-36">ScriptSig</div>
                            <div class="value break-all">
                                {{#scriptSig.asm}}<div class="flex flex-row py-2">
                                    <div class="font-bold tracking-wide w-24">ASM</div><div class="value">{{scriptSig.asm}}</div>
                                </div>
                                {{/scriptSig.asm}}
                                {{#scriptSig.hex}}<div class="flex flex-row py-2">
                                    <div class="font-bold tracking-wide w-24\t">HEX</div><div class="value">{{scriptSig.hex}}</div>
                                </div>
                                {{/scriptSig.hex}}
                            </div>
                        </div>
                        {{/scriptSig}}
                        {{#sequence}}<div class="flex flex-row py-2">
                            <div class="font-bold tracking-wide w-36\t">Sequence</div><div class="value">{{sequence}}</div>
                        </div>{{/sequence}}
                        {{#txid}}<div class="flex flex-row py-2">
                            <div class="font-bold tracking-wide w-36\t">TxId</div><div class="value whitespace-nowrap overflow-ellipsis overflow-hidden">
                            <a class="whitespace-nowrap overflow-ellipsis overflow-hidden no-underline hover:no-underline"  href="transaction/{{txid}}">{{txid}}</a>
                        </div>
                        </div>
                        {{/txid}}
                        {{#vout}}<div class="flex flex-row py-2">
                            <div class="font-bold tracking-wide w-36\t">Value out</div><div class="value">{{vout}}</div>
                        </div>{{/vout}}
                    </div>
                </div>
                {{/vin}}
                {{#vout}}<div class="font-bold tracking-wide py-2">Output</div>
                <div class="col-span-4 column w-full">
                    <div class="value flex-column my-4 p-6 bg-black bg-opacity-25 rounded-lg">
                        <div class="flex flex-row py-2">
                            <div class="font-bold tracking-wide py-2 ">Sequence number</div>
                            <div class="col-span-4 value py-2">{{n}}</div>
                        </div>
                        <div class="my-2 grid grid-cols-5 gap-0 divide-y-2 divide-black divide-dotted divide-opacity-20">
                            <div class="font-bold tracking-wide min-w-min">Addresses</div>
                            {{#scriptPubKey.addresses}}<div class="col-span-4 value py-2 whitespace-nowrap overflow-ellipsis overflow-hidden">
                                {{#.}}<a class="no-underline hover:no-underline text-green_blue hover:text-orange" href="/addresses/{{.}}">{{.}}</a>{{/.}}
                            </div>{{/scriptPubKey.addresses}}
                            {{#scriptPubKey.asm}}<div class="font-bold tracking-wide py-2 min-w-min">ASM</div><div class="col-span-4 value whitespace-normal\tbreak-all py-2">{{scriptPubKey.asm}}</div>{{/scriptPubKey.asm}}
                            {{#scriptPubKey.hex}}<div class="font-bold tracking-wide py-2">Hex</div><div class="col-span-4 value whitespace-normal\tbreak-all py-2">{{scriptPubKey.hex}}</div>{{/scriptPubKey.hex}}
                            {{#scriptPubKey.reqSigs}}<div class="font-bold tracking-wide py-2">Request Signatures</div><div class="col-span-4 value py-2">{{scriptPubKey.reqSigs}}</div>{{/scriptPubKey.reqSigs}}
                            {{#scriptPubKey.type}}<div class="font-bold tracking-wide py-2">Type</div><div class="col-span-4 value py-2">{{scriptPubKey.type}}</div>{{/scriptPubKey.type}}
                            {{#value}}<div class="font-bold tracking-wide py-2">Value</div><div class="col-span-4 value py-2">{{value}}</div>{{/value}}
                        </div>
                    </div>
                </div>
                {{/vout}}
                {{#hex}}<div class="font-bold tracking-wide py-2">Hex</div><div class="col-span-4 value break-all py-6"><div class="value break-all p-6 bg-black bg-opacity-25 rounded-lg">{{hex}}</div></div>{{/hex}}
            </div>

        </article>

                </section>
        </template>
</amp-list>`
</script>


<amp-state id="tx" src="https://enso.okno.rs/explorer/parallelcoin/tx/{slug}"></amp-state>


{@html html}



<style>


</style>


