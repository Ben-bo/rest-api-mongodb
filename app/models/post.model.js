module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      title: {
        type: String,
      },
      body: String,
      isPublished: Boolean,
    },
    {
      timestamps: true,
    }
  );
  //mengubah struktur schema default ke object yng diinginkan
  //jika menggunaka errow function maka toObject akan error
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Post = mongoose.model("posts", schema);
  return Post;
};
