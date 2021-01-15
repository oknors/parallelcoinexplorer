

export async function get(req, res, next) {
    const { txAmount, blocksAmount } = req.query

    if (!txAmount) txAmount = 10
    if (!blocksAmount) blocksAmount = 10

    const fetchAllData = async () => {
        let allInfo = await Promise.all([
            // global.fetch(`https://jorm.okno.rs/b/parallelcoin/blocks/10/1`).then(resp => resp.json()).then(json => json.data),
            global.fetch(`https://jorm.okno.rs/b/parallelcoin/blocks/${parseInt(blocksAmount)}/1`).then(resp => resp.json()).then(json => json.data),
            // global.fetch(`https://jorm.okno.rs/b/parallelcoin/blocks/${parseInt(blocksAmount)}`).then(resp => resp.json()).then(json => json.data),
            // global.fetch(`https://jorm.okno.rs/b/parallelcoin/transactions?limit=${parseInt(txAmount)}`).then(resp => resp.json()).then(json => json.data),
            // global.fetch(`https://jorm.okno.rs/b/parallelcoin/states/topWallets?limit=20`).then(resp => resp.json()).then(json => json.data),
            // global.fetch(`https://jorm.okno.rs/b/parallelcoin/totalcontracts`).then(resp => resp.json()),
            // global.fetch(`https://jorm.okno.rs/b/parallelcoin/states/totaladdresses`).then(resp => resp.json())
        ])
        return {
            blockList: allInfo[0],
            txList: allInfo[1],
            topWalletsList: allInfo[2],
            totalContracts: allInfo[3],
            totalAddresses: allInfo[4].count
        }
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(await fetchAllData()))
}
