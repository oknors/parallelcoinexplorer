export async function get(req, res, next) {
    const api_res = await global.fetch(`https://jorm.okno.rs/b/parallelcoin/totaladdresses`)
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(await api_res.json()))
}
