module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      title: String,
      body: String,
      isPublished: Boolean,
    },
    {
      timestamps: true,
    }
  );
  //mengubah struktur schema default ke object yng diinginkan
  schema.method("toJSON", () => {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Post = mongoose.model("posts", schema);
  return Post;
};
