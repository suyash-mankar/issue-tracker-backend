const mongoose = require("mongoose");

// Create an issueSchema
const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;
