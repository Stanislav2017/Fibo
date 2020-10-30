const Story = require('../models/Story');

class MainController {
    index(req, res, next) {
        return res.render('index');
    }

    async findFibo(req, res, next) {
        const { num } = req.body;
        const fiboNumber =  fib(num);
        await Story.create({ num: fiboNumber }).catch(err => console.log(err));
        return res.json({ fiboNumber });
    }
}

const fib = n => {
    const sq5 = Math.sqrt(5);
    const fi = (1 + sq5) / 2;
    const pci = (1 - sq5) / 2;
    let pos = Math.round(getBaseLog(fi, n * sq5));
    return Math.round((Math.pow(fi, pos) - Math.pow(pci, pos)) / sq5);  
}

const getBaseLog = (x, y) => {
    return Math.log(y) / Math.log(x);
};

module.exports = new MainController();