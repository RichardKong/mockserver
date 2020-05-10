var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
var Random = Mock.Random;

router.post('/CheckReply', function (req, res, next) {
    var data = Mock.mock({
        "replies|1-50": [{
            "postid|+1": 2,
            "postname|1-10": "*",
            "author|1-10": "*",
            "receiver|1-10": "*",
            "time": Random.datetime(),
            "content|1-200": "*",
            "floor|1-100": 2,
            "Rstate|1-2": true,
            "id|1+": 2,
        }]
    });
    res.send({
        replies: data
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
