const service = require('../services/post.service');

exports.createPost = async (req, res) => {
  const post = await service.create(req.body);
  res.status(201).json(post);
};

exports.getPosts = async (_, res) => {
  const posts = await service.findAll();
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await service.findById(req.params.id);
  res.json(post);
};

exports.updatePost = async (req, res) => {
  const post = await service.update(req.params.id, req.body);
  res.json(post);
};

exports.deletePost = async (req, res) => {
  await service.remove(req.params.id);
  res.status(204).send();
};

exports.searchPosts = async (req, res) => {
  const posts = await service.search(req.query.q);
  res.json(posts);
};
