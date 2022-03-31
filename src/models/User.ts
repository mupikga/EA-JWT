const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: { type: Number},
  name: { type: String, required: true },
  password: { type: String, required: true},
  username: { type: String, required: true},
});

export default mongoose.model("User", UserSchema);
