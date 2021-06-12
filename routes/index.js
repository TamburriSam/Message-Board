var express = require("express");
var router = express.Router();

const messages = [
  { text: "hi there", user: "Amando", added: new Date() },
  { text: "hello world", user: "Charles", added: new Date() },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini message board", messages: messages });
});

router.get("/new", function (req, res) {
  res.render("forms", { title: "Message", button: "Submit" });
});

router.post("/new", function (req, res) {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
