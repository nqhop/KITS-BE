function uniqueMiddleware(units) {
    return (req, res, next) => {
        const { name } = req.body;
        units.find(it => it.name === name)
    }
}