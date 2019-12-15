function sampleProviceData() {
    return {
        name: 'Asia',
        producers: [
            {name: 'gz', cost: 10, production: 9},
            {name: 'sz', cost: 12, production: 10},
            {name: 'bj', cost: 10, production: 6},
        ],
        demand: 30,
        price: 20          
    }
}

module.exports = {
    sampleProviceData
}