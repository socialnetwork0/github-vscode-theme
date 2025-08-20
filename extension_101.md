# Yarn
yarn install

# 打包
npx @vscode/vsce package
or
yarn vsce package

# 安装本地 vsix
code --install-extension *.vsix

# 选择主题
# VS Code → Command Palette → "Color Theme" → 选你的主题

# 调试（热重载看改动）
# 在主题工程按 F5 启动开发宿主；改 JSON 保存 → “Developer: Reload Window” 刷新