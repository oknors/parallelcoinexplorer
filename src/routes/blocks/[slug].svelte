<script context="module">
	//Utils
	import {formatValue } from '../../js/utils'

	export async function preload(page, session) {
        const { slug } = page.params;
		const blockRaw = await this.fetch(`https://jorm.okno.rs/b/parallelcoin/block/${slug}`).then(res => res.json().then(json => json["d"]))
		let block =  blockRaw
		return { block }
    }
</script>

<script>
	import whitelabel from '../../js/whitelabel'

	export let block;


	$:blockNotFound = typeof block === 'undefined'
</script>

<style>
	h2{
		margin-right: 10px;
	}
	div.flex-row{
		border-bottom: 1px dotted var(--divider-color);
		flex-grow: 1;
		padding: 8px 0;
	}
	div.title{
		min-width: 150px;
	}
	.header {
        align-items: baseline;
	}
	.outside-link{
	    white-space: nowrap;
		text-overflow: ellipsis;
		min-width: 30px;
		overflow: hidden;
	}
</style>

<svelte:head>
	<title>{blockNotFound ? `Block not found` : `Block # ${formatValue(block.height)}`}</title>
</svelte:head>

<div class="flex-row header">
	<h2>{`${whitelabel.blocks.title} `}</h2>
	{#if whitelabel.blocks.showBlockNum}
		<div class="text-body-2 font-secondary">{formatValue(block.height)}</div>
	{/if}
</div>
{#if blockNotFound}
	<div class="flex-row">
		<div class="title">Not Found</div>
	</div>
{:else}
	{#if whitelabel.blocks.mainInfo.hash}
		<div class="flex-row">
			<div class="title">Hash</div><div class="value shrink">{block.hash}</div>
		</div>
	{/if}
	{#if whitelabel.blocks.mainInfo.previousHash}
		<div class="flex-row">
			<div class="title">Previous Hash</div><div class="value shrink">{block.previousblockhash}</div>
		</div>
	{/if}


	<div class="flex-row">
		<div class="title">Next block hash</div><div class="value">{formatValue(block.nextblockhash)}</div>
	</div>


	<div class="flex-row">
		<div class="title">Bits</div><div class="value">{formatValue(block.bits)}</div>
	</div>
	<div class="flex-row">
		<div class="title">Confirmations</div><div class="value">{formatValue(block.confirmations)}</div>
	</div>
	<div class="flex-row">
		<div class="title">Difficulty</div><div class="value">{formatValue(block.difficulty)}</div>
	</div>
	<div class="flex-row">
		<div class="title">Merkle root</div><div class="value">{formatValue(block.merkleroot)}</div>
	</div>
	<div class="flex-row">
		<div class="title">Nonce</div><div class="value">{formatValue(block.nonce)}</div>
	</div>
	<div class="flex-row">
		<div class="title">Size</div><div class="value">{formatValue(block.size)}</div>
	</div>
	<div class="flex-row">
		<div class="title">POW algo</div><div class="value">{formatValue(block.pow_algo)}</div>
	</div>
	<div class="flex-row">
		<div class="title">POW hash</div><div class="value">{formatValue(block.pow_hash)}</div>
	</div>
	<div class="flex-row">
		<div class="title">POW algo id</div><div class="value">{formatValue(block.pow_algo_id)}</div>
	</div>
	<div class="flex-row">
		<div class="title">Time</div><div class="value">{formatValue(block.time)}</div>
	</div>
	<div class="flex-row">
		<div class="title">Time UTC</div><div class="value">{formatValue(block.timeutc)}</div>
	</div>
	<div class="flex-row">
		<div class="title">Version</div><div class="value">{formatValue(block.version)}</div>
	</div>

	{#if whitelabel.blocks.mainInfo.numOfSubBlocks}
		<div class="flex-row">
<!--			<div class="title"># of SubBlocks</div><div class="value">{formatValue(block.numOfSubBlocks)}</div>-->
		</div>
	{/if}
	{#if whitelabel.blocks.mainInfo.numOfTransactions}
		<div class="flex-row">
<!--			<div class="title"># of Transactions</div><div class="value">{formatValue(block.numOfTransactions)}</div>-->
		</div>
	{/if}
	{#if whitelabel.blocks.mainInfo.transactions}
		<div class="flex-row">
			<div class="title">Transactions</div>
			<div class="value flex-column shrink">
				{#if block.tx.length === 0}
					{'None'}
				{:else}
					{#each block.tx as tx}
					<a class="outside-link" rel='prefetch' href={`transactions/${tx}`}>{tx}</a>
					{/each}
				{/if}
			</div>
		</div>
	{/if}
{/if}
