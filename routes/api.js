var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
var Random = Mock.Random;

router.post('/CheckReply', function (req, res, next) {
    var data = Mock.mock({
        "replies|1-50": [{
            "postid|+1": Random.integer(1,1000),
            "postname": Random.string(),
            "author": Random.string(),
            "receiver": Random.string(),
            "time": Random.datetime(),
            "content": Random.string(),
            "floor": Random.integer(1,100),
            "Rstate|1-2": true,
            "id|+1": Random.natural(1, 80000),
        }]
    });
    res.send({
        ReplyMessage: data
    });
});

router.post('/login', function (req, res, next) {
    res.send({
        message: "123;" + Random.string(),
        state: true,
        authorizeToken: Random.integer(100000, 199999)
    });
});

router.post('/getUnreadReplyNumber', function (req, res, next) {
    res.send({message: Random.integer(5, 10)});
});

module.exports = router;
