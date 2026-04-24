const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

// Create .nojekyll file to disable Jekyll processing
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

// Create root index.html that redirects to /zh/
const rootIndexHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JCIE</title>
  <script>
    // Redirect to Chinese version by default
    window.location.replace('/JCIE_Website/zh/');
  </script>
  <meta http-equiv="refresh" content="0;url=/JCIE_Website/zh/">
  <link rel="canonical" href="/JCIE_Website/zh/">
</head>
<body>
  <a href="/JCIE_Website/zh/">Click here to continue</a>
</body>
</html>`;
fs.writeFileSync(path.join(outDir, 'index.html'), rootIndexHtml);

// Copy 404.html to root if needed
const zh404Path = path.join(outDir, 'zh', '404.html');
const root404Path = path.join(outDir, '404.html');

if (fs.existsSync(zh404Path)) {
  fs.copyFileSync(zh404Path, root404Path);
}

console.log('Postbuild completed: .nojekyll created, index.html redirect created, 404.html copied to root');
