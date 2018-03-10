var express = require('express');
var router = express.Router();
const rp = require('request-promise-native');

/* GET users listing. */
router.get('/', async (req, res) => {

    const response = await rp.get('https://www.paprikaapp.com/api/v1/sync/groceries/', {
        'auth': {
            'user': req.query.user,
            'pass': req.query.password,
            'sendImmediately': false
        }
    });

    res.send(response);
});

module.exports = router;
