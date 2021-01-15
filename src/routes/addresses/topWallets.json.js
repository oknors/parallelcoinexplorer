export async function get(req, res, next) {
    const limit = req.query.limit || 20;
    const offset = req.query.offset || 0;
    const api_res = await global.fetch(`https://jorm.okno.rs/b/parallelcoin/states/topWallets?limit=${limit}&offset=${offset}`)
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(await api_res.json()))
}
