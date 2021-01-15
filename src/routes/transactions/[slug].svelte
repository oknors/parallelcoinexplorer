<script context="module">
	//Utils
	import { formatValue } from '../../js/utils'
	import { StampRatio, NetworkSymbol } from '../../js/stores'

	export async function preload(page, session) {
		const { slug } = page.params;
		const tx = await this.fetch(`https://jorm.okno.rs/b/parallelcoin/tx/${slug}`).then(res => res.json().then(json => json["d"]))
		return { tx }
	}
</script>

<script>
	import whitelabel from '../../js/whitelabel'

	export let tx;

	$: txNotFound = typeof tx === 'undefined'
	$: stampsToTAU = txNotFound ? 0 : $StampRatio === 0 ? 0 : tx.stampsUsed / $StampRatio;

	 const makeKey = (rawKey) => {
		return {
			contractName: rawKey.split(":")[0].split(".")[0],
			functionName: rawKey.split(":")[0].split(".")[1],
			key: rawKey.split(/:(.+)/)[1]
		}
	 }
</script>

<style>
	h2{
		margin-right: 10px;
	}
	h3{
		margin: 1rem 0 0;
	}
	div.flex-row{
		border-bottom: 1px dotted var(--divider-color);
		flex-grow: 1;
		padding: 8px 0;
	}
	div.flex-column.sub-rows{
		border-bottom: 1px dotted var(--divider-color);
		flex-grow: 1;
		padding: 8px 0;
		line-height: 1;
	}
	div.flex-row.sub-row{
		border-bottom: none;
	}
	div.title{
		min-width: 150px;
	}
	.header {
        align-items: baseline;
	}
	div.value{
		display: inline;
		word-break: break-word;
	}
</style>

<svelte:head>
	<title>{txNotFound ? `Tx not found` : `tx: ${tx.txid}`}</title>
</svelte:head>

