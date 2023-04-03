const callbacks = {
  fileUpload() {
    console.log("fileUpload");
  },
  afterChange() {
    console.log("afterChange");
  },
  afterInit() {
    console.log("afterInit");
  },
  beforeImageMounted() {
    console.log("beforeImageMounted");
  }
};

export default {
  // Third party package
  externals: {
    // externals
  },
  // engine configuration
  engine: {
    // Global configuration
    global: {
      // Enable classic new line logic
      // true：One line break is ignored and more than two consecutive lines break into paragraphs
      // false： One line break will turn into < br >, two consecutive line breaks will be divided into paragraphs, and more than three consecutive line breaks will turn into < br > and divide into paragraphs
      classicBr: false,
      /**
       * global URL processor
       * @param {string} url 来源url
       * @param {'image'|'audio'|'video'|'autolink'|'link'} srcType 来源类型
       * @returns
       */
      urlProcessor(url, srcType) {
        console.log(`url-processor`, url, srcType);
        return url;
      },
      /**
       * Additional HTML tags that allow rendering
       * Labels are separated by vertical lines in English，such as htmlWhiteList: 'iframe|script|style'
       * It is empty by default. See Src / utils / sanitize.html for the HTML allowed to be rendered by default JS whitelist property
       * attention：
       *    - After enabling iframe, script and other tags, XSS injection will be generated. Please judge whether it needs to be enabled according to the actual scene
       *    - Generally, scenes with controllable editing permissions (such as API document system) can allow iframe, script and other tags
       */
      htmlWhiteList: ""
    },
    // Built in syntax configuration
    syntax: {
      // Syntax switch
      // 'hookName': false,
      // Syntax configuration
      // 'hookName': {
      //
      // }
      autoLink: {
        /** default open short link display */
        enableShortLink: true,
        /** default display 20 characters */
        shortLinkLength: 20
      },
      list: {
        listNested: false, // The sibling list type becomes a child after conversion
        indentSpace: 2 // Default 2 space indents
      },
      table: {
        enableChart: false
        // chartRenderEngine: EChartsTableEngine,
        // externals: ['echarts'],
      },
      inlineCode: {
        theme: "red"
      },
      codeBlock: {
        theme: "dark", // Default to dark theme
        wrap: true, // If it exceeds the length, whether to wrap the line. If false, the scroll bar will be displayed
        lineNumber: true, // Default display line number
        customRenderer: {
          // Custom syntax renderer
        },
        /**
         * indentedCodeBlock Is the switch whether indent code block is enabled
         *
         *    this syntax is not supported by default in versions before 6.X.
         *    Because cherry's development team thinks the syntax is too ugly (easy to touch by mistake)
         *    The development team hopes to completely replace this syntax with ` ` code block syntax
         *    However, in the subsequent communication, the development team found that the syntax had better display effect in some scenarios
         *    Therefore, the development team in 6 This syntax was introduced in version X
         *    if you want to upgrade the following versions of services without users' awareness, you can remove this syntax:
         *        indentedCodeBlock：false
         */
        indentedCodeBlock: true
      },
      emoji: {
        useUnicode: true // Whether to render using Unicode
      },
      fontEmphasis: {
        allowWhitespace: false // Allow leading and trailing spaces
      },
      strikethrough: {
        needWhitespace: false // Must there be a first space
      },
      mathBlock: {
        engine: "MathJax", // katex or MathJax
        src: "",
        plugins: true // Default load plug-in
      },
      inlineMath: {
        engine: "MathJax", // katex or MathJax
        src: ""
      },
      toc: {
        /** By default, only one directory is rendered */
        allowMultiToc: false
      },
      header: {
        /**
         * Style of title：
         *  - default       Default style with anchor in front of title
         *  - autonumber    There is a self incrementing sequence number anchor in front of the title
         *  - none          Title has no anchor
         */
        anchorStyle: "default"
      }
    }
  },
  editor: {
    codemirror: {
      // depend on codemirror theme name: https://codemirror.net/demo/theme.html
      // manual import theme: `import 'codemirror/theme/<theme-name>.css';`
      theme: "default"
    },
    // The height of the editor is 100% by default. If the height of the mount point has an inline setting, the inline style will prevail
    height: "100%",
    // defaultModel The default mode of the editor after initialization. There are three modes: 1. Double column edit preview mode; 2. Pure editing mode; 3. Preview mode
    // edit&preview: Double column edit preview mode
    // editOnly: Pure editing mode (without preview, you can switch to double column or preview mode through toolbar)
    // previewOnly: Preview mode (there is no edit box, the toolbar only displays the "return to edit" button, which can be switched to edit mode through the toolbar)
    defaultModel: "edit&preview",
    // Whether to automatically convert HTML to markdown when pasting
    convertWhenPaste: true
  },
  // toolbar configuration
  toolbars: {
    theme: "light", // light or dark
    showToolbar: true, // False: the top toolbar is not displayed; True: display toolbar; toolbars. Showtoolbar = false and toolbars Toolbar = false equivalent
    toolbar: [
      "bold",
      "italic",
      "strikethrough",
      "|",
      "color",
      "header",
      "|",
      "list",
      {
        insert: [
          "image",
          "audio",
          "video",
          "link",
          "hr",
          "br",
          "code",
          "formula",
          "toc",
          "table",
          "line-table",
          "bar-table",
          "pdf",
          "word"
        ]
      },
      "graph",
      "settings"
    ],
    sidebar: [],
    bubble: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "sub",
      "sup",
      "quote",
      "|",
      "size",
      "color"
    ], // array or false
    float: ["h1", "h2", "h3", "|", "checklist", "quote", "quickTable", "code"] // array or false
  },
  fileUpload: callbacks.fileUpload,
  callback: {
    afterChange: callbacks.afterChange,
    afterInit: callbacks.afterInit,
    beforeImageMounted: callbacks.beforeImageMounted
  },
  previewer: {
    dom: false,
    className: "cherry-markdown",
    // Whether to enable the editing ability of preview area (currently supports editing picture size and table content)
    enablePreviewerBubble: true
  },
  // The preview page does not need to bind events
  isPreviewOnly: false,
  // The preview area automatically scrolls with the editor cursor
  autoScrollByCursor: true,
  // Whether to force output to the body when the outer container does not exist
  forceAppend: true,
  // The locale Cherry is going to use. Locales live in /src/locales/
  locale: "zh_CN"
};
