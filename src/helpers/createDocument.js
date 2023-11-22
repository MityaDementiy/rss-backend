/* eslint-disable no-console */
const createDocument = async (Model, data) => {
  const document = new Model(data);

  try {
    const savedDocument = await document.save();
    console.log('Document created successfully:', savedDocument);
    return savedDocument;
  } catch (error) {
    console.error('Error creating document:', error);
    throw error;
  }
};

export default createDocument;
