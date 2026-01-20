const Post = require('../models/post.model');

exports.create = data => Post.create(data);
exports.findAll = () => Post.find();
exports.findById = id => Post.findById(id);
exports.update = (id, data) => Post.findByIdAndUpdate(id, data, { new: true });
exports.remove = id => Post.findByIdAndDelete(id);
exports.search = term =>
  Post.find({
    $or: [
      { title: new RegExp(term, 'i') },
      { content: new RegExp(term, 'i') }
    ]
  });
