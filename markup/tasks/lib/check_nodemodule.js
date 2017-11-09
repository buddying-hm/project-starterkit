const path = require('path');
const fs = require('fs');

const nodeModules = path.resolve(process.cwd(), 'node_modules');

if (!fs.existsSync(nodeModules)) {
  console.error('プロジェクトルートにnode_modulesが見当たりません。\nプロジェクトルートで`npm run install`もしくは`yarn`コマンドを実行。\n詳しくはREADME.mdを参照してください。');
  process.exit(1);
}
