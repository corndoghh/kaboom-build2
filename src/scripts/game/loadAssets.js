export const loadAssets = async () => {
    const data = await (await fetch("/getSprites")).json()
    await new Promise((r, _j) => { data.map(async (x, i) => { await loadSprite(x.split(".")[0], "sprites/"+x); if (i+1 == data.length) { r() }  }) })
}