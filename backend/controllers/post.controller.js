
import Post from '../models/post.model.js';

export async function list(req, res) {
  const items = await Post.find().sort({ createdAt: -1 });
  res.json(items);
}

export async function create(req, res) {
  try {
    const { title, content, imageUrl } = req.body;
    const post = await Post.create({ title, content, imageUrl, author: req.user?.uid });
    res.json(post);
  } catch (e) {
    res.status(400).json({ msg: 'Error creando post', error: e.message });
  }
}
