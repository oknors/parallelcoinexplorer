<script>

    export let ready;

    //Components
    import Button from './Button.svelte'
    import Pagenation from './Pagenation.svelte'
    import Loader from './Loader.svelte'

    //Utils
    import { formatValue } from '../js/utils'
	import whitelabel from '../js/whitelabel'

    //Props
    export let title = '';
    export let info;
    export let itemList = [];
    export let reverse = false;
    export let limit = 20;

    let count = info.lastBlock
    let pageCount = info.pageCount
    let items = info.blocks


    const updateList = (e) => {
        ready = false
        fetchData(e.detail)
    }

    const fetchData = async (parms) => {
        let response = await fetch(`https://jorm.okno.rs/b/parallelcoin/blocks/20/${parms.page}`).then(res => res.json())
        items = response.d.blocks
        if (items !== undefined) ready = true
    }

</script>

<style>
h2{
    margin-top: 1rem;
}
.flex-table{
    display: flex;
    flex-direction: row;
}
.col{
    display: flex;
    flex-direction: column;
}
.col-header{
    min-width: max-content;
    padding-right: 10px;
}
.col-header-divider{
    border-bottom: 2px solid var(--divider-color);
}
.col-item{
    padding: 5px 20px 5px 0;
    max-width: 90%;
    white-space: nowrap;
	text-overflow: ellipsis;
    overflow: hidden;
}
.row-divider{
    border-bottom: 1px solid var(--divider-color);
}
.flex-grow{
    flex-grow: 1;
}
.mobile-col{
    display: none;
}

@media (min-width: 480px) {
    .mobile-col{
        display: flex;
        flex-direction: column;
    }
    .col-item{
        max-width: 100%;
    }
    .col-header{
        padding-right: 20px;
    }
    h2{
        margin-top: 3rem;
    }
}
</style>

<h2>{title}</h2>
<Pagenation on:updateList={updateList} {reverse} {count} {limit} {pageCount} />
<div class="flex-table">
    {#if ready}
    {#each itemList as colInfo}
        <div class:col={!colInfo.hideMobile}
                class:mobile-col={colInfo.hideMobile}
                class:flex-grow={colInfo.flexgrow}
                class:shrink={colInfo.shrink}>
            <div class="col-header text-body-1 font-secondary">{colInfo.title}</div>
            <div class="col-header-divider"></div>
            {#each items as rowInfo}
                {#each Object.keys(rowInfo) as rowItem}
                    {#if colInfo.field === rowItem}
                        {#if colInfo.link}
                            <a class="outside-link col-item text-body-1" class:shrink={colInfo.shrink} rel='prefetch' href={`${colInfo.route}/${rowInfo[rowItem]}`}>{rowInfo[rowItem]}</a>
                        {:else}
                            <div class="col-item text-body-1" class:shrink={colInfo.shrink}>
                                {`${colInfo.prefix ? whitelabel.balancePrefix : ""}` + formatValue(rowInfo[rowItem], colInfo.toFixed !== undefined ? colInfo.toFixed : undefined)}
                            </div>
                        {/if}
                        <div class="row-divider"></div>
                    {/if}
                {/each}
            {/each}
        </div>
    {/each}
        {:else}
            <Loader />
        {/if}
</div>