{#if txNotFound}
	<h2>{`Hash Not Found`}</h2>
{:else}
	<div class="flex-row header">
		<h2>{`${whitelabel.transactions.title} `}</h2>
		{#if whitelabel.transactions.showTransactionHash}
			<div class="text-body-2 font-secondary shrink">{`${tx.txid}`}</div>
		{/if}
	</div>
		{#if whitelabel.transactions.mainInfo.status}
			<div class="flex-row">
				<div class="title">Status</div>
				<div class="value" class:text-red={tx.status === 1} class:text-green={tx.status === 0}>
					{tx.status === 1 ? 'Failed' : 'Success'}
				</div>
			</div>
		{/if}

		{#if whitelabel.transactions.mainInfo.contractName}
			<div class="flex-row">
				<div class="title">Contract Name</div><div class="value">{tx.contractName}</div>
			</div>
		{/if}

	<div class="flex-row">
		<div class="title">blockhash</div><div class="value">{tx.blockhash}</div>
	</div>
	<div class="flex-row">
		<div class="title">blocktime</div><div class="value">{tx.blocktime}</div>
	</div>
	<div class="flex-row">
		<div class="title">confirmations</div><div class="value">{tx.confirmations}</div>
	</div>
	<div class="flex-row">
		<div class="title">hex</div><div class="value">{tx.hex}</div>
	</div>
	<div class="flex-row">
		<div class="title">locktime</div><div class="value">{tx.locktime}</div>
	</div>
	<div class="flex-row">
		<div class="title">time</div><div class="value">{tx.time}</div>
	</div>

	<div class="flex-row">
		<div class="title">txid</div><div class="value">{tx.txid}</div>
	</div>
	<div class="flex-row">
		<div class="title">version</div><div class="value">{tx.version}</div>
	</div>



	<div class="flex-row">
		<div class="title">vin</div>
		<div class="value flex-column shrink">
			{#if tx.vin === 0}
				{'None'}
			{:else}
				{#each tx.vin as vtx}

					<div class="flex-row">
						<div class="title">Coinbase</div><div class="value">{vtx.coinbase}</div>
					</div>

					<div class="flex-row">
						<div class="title">Sequence</div><div class="value">{vtx.sequence}</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>


	<div class="flex-row">
		<div class="title">vout</div>
		<div class="value flex-column shrink">
			{#if tx.vout === 0}
				{'None'}
			{:else}
				{#each tx.vout as otx}

					<div class="flex-row">
						<div class="title">n</div><div class="value">{otx.n}</div>
					</div>

					<div class="flex-row">
						<div class="title">addresses</div>
						<div class="value flex-column shrink">
							{#if otx.scriptPubKey.addresses === 0}
								{'None'}
							{:else}
								{#each otx.scriptPubKey.addresses as address}
									<a class="outside-link" rel='prefetch' href={`addresses/${address}`}>{tx}</a>
								{/each}
							{/if}
						</div>
					</div>


					<div class="flex-row">
						<div class="title">asm</div><div class="value">{otx.scriptPubKey.asm}</div>
					</div>

					<div class="flex-row">
						<div class="title">hex</div><div class="value">{otx.scriptPubKey.hex}</div>
					</div>

					<div class="flex-row">
						<div class="title">reqSigs</div><div class="value">{otx.scriptPubKey.reqSigs}</div>
					</div>

					<div class="flex-row">
						<div class="title">type</div><div class="value">{otx.scriptPubKey.type}</div>
					</div>
					<div class="flex-row">
						<div class="title">value</div><div class="value">{otx.scriptPubKey.value}</div>
					</div>

				{/each}
			{/if}
		</div>
	</div>



		<!--{#if whitelabel.transactions.kwargInfo.show}-->
		<!--	<h3>{whitelabel.transactions.kwargInfo.title || "Kwargs"}</h3>-->
		<!--	{#if Object.keys(tx.kwargs).length === 0}-->
		<!--		<div class="title">{`None`}</div>-->
		<!--	{:else}-->
		<!--		{#each Object.keys(tx.kwargs) as kwarg}-->
		<!--			<div class="flex-row">-->
		<!--				<div class="title">{kwarg}</div>-->
		<!--				{#if isLamdenKey(tx.kwargs[kwarg])}-->
		<!--					<a class="outside-link shrink" rel='prefetch' href={`addresses/${tx.kwargs[kwarg]}`}>{tx.kwargs[kwarg]}</a>-->
		<!--				{:else}-->
		<!--					<div class="value">{formatValue(tx.kwargs[kwarg])}</div>-->
		<!--				{/if}-->
		<!--			</div>-->
		<!--		{/each}-->
		<!--	{/if}-->
		<!--{/if}-->

		<!--{#if whitelabel.transactions.stateChanges.show}-->
		<!--	<h3>{whitelabel.transactions.stateChanges.title || "State Changes"}</h3>-->
		<!--	{#if Array.isArray(tx.state)}-->
		<!--		{#each tx.state as kwarg}-->
		<!--			<div class="flex-column sub-rows">-->
		<!--				{#if whitelabel.transactions.stateChanges.showAdvanced}-->
		<!--					<div class="flex-row sub-row">-->
		<!--						<div class="title">Contract</div>-->
		<!--						<div class="value">{makeKey(kwarg.key).contractName}</div>-->
		<!--					</div>-->
		<!--					<div class="flex-row sub-row">-->
		<!--						<div class="title">Variable</div>-->
		<!--						<div class="value">{makeKey(kwarg.key).functionName}</div>-->
		<!--					</div>-->
		<!--				{/if}-->
		<!--				{#if makeKey(kwarg.key).key}-->
		<!--					<div class="flex-row sub-row">-->
		<!--						<div class="title">Key</div>-->
		<!--						{#if isLamdenKey(makeKey(kwarg.key).key)}-->
		<!--							<a class="outside-link shrink" rel='prefetch' href={`addresses/${makeKey(kwarg.key).key}`}>{makeKey(kwarg.key).key}</a>-->
		<!--						{:else}-->
		<!--							<div class="value">{makeKey(kwarg.key).key}</div>-->
		<!--						{/if}-->
		<!--					</div>-->
		<!--				{/if}-->
		<!--				<div class="flex-row sub-row">-->
		<!--					<div class="title">New Value</div>-->
		<!--					<div class="value">{formatValue(kwarg.value)}</div>-->
		<!--				</div>-->
		<!--			</div>-->
		<!--		{/each}-->
		<!--	{:else}-->
		<!--		<p>None</p>-->
		<!--	{/if}-->
		<!--{/if}-->
{/if}
