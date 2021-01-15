<script context="module">

    export async function preload(page, session) {
        let blockList =  await this.fetch(`https://jorm.okno.rs/b/parallelcoin/blocks/20/1`).then(res => res.json().then(json => json["d"]))
        let ready = true
        if (blockList !== undefined) ready = true
        return { blockList, ready }
    }

</script>

<script>
	//Utils
	import whitelabel from '../../js/whitelabel'

    //Components
    import BigTable from '../../components/BigTable.svelte';

	export let blockList;
    export let ready;
	const blockListItems = []

	if (whitelabel.blocks.table.columns.block.show)
		blockListItems.push({field: 'height', title: whitelabel.blocks.table.columns.block.title, link: true, route: 'blocks'})
        blockListItems.push({field: 'confirmations', title: whitelabel.blocks.table.columns.confirmations.title, flexgrow: true, shrink: true})
        blockListItems.push({field: 'txs', title: whitelabel.blocks.table.columns.transactions.title, flexgrow: true, shrink: true})
		blockListItems.push({field: 'hash', title: whitelabel.blocks.table.columns.hash.title, flexgrow: true, shrink: true})


</script>

<BigTable limit={whitelabel.blocks.table.rows} title={whitelabel.blocks.table.title} info={blockList} itemList={blockListItems} {ready}/>
