# YouTube Studio VS Code Theme


## Install

1. Go to [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=YouTube.youtube-studio-vscode-theme).
2. Click on the "Install" button.
3. Then [select a theme](https://code.visualstudio.com/docs/getstarted/themes#_selecting-the-color-theme). The YouTube Studio themes are designed specifically for YouTube content creators:
    - `YouTube Studio Light` - Perfect for daytime content creation
    - `YouTube Studio Dark` - Ideal for evening editing sessions

## About This Theme

This theme is specially crafted for YouTube content creators who want a professional, branded workspace that reflects their identity as creators. Built on the solid foundation of GitHub's VS Code theme architecture, it brings YouTube's signature red (#FF0000) and modern design principles to your coding environment.

### Key Features

- **Creator-Focused Design**: Every element is designed with YouTube creators in mind
- **YouTube Brand Integration**: Subtle use of YouTube red for accents and highlights
- **Professional Studio Feel**: Mimics the clean, modern aesthetic of YouTube Studio
- **Dual Theme Support**: Light theme for daytime work, dark theme for evening sessions
- **Comfortable Long Sessions**: Optimized for extended content creation workflows

## Override this theme

To override this (or any other) theme in your personal config file, please follow the guide in the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation. This is handy for small tweaks to the theme without having to fork and maintain your own theme. 

## Contribute

1. Clone and open this [repo](https://github.com/youtube/youtube-studio-vscode-theme) in VS Code
2. Run `yarn` to install the dependencies.
3. Press `F5` to open a new window with your extension loaded
4. Open `Code > Preferences > Color Theme` [`⌘k ⌘t`] and pick the "YouTube Studio ..." theme you want to test.
5. Make changes to the [`/src/theme.js`](https://github.com/youtube/youtube-studio-vscode-theme/blob/master/src/theme.js) file.
    - **UI**: For all changes to the "outer UI", like (status bar, file navigation etc.), take a look at the [Theme Color](https://code.visualstudio.com/api/references/theme-color) reference.
    - **Syntax**: For changes to the "code highlighting", examine the syntax scopes by invoking the [`Developer: Inspect Editor Tokens and Scopes`](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#scope-inspector) command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) in the Extension Development Host window.
6. Run `yarn build` to update the theme. You can also run `yarn start` instead to automatically rebuild the theme while making changes and no reloading should be necessary.
7. Once you're happy, commit your changes and open a PR.

Note:

- If possible use colors from [YouTube's design system](https://developers.google.com/youtube/v3/guides/branding-guidelines).

## Publish (internal)

> Note: Publishing a new version of this theme is only meant for maintainers.

This repo uses [changesets](https://github.com/atlassian/changesets) to automatically make updates to [CHANGELOG.md](https://github.com/youtube/youtube-studio-vscode-theme/blob/main/CHANGELOG.md) and publish a new version to the [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=YouTube.youtube-studio-vscode-theme).
