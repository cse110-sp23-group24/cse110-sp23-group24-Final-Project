const fs = require('fs');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');

test('Pixel Comparison', () => {
  const img1 = PNG.sync.read(fs.readFileSync('reference.png'));
  const img2 = PNG.sync.read(fs.readFileSync('current.png'));
  const diff = new PNG({ width: img1.width, height: img1.height });

  const mismatchedPixels = pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    img1.width,
    img1.height,
    { threshold: 0.1 }
  );

  // Assert the number of mismatched pixels or perform other assertions
  expect(mismatchedPixels).toBe(0);
});