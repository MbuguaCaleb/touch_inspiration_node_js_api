const router = require("express").Router();
const User = require("../model/User");

router.post("/create", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    occupation: req.body.occupation,
    bio: req.body.bio
  });

  if (user.save()) {
    res.send({
      user: user
    });
  } else {
    res.status(400);
  }
});

module.exports = router;
