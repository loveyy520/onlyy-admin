<template>
  <div id="markdown-container" />
</template>

<script setup>
import { onMounted } from "vue";
import Cherry from "cherry-markdown/dist/cherry-markdown.core";
import options from "./options";

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
      # welcome to cherry editor!
      ### 1.第一个示例
      这是一段 **\`js\`**代码
\`\`\`javascript
      const name = 'cc'
      console.log(name)
\`\`\`
      `,
      ...options
    });
  });
});
</script>

<style></style>
