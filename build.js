const { minify } = require("terser");
const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");

const srcDir = path.join(__dirname, "src");
const outDir = path.join(__dirname, "build");

fs.removeSync(outDir);
fs.mkdirSync(outDir);

const jsFiles = glob.sync(`${srcDir}/**/*.js`, {
  ignore: "**/node_modules/**",
});

if (jsFiles.length > 0) {
  let combinedJs = "";
  jsFiles.forEach((file) => {
    const content = fs.readFileSync(file, "utf8");
    combinedJs += content + "\n";
  });

  minify(combinedJs, {
    compress: true,
    mangle: true,
    format: { comments: false },
  })
    .then((result) => {
      fs.writeFileSync(path.join(outDir, "index.min.js"), result.code, "utf8");
      console.log("✅ JS -> index.min.js");
    })
    .catch((err) => console.error(err));
}

const cssFiles = glob.sync(`${srcDir}/**/*.css`, {
  ignore: "**/node_modules/**",
});

if (cssFiles.length > 0) {
  let combinedCss = "";
  cssFiles.forEach((file) => {
    const css = fs.readFileSync(file, "utf8");
    combinedCss += css.replace(/\s+/g, " ").trim();
  });
  fs.writeFileSync(path.join(outDir, "index.min.css"), combinedCss, "utf8");
  console.log("✅ CSS -> index.min.css");
}

const htmlFiles = glob.sync(`${srcDir}/**/*.html`, {
  ignore: "**/node_modules/**",
});

htmlFiles.forEach((file) => {
  const dest = path.join(outDir, path.relative(srcDir, file));
  fs.ensureDirSync(path.dirname(dest));
  fs.copyFileSync(file, dest);
});

console.log("✅ HTML copied");
console.log("✅ Build complete!");
