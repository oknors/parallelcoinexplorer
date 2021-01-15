export async function get(req, res, next) {
    let address = req.query.address;
    const api_res = await global.fetch(`https://jorm.okno.rs/b/parallelcoin/states/balances/${address}`)

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(await api_res.json()))
}
