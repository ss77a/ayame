const generateFavicons = require('simple-favicon-generator');

(async () => {
  const targetImage = './src/assets/images/demo/logo.png';
  const siteName = 'Ayame 6';
  await generateFavicons(targetImage, siteName, './public/');
})();
