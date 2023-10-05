const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    
    username: {
      type: String,
      required: true,
      trim: true, 
    },

    
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true, 
    },
    
    password: {
      type: String,
      required: true,
      trim: true,
    },
    roles: [
      {
        ref: "Role", 
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true, 
    versionKey: false,
  }
);

module.exports = model("User", userSchema);