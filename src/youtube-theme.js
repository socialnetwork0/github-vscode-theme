const chroma = require("chroma-js");
const { getColors } = require("./colors");

// YouTube Creator Theme
// 基于GitHub主题，融入YouTube红色元素，专为内容创作者设计

function getYouTubeStudioTheme({ theme, name }) {
  // YouTube Studio品牌颜色系统 - 根据PRD精确定义
  const youtubeRed = "#FF0000";
  const youtubeRedDark = "#CC0000";
  const youtubeRedSubtle = theme === "youtube_studio_light" ? "#FF000015" : "#FF000020"; // 根据主题调整透明度
  const youtubeRedSelection = theme === "youtube_studio_light" ? "#FF000015" : "#FF00001A";

  const themes = (options) => options[theme];
  const rawColors = getColors(theme === "youtube_studio_light" ? "light" : "dark");
  const color = changeColorToHexAlphas(rawColors);
  const scale = color.scale;

  // YouTube Studio 专属背景颜色 - 按照PRD规范
  const youtubeStudioBackgrounds = {
    youtube_studio_dark: {
      editor: "#0F0F0F",      // YouTube 深色背景
      sideBar: "#181818",     // 稍亮的侧边栏
      activityBar: "#212121", // 活动栏背景
    },
    youtube_studio_light: {
      editor: "#FFFFFF",      // 明亮背景
      sideBar: "#F9F9F9",     // 浅灰侧边栏
      activityBar: "#FAFAFA", // 活动栏背景
    }
  };

  const studioBg = youtubeStudioBackgrounds[theme];

  const onlyDark = (color) => {
    return themes({ youtube_studio_dark: color })
  }

  const onlyLight = (color) => {
    return themes({ youtube_studio_light: color })
  }

  const lightDark = (light, dark) => {
    return themes({ youtube_studio_light: light, youtube_studio_dark: dark })
  }

  const alpha = (color, alpha) => {
    return chroma(color).alpha(alpha).hex()
  }

  // 为YouTube创作者优化的颜色覆盖
  const youtubeColorOverrides = {
    // 使用YouTube红色作为强调色
    "activityBar.activeBorder": youtubeRed,
    "activityBarBadge.background": youtubeRed,
    "badge.background": youtubeRed,
    "button.background": youtubeRedDark,
    "button.hoverBackground": youtubeRed,
    "focusBorder": youtubeRed,
    "progressBar.background": youtubeRed,
    "statusBar.focusBorder": alpha(youtubeRed, 0.5),
    "statusBarItem.focusBorder": youtubeRed,
    "tab.activeBorderTop": youtubeRed,
    "panelTitle.activeBorder": youtubeRed,
    
    // 选择和高亮使用PRD指定的红色
    "editor.selectionBackground": youtubeRedSelection, // 按PRD规范
    "editor.inactiveSelectionBackground": youtubeRedSubtle,
    "editor.lineHighlightBorder": lightDark(alpha(youtubeRed, 0.3), alpha(youtubeRed, 0.2)),
    "list.focusBackground": youtubeRedSubtle,
    "list.inactiveFocusBackground": youtubeRedSubtle,
    "list.activeSelectionBackground": youtubeRedSelection, // PRD指定的激活选择背景
    "list.hoverBackground": lightDark("#FFFFFF0A", "#FFFFFF0A"), // PRD指定的悬停背景
    
    // 保持原有的可读性，只在特定位置使用红色
    "textLink.foreground": lightDark(youtubeRedDark, youtubeRed),
    "textLink.activeForeground": lightDark(youtubeRedDark, youtubeRed),
    
    // Git装饰保持原有颜色，不使用红色避免与错误状态混淆
    "gitDecoration.addedResourceForeground": color.success.fg,
    "gitDecoration.modifiedResourceForeground": color.attention.fg,
    "gitDecoration.deletedResourceForeground": color.danger.fg,
  };

  return {
    name: name,
    colors: {
      // 基础GitHub主题颜色
      foreground           : color.fg.default,
      descriptionForeground: color.fg.muted,
      errorForeground      : color.danger.fg,

      "textBlockQuote.background": color.canvas.inset,
      "textBlockQuote.border"    : color.border.default,
      "textCodeBlock.background" : color.neutral.muted,
      "textPreformat.foreground" : color.fg.muted,
      "textPreformat.background" : color.neutral.muted,
      "textSeparator.foreground" : color.border.muted,

      "icon.foreground"           : color.fg.muted,
      "keybindingLabel.foreground": color.fg.default,

      "button.secondaryBackground"     : color.btn.activeBg,
      "button.secondaryForeground"     : color.btn.text,
      "button.secondaryHoverBackground": color.btn.hoverBg,

      "checkbox.background": color.canvas.subtle,
      "checkbox.border"    : color.border.default,

      "dropdown.background"    : color.canvas.overlay,
      "dropdown.border"        : color.border.default,
      "dropdown.foreground"    : color.fg.default,
      "dropdown.listBackground": color.canvas.overlay,

      "input.background"           : color.canvas.default,
      "input.border"               : color.border.default,
      "input.foreground"           : color.fg.default,
      "input.placeholderForeground": color.fg.subtle,

      "badge.foreground": color.fg.onEmphasis,

      "titleBar.activeForeground"  : color.fg.muted,
      "titleBar.activeBackground"  : color.canvas.default,
      "titleBar.inactiveForeground": color.fg.muted,
      "titleBar.inactiveBackground": color.canvas.inset,
      "titleBar.border"            : color.border.default,

      "activityBar.foreground"        : lightDark("#030303", "#FFFFFF"),
      "activityBar.inactiveForeground": lightDark("#606060", "#AAAAAA"), // PRD指定的描述文本颜色
      "activityBar.background"        : studioBg.activityBar, // YouTube Studio 活动栏
      "activityBarBadge.foreground"   : color.fg.onEmphasis,
      "activityBar.border"            : color.border.default,

      "sideBar.foreground"             : lightDark("#030303", "#FFFFFF"),
      "sideBar.background"             : studioBg.sideBar, // YouTube Studio 侧边栏
      "sideBar.border"                 : color.border.default,
      "sideBarTitle.foreground"        : color.fg.default,
      "sideBarSectionHeader.foreground": color.fg.default,
      "sideBarSectionHeader.background": color.canvas.inset,
      "sideBarSectionHeader.border"    : color.border.default,

      "list.hoverForeground"            : color.fg.default,
      "list.inactiveSelectionForeground": color.fg.default,
      "list.activeSelectionForeground"  : color.fg.default,
      "list.hoverBackground"            : color.neutral.subtle,
      "list.inactiveSelectionBackground": color.neutral.muted,
      "list.activeSelectionBackground"  : color.neutral.muted,
      "list.focusForeground"            : color.fg.default,
      "list.highlightForeground"        : youtubeRed, // 使用YouTube红色突出显示

      "tree.indentGuidesStroke": color.border.muted,

      "notificationCenterHeader.foreground": color.fg.muted,
      "notificationCenterHeader.background": color.canvas.subtle,
      "notifications.foreground"           : color.fg.default,
      "notifications.background"           : color.canvas.overlay,
      "notifications.border"               : color.border.default,
      "notificationsErrorIcon.foreground"  : color.danger.fg,
      "notificationsWarningIcon.foreground": color.attention.fg,
      "notificationsInfoIcon.foreground"   : youtubeRed, // 信息图标使用YouTube红色

      "pickerGroup.border"    : color.border.default,
      "pickerGroup.foreground": color.fg.muted,
      "quickInput.background" : color.canvas.overlay,
      "quickInput.foreground" : color.fg.default,

      "statusBar.foreground"             : color.fg.muted,
      "statusBar.background"             : color.canvas.default,
      "statusBar.border"                 : color.border.default,
      "statusBar.noFolderBackground"     : color.canvas.default,
      "statusBar.debuggingForeground"    : color.fg.onEmphasis,
      "statusBar.debuggingBackground"    : color.danger.emphasis,
      "statusBarItem.prominentBackground": color.neutral.muted,
      "statusBarItem.remoteForeground"   : color.fg.default,
      "statusBarItem.remoteBackground"   : lightDark(color.scale.gray[1], color.scale.gray[6]),
      "statusBarItem.hoverBackground"    : alpha(color.fg.default, 0.08),
      "statusBarItem.activeBackground"   : alpha(color.fg.default, 0.12),

      "editorGroupHeader.tabsBackground": color.canvas.inset,
      "editorGroupHeader.tabsBorder"    : color.border.default,
      "editorGroup.border"              : color.border.default,

      "tab.activeForeground"        : color.fg.default,
      "tab.inactiveForeground"      : color.fg.muted,
      "tab.inactiveBackground"      : color.canvas.inset,
      "tab.activeBackground"        : color.canvas.default,
      "tab.hoverBackground"         : color.canvas.default,
      "tab.unfocusedHoverBackground": color.neutral.subtle,
      "tab.border"                  : color.border.default,
      "tab.unfocusedActiveBorderTop": color.border.default,
      "tab.activeBorder"            : color.canvas.default,
      "tab.unfocusedActiveBorder"   : color.canvas.default,

      "breadcrumb.foreground"               : color.fg.muted,
      "breadcrumb.focusForeground"          : color.fg.default,
      "breadcrumb.activeSelectionForeground": color.fg.muted,
      "breadcrumbPicker.background"         : color.canvas.overlay,

      "editor.foreground"                 : lightDark("#030303", "#FFFFFF"), // PRD指定的文本颜色
      "editor.background"                 : studioBg.editor, // YouTube Studio 专属背景
      "editorWidget.background"           : color.canvas.overlay,
      "editor.foldBackground"             : alpha(color.neutral.emphasis, 0.1),
      "editor.lineHighlightBackground"    : color.codemirror.activelineBg,
      "editorLineNumber.foreground"       : lightDark(scale.gray[4], scale.gray[4]),
      "editorLineNumber.activeForeground" : color.fg.default,
      "editorIndentGuide.background"      : alpha(color.fg.default, 0.12),
      "editorIndentGuide.activeBackground": alpha(color.fg.default, 0.24),
      "editorWhitespace.foreground"       : lightDark(scale.gray[3], scale.gray[5]),
      "editorCursor.foreground"           : youtubeRed, // 光标使用YouTube红色

      "editor.findMatchBackground"            : color.attention.emphasis,
      "editor.findMatchHighlightBackground"   : alpha(scale.yellow[1], 0.5),
      "editor.linkedEditingBackground"        : alpha(youtubeRed, 0.07), // 链接编辑使用红色
      "editor.selectionHighlightBackground"   : alpha(scale.green[3], 0.25),
      "editor.wordHighlightBackground"        : alpha(color.neutral.subtle, 0.5),
      "editor.wordHighlightBorder"            : alpha(color.neutral.muted, 0.6),
      "editor.wordHighlightStrongBackground"  : alpha(color.neutral.muted, 0.3),
      "editor.wordHighlightStrongBorder"      : alpha(color.neutral.muted, 0.6),
      "editorBracketMatch.background"         : alpha(scale.green[3], 0.25),
      "editorBracketMatch.border"             : alpha(scale.green[3], 0.6),

      "editorInlayHint.background": alpha(scale.gray[3], 0.2),
      "editorInlayHint.foreground": color.fg.muted,
      "editorInlayHint.typeBackground": alpha(scale.gray[3], 0.2),
      "editorInlayHint.typeForeground": color.fg.muted,
      "editorInlayHint.paramBackground": alpha(scale.gray[3], 0.2),
      "editorInlayHint.paramForeground": color.fg.muted,

      "editorGutter.modifiedBackground": color.attention.muted,
      "editorGutter.addedBackground"   : color.success.muted,
      "editorGutter.deletedBackground" : color.danger.muted,

      "diffEditor.insertedLineBackground": lightDark(alpha(scale.green[1], 0.3), alpha(scale.green[5], 0.15)),
      "diffEditor.insertedTextBackground": lightDark(alpha(scale.green[2], 0.5), alpha(scale.green[3], 0.3)),
      "diffEditor.removedLineBackground" : lightDark(alpha(scale.red[1], 0.3), alpha(scale.red[5], 0.15)),
      "diffEditor.removedTextBackground" : lightDark(alpha(scale.red[3], 0.4), alpha(scale.red[3], 0.3)),

      "scrollbar.shadow"                  : alpha(scale.gray[5], 0.2),
      "scrollbarSlider.background"        : lightDark(alpha(scale.gray[4], 0.2), alpha(scale.gray[3], 0.2)),
      "scrollbarSlider.hoverBackground"   : lightDark(alpha(scale.gray[4], 0.24), alpha(scale.gray[3], 0.24)),
      "scrollbarSlider.activeBackground"  : lightDark(alpha(scale.gray[4], 0.28), alpha(scale.gray[3], 0.28)),
      "editorOverviewRuler.border"        : lightDark(scale.white, scale.black),

      "minimapSlider.background"          : lightDark(alpha(scale.gray[4], 0.2), alpha(scale.gray[3], 0.2)),
      "minimapSlider.hoverBackground"     : lightDark(alpha(scale.gray[4], 0.24), alpha(scale.gray[3], 0.24)),
      "minimapSlider.activeBackground"    : lightDark(alpha(scale.gray[4], 0.28), alpha(scale.gray[3], 0.28)),

      "panel.background"               : color.canvas.inset,
      "panel.border"                   : color.border.default,
      "panelTitle.activeForeground"    : color.fg.default,
      "panelTitle.inactiveForeground"  : color.fg.muted,
      "panelInput.border"              : color.border.default,

      "debugIcon.breakpointForeground": color.danger.fg,

      "debugConsole.infoForeground": lightDark(scale.gray[6], scale.gray[3]),
      "debugConsole.warningForeground": lightDark(scale.yellow[6], scale.yellow[3]),
      "debugConsole.errorForeground": lightDark(scale.red[5], scale.red[2]),
      "debugConsole.sourceForeground": lightDark(scale.yellow[5], scale.yellow[2]),
      "debugConsoleInputIcon.foreground": lightDark(scale.purple[6], scale.purple[3]),

      "debugTokenExpression.name": lightDark(scale.blue[6], scale.blue[2]),
      "debugTokenExpression.value": lightDark(scale.blue[8], scale.blue[1]),
      "debugTokenExpression.string": lightDark(scale.blue[8], scale.blue[1]),
      "debugTokenExpression.boolean": lightDark(scale.green[6], scale.green[2]),
      "debugTokenExpression.number": lightDark(scale.green[6], scale.green[2]),
      "debugTokenExpression.error": lightDark(scale.red[6], scale.red[2]),

      "symbolIcon.arrayForeground": lightDark(scale.orange[6], scale.orange[3]),
      "symbolIcon.booleanForeground": lightDark(scale.blue[6], scale.blue[3]),
      "symbolIcon.classForeground": lightDark(scale.orange[6], scale.orange[3]),
      "symbolIcon.colorForeground": lightDark(scale.blue[8], scale.blue[2]),
      "symbolIcon.constructorForeground": lightDark(scale.purple[8], scale.purple[2]),
      "symbolIcon.enumeratorForeground": lightDark(scale.orange[6], scale.orange[3]),
      "symbolIcon.enumeratorMemberForeground": lightDark(scale.blue[6], scale.blue[3]),
      "symbolIcon.eventForeground": lightDark(scale.gray[6], scale.gray[4]),
      "symbolIcon.fieldForeground": lightDark(scale.orange[6], scale.orange[3]),
      "symbolIcon.fileForeground": lightDark(scale.yellow[6], scale.yellow[3]),
      "symbolIcon.folderForeground": lightDark(scale.yellow[6], scale.yellow[3]),
      "symbolIcon.functionForeground": lightDark(scale.purple[6], scale.purple[3]),
      "symbolIcon.interfaceForeground": lightDark(scale.orange[6], scale.orange[3]),
      "symbolIcon.keyForeground": lightDark(scale.blue[6], scale.blue[3]),
      "symbolIcon.keywordForeground": lightDark(scale.red[6], scale.red[3]),
      "symbolIcon.methodForeground": lightDark(scale.purple[6], scale.purple[3]),
      "symbolIcon.moduleForeground": lightDark(scale.red[6], scale.red[3]),
      "symbolIcon.namespaceForeground": lightDark(scale.red[6], scale.red[3]),
      "symbolIcon.nullForeground": lightDark(scale.blue[6], scale.blue[3]),
      "symbolIcon.numberForeground": lightDark(scale.green[6], scale.green[3]),
      "symbolIcon.objectForeground": lightDark(scale.orange[6], scale.orange[3]),
      "symbolIcon.operatorForeground": lightDark(scale.blue[8], scale.blue[2]),
      "symbolIcon.packageForeground": lightDark(scale.orange[6], scale.orange[3]),
      "symbolIcon.propertyForeground": lightDark(scale.orange[6], scale.orange[3]),
      "symbolIcon.referenceForeground": lightDark(scale.blue[6], scale.blue[3]),
      "symbolIcon.snippetForeground": lightDark(scale.blue[6], scale.blue[3]),
      "symbolIcon.stringForeground": lightDark(scale.blue[8], scale.blue[2]),
      "symbolIcon.structForeground": lightDark(scale.orange[6], scale.orange[3]),
      "symbolIcon.textForeground": lightDark(scale.blue[8], scale.blue[2]),
      "symbolIcon.typeParameterForeground": lightDark(scale.blue[8], scale.blue[2]),
      "symbolIcon.unitForeground": lightDark(scale.blue[6], scale.blue[3]),
      "symbolIcon.variableForeground": lightDark(scale.orange[6], scale.orange[3]),
      "symbolIcon.constantForeground": lightDark(scale.green[6], scale.green),

      "terminal.foreground": color.fg.default,
      'terminal.ansiBlack': color.ansi.black,
      'terminal.ansiRed': color.ansi.red,
      'terminal.ansiGreen': color.ansi.green,
      'terminal.ansiYellow': color.ansi.yellow,
      'terminal.ansiBlue': color.ansi.blue,
      'terminal.ansiMagenta': color.ansi.magenta,
      'terminal.ansiCyan': color.ansi.cyan,
      'terminal.ansiWhite': color.ansi.white,
      'terminal.ansiBrightBlack': color.ansi.blackBright,
      'terminal.ansiBrightRed': color.ansi.redBright,
      'terminal.ansiBrightGreen': color.ansi.greenBright,
      'terminal.ansiBrightYellow': color.ansi.yellowBright,
      'terminal.ansiBrightBlue': color.ansi.blueBright,
      'terminal.ansiBrightMagenta': color.ansi.magentaBright,
      'terminal.ansiBrightCyan': color.ansi.cyanBright,
      'terminal.ansiBrightWhite': color.ansi.whiteBright,

      "editorBracketHighlight.foreground1": lightDark(scale.blue[5], scale.blue[2]),
      "editorBracketHighlight.foreground2": lightDark(scale.green[5], scale.green[2]),
      "editorBracketHighlight.foreground3": lightDark(scale.yellow[5], scale.yellow[2]),
      "editorBracketHighlight.foreground4": lightDark(scale.red[5], scale.red[2]),
      "editorBracketHighlight.foreground5": lightDark(scale.pink[5], scale.pink[2]),
      "editorBracketHighlight.foreground6": lightDark(scale.purple[5], scale.purple[2]),
      "editorBracketHighlight.unexpectedBracket.foreground": color.fg.muted,

      "gitDecoration.addedResourceForeground"      : color.success.fg,
      "gitDecoration.modifiedResourceForeground"   : color.attention.fg,
      "gitDecoration.deletedResourceForeground"    : color.danger.fg,
      "gitDecoration.untrackedResourceForeground"  : color.success.fg,
      "gitDecoration.ignoredResourceForeground"    : color.fg.subtle,
      "gitDecoration.conflictingResourceForeground": color.severe.fg,
      "gitDecoration.submoduleResourceForeground"  : color.fg.muted,

      "debugToolBar.background"                    : color.canvas.overlay,
      "editor.stackFrameHighlightBackground"       : color.attention.muted,
      "editor.focusedStackFrameHighlightBackground": color.success.muted,

      "peekViewEditor.matchHighlightBackground": onlyDark(color.attention.muted),
      "peekViewResult.matchHighlightBackground": onlyDark(color.attention.muted),
      "peekViewEditor.background"              : onlyDark(color.neutral.subtle),
      "peekViewResult.background"              : onlyDark(scale.gray[9]),

      "settings.headerForeground"        : color.fg.default,
      "settings.modifiedItemIndicator"   : color.attention.muted,
      "welcomePage.buttonBackground"     : color.btn.bg,
      "welcomePage.buttonHoverBackground": color.btn.hoverBg,

      // YouTube特定的颜色覆盖
      ...youtubeColorOverrides,
    },
    semanticHighlighting: true,
    tokenColors: [
      // 保持GitHub原有的语法高亮，确保可读性
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: lightDark(scale.gray[5], scale.gray[3])
        },
      },
      {
        scope: [
          "constant.other.placeholder",
          "constant.character"
        ],
        settings: {
          foreground: lightDark(scale.red[5], scale.red[3])
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.other.enummember",
          "variable.language",
          "entity",
        ],
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        settings: {
          foreground: lightDark(scale.orange[6], scale.orange[2])
        },
      },
      {
        scope: [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression"
        ],
        settings: {
          foreground: color.fg.default,
        },
      },
      {
        "scope": "entity.name.function",
        "settings": {
          foreground: lightDark(scale.purple[5], scale.purple[2])
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "support.class.component"
        ],
        settings: {
          foreground: lightDark(scale.green[6], scale.green[1])
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: lightDark(scale.red[5], scale.red[3])
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: lightDark(scale.red[5], scale.red[3])
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: color.fg.default,
        },
      },
      {
        scope: [
          "string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: lightDark(scale.blue[8], scale.blue[1])
        },
      },
      {
        scope: "support",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: lightDark(scale.orange[6], scale.orange[2])
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: color.fg.default,
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: lightDark(scale.red[5], scale.red[3]),
          foreground: lightDark(scale.gray[0], scale.gray[0]),
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: lightDark(scale.blue[8], scale.blue[1])
        },
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
        ],
        settings: {
          foreground: lightDark(scale.blue[8], scale.blue[1])
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: lightDark(scale.green[6], scale.green[1])
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "support.type.property-name.json",
        settings: {
          foreground: lightDark(scale.green[6], scale.green[1])
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: lightDark(scale.orange[6], scale.orange[2])
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: lightDark(scale.green[6], scale.green[1])
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: color.fg.default,
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: color.fg.default,
        },
      },
      {
        scope: ["markup.underline"],
        settings: {
          fontStyle: "underline",
        },
      },
      {
        scope: ["markup.strikethrough"],
        settings: {
          fontStyle: "strikethrough",
        },
      },
      {
        scope: "markup.inline.raw",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: lightDark(scale.red[0], scale.red[9]),
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: ["punctuation.section.embedded"],
        settings: {
          foreground: lightDark(scale.red[5], scale.red[3])
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: lightDark(scale.green[0], scale.green[9]),
          foreground: lightDark(scale.green[6], scale.green[1])
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: lightDark(scale.orange[1], scale.orange[8]),
          foreground: lightDark(scale.orange[6], scale.orange[2])
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: lightDark(scale.gray[1], scale.gray[8]),
          background: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: lightDark(scale.purple[5], scale.purple[2]),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: {
          foreground: lightDark(scale.gray[6], scale.gray[3])
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: lightDark(scale.blue[8], scale.blue[1]),
        },
      },
    ],
  };
}

// Convert to hex - 复制自theme.js
function changeColorToHexAlphas(obj) {
  if (typeof obj === 'object') {
    for (var keys in obj) {
      if (typeof obj[keys] === 'object') {
        changeColorToHexAlphas(obj[keys])
      } else {
        let keyValue = obj[keys]
        if(chroma.valid(keyValue)){
          obj[keys] = chroma(keyValue).hex();
        }
      }
    }
  }
  return obj;
}

module.exports = getYouTubeStudioTheme;
