const path = require('path');
const { test } = require('../fixtures');
const { FILES } = require('../test-data/paths');

test('file upload with page object', async ({ fileUploadPage }) => {
  const filePath = path.resolve(FILES.sampleImage);

  await fileUploadPage.open();
  await fileUploadPage.upload(filePath);
  await fileUploadPage.expectUploadedFile(FILES.sampleImage);
});
