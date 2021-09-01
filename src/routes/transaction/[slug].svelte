<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ page, fetch, session, context }) {
        const url = `https://enso.okno.rs/explorer/parallelcoin/block/${page.params.slug}`;
        const res = await fetch(url);
        if (res.ok) {
            return {
                props: {
                    slug:page.params.slug,
                    block: await res.json()
                }
            };
        }
        return {
            status: res.status,
            error: new Error(`Could not load ${url}`)
        };
    }
</script>
<script>
    export let slug;
    // export let block;
    import Transaction from '../../components/Transaction.svelte';
    import Status from '../../components/Status.svelte';
    let info = {
        difficulty_sha256d:0,
        difficulty_scrypt:0
    }
</script>


<Transaction slug={slug}/>

<Status />
