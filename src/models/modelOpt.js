exports.schemaOpt = {
  toJSON: {
    virtauls: true, // include virtuals when converting document to JSON
  },
  toObject: {
    virtauls: true, // include virtuals when converting document to object
  },
  timestamps: true, // add createdAt and updatedAt fields
};
