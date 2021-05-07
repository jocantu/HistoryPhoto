const Post = require("../models/Post");

module.exports = {
  getIndex: async (req, res) => {
    try {
      const post = await Post.find();
      console.log(post);
      res.render("index.ejs", { posts: post});
    } catch (err) {
      console.log(err);
    }
  },
};

