const express = require("express");

const postController = require("../controllers/postController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router
  .route("/")
  .get(protect, postController.getAllPosts)
  .post(protect, postController.createPost);
// .get(postController.getAllPosts)
// .post(postController.createPost);

router
  .route("/:id")
  .get(protect, postController.getOnePost)
  .patch(protect, postController.updatePost)
  .delete(protect, postController.deletePost);
//   .get(postController.getOnePost)
//   .patch(postController.updatePost)
//   .delete(postController.deletePost);

module.exports = router;
