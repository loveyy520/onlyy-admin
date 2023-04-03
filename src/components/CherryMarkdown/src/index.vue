<template>
  <div id="markdown-container" />
</template>

<script setup>
import { onMounted } from "vue";
import Cherry from "cherry-markdown/dist/cherry-markdown.core";
import options from "./options";
import "cherry-markdown/dist/cherry-markdown.min.css";

const registerPlugin = async () => {
  const [{ default: CherryMermaidPlugin }, mermaid] = await Promise.all([
    import("cherry-markdown/src/addons/cherry-code-block-mermaid-plugin"),
    import("mermaid")
  ]);
  Cherry.usePlugin(CherryMermaidPlugin, {
    mermaid // pass in mermaid object
  });
};

onMounted(() => {
  registerPlugin().then(() => {
    //  Plug-in registration must be done before Cherry is instantiated
    // const cherryInstance = new Cherry({
    //   id: "markdown-container",
    //   value: "# welcome to cherry editor!"
    // });
    // const cherryInstance =
    new Cherry({
      id: "markdown-container",
      value: `
# 例子
> [Github 地址](https://github.com/Tencent/cherry-markdown){target=_blank}

+ [basic](index.html){target=_blank}
- [H5](h5.html){target=_blank}
- [多实例](multiple.html){target=_blank}
- [无 toolbar](notoolbar.html){target=_blank}
- [纯预览模式](preview_only.html){target=_blank}
- [注入](xss.html){target=_blank}
- [API](api.html){target=_blank}
- [图片所见即所得编辑尺寸](img.html){target=_blank}
- [表格所见即所得编辑尺寸](table.html){target=_blank}
- [标题自动序号](head_num.html){target=_blank}
      `,
      ...options
    });
  });
});
</script>

<style>
#markdown-container {
  width: 100%;
  height: 50vh;
}
</style>
