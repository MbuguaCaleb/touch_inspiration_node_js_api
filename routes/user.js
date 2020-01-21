const router = require("express").Router();
const User = require("../model/User");

//creating user
router.post("/createUser", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    occupation: req.body.occupation,
    bio: req.body.bio
  });

  if (user.save()) {
    res.json({
      user,
      msg: "user successfully created!",
      status: 200
    });
  } else {
    res.json({ msg: err, status: 400 });
  }
});

//Fetching usersList
router.get("/usersList", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users, msg: "users successfully fetched!", status: 200 });
  } catch (err) {
    res.json({ msg: err, status: 400 });
  }
});

//Getting a specificUser
router.get("/user/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json({ user, msg: "user successfully fetched!", status: 200 });
  } catch (err) {
    res.json({ msg: err, status: 400 });
  }
});

//Updating a specific user
router.patch("/updateUser/:userId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          occupation: req.body.occupation,
          bio: req.body.bio
        }
      }
    );

    res.json({ updatedUser, msg: "users successfully updated!", status: 200 });
  } catch (err) {
    res.json({ msg: err, status: 400 });
  }
});
module.exports = router;
