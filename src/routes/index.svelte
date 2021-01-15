<script context="module">
    //stores
    import { NetworkSymbol } from '../js/stores'
    //Utils
    import { formatValue } from '../js/utils'

    export async function preload(page, session) {
        let getInfo =  await this.fetch(`https://jorm.okno.rs/b/parallelcoin/info`).then(res => res.json().then(json => json["d"]))
        let blockList =  await this.fetch(`https://jorm.okno.rs/b/parallelcoin/blocks/5/1`).then(res => res.json().then(json => json["d"]))
        return { getInfo, blockList }
        // return await res.json()
    }
</script>

<script>
    import { onMount } from 'svelte'

    //Components
    import DifficultyBox from '../components/DifficultyBox.svelte'
    import TotalAddressesBox from '../components/TotalAddressesBox.svelte'
    import LastBlockBox from '../components/LastBlockBox.svelte'
    import InfoBox from '../components/InfoBox.svelte'

    //Utils
    import whitelabel from '../js/whitelabel'

    export let blockList;
    export let txList;
    export let getInfo;
    export let topWalletsList;
    export let totalContracts;
    export let totalAddresses;


    $: networkType = $NetworkSymbol === 'DUO' ? 'Mainnet' : 'Testnet'

    const blockListItems = [
        {field: 'height', title: 'Block', link: true, route: 'blocks'},
        {field: 'confirmations', title: 'confirmations'},
        {field: 'txs', title: 'Transactions'},
        {field: 'hash', title: 'Hash', flexgrow: true, shrink: true}
    ]
    const txListItems = [
        {field: 'contractName', title: 'Contract'},
        {field: 'functionName', title: 'Function', hideMobile: true},
        {field: 'stampsUsed', title: 'Stamps Used'},
        {field: 'hash', title: 'Hash', link: true, route: 'transactions', shrink: true}
    ]
    const topWalletsListItems = [
        {title: 'Rank'},
        {field: 'key', title: 'Address', link: true, route: 'addresses', shrink: true},
        {field: 'value', title: 'Amount', flexgrow: true, toFixed: whitelabel.mainpage.topWallets.columns.amount.toFixed, prefix: whitelabel.mainpage.topWallets.columns.amount.prefix},
    ]

    onMount(() => {
        const timerID = setInterval(refreshPageData, 10000);
        return () => {
            clearInterval(timerID)
        }
    })

    const refreshPageData = async () => {
        // let pageInfo =  await fetch('https://jorm.okno.rs/b/parallelcoin/info')
        //     .then(res => res.json().then(json => json["d"]))
        // if (blockList !== pageInfo.blockList) blockList = pageInfo.blockList
        // if (txList !== pageInfo.txList) txList = pageInfo.txList
        // if (topWalletsList !== pageInfo.topWalletsList) topWalletsList = pageInfo.topWalletsList
        // if (totalContracts !== pageInfo.totalContracts) totalContracts = pageInfo.totalContracts
        // if (totalAddresses !== pageInfo.totalAddresses) totalAddresses = pageInfo.totalAddresses
    }
</script>

<style>
    a{
        display: inline;
    }
    p{
        max-width: 444px;
        margin-top: 0;
    }
    .hero-rec{
        box-sizing: border-box;
        margin-top: 3rem;
        padding: 40px 0;
        border-radius: 4px;
        margin-bottom: 18px;
        background-image: url('../../img/hero.svg');
        background-position-x: 47%;
        background-size: cover;
        background-repeat: no-repeat;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        text-shadow: 1px 1px rgba(0,0,0,0.62);
    }
</style>

<svelte:head>
    <title>ParallelCoin {networkType} Explorer</title>
</svelte:head>

<h1>{whitelabel.mainpage.title}</h1>
{#if whitelabel.mainpage.subtitle.show}
    <p class="text-body-1">
        {#if whitelabel.mainpage.subtitle.message === "parallelcoin_default"}
            <span class="font-secondary">{`Built on the ParallelCoin ecosystem to display all the blockchain information.?`}</span>
            <a class="outside-link" href="https://www.parallelcoin.info" target="_blank" rel="noreferrer noopener">{`Download the Wallet`}</a>
            <span class="font-secondary">{` or `}</span>
            <a class="outside-link" href="https://www.parallelcoin.info" target="_blank" rel="noreferrer noopener">{`visit our website`}</a>
        {:else}
            <span class="font-secondary">{whitelabel.mainpage.subtitle.message}</span>
        {/if}
    </p>
{/if}


{#if whitelabel.mainpage.detailsBox.show}
    <div class="flex-row hero-rec">
        {#if whitelabel.mainpage.detailsBox.items.showPriceInfo}<LastBlockBox lastBlock={getInfo.blocks}/>{/if}
        {#if whitelabel.mainpage.detailsBox.items.showSmartContractCount}<DifficultyBox difficulty={getInfo.difficulty}/>{/if}
        {#if whitelabel.mainpage.detailsBox.items.showTransactionCount}<TotalAddressesBox {totalAddresses} />{/if}
    </div>
{/if}

{#if whitelabel.mainpage.blocks.show}
    <InfoBox id="latest_blocks" title={'Latest Blocks'} info={blockList.blocks} itemList={blockListItems} route="blocks"/>
{/if}
{#if whitelabel.mainpage.latestTransactions.show}
    <InfoBox id="latest_transactions" title={'Latest Transactions'} info={txList} itemList={txListItems} route="transactions"/>
{/if}
{#if whitelabel.mainpage.topWallets.show}
    <InfoBox id="top_wallets" title={'Top Wallets'} info={topWalletsList} itemList={topWalletsListItems} route="addresses"/>
{/if}

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <div class="flex-1 flex justify-between sm:hidden">
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
            Previous
        </a>
        <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
            Next
        </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
            <p class="text-sm text-gray-700">
                Showing
                <span class="font-medium">1</span>
                to
                <span class="font-medium">10</span>
                of
                <span class="font-medium">97</span>
                results
            </p>
        </div>
        <div>
            <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Previous</span>
                    <!-- Heroicon name: chevron-left -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    1
                </a>
                <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    2
                </a>
                <a href="#" class="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    3
                </a>
                <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
          ...
        </span>
                <a href="#" class="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    8
                </a>
                <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    9
                </a>
                <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    10
                </a>
                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Next</span>
                    <!-- Heroicon name: chevron-right -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </a>
            </nav>
        </div>
    </div>
</div>
