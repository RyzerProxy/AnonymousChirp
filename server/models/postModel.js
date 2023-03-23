const mongoose = require("mongoose");
const postSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", postSchema);
