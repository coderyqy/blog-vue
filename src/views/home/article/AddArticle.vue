<template>
  <div class="add-article">
    <el-page-header @back="$router.go(-1)"></el-page-header>
    <div>
      <mavon-editor :toolbars="toolbars" style="height:600px" ref="md"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddArticle",
  data() {
    return {
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: false, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      value: ''
    }
  },
  methods: {
    //监听markdown变化
    change(value, render) {
      
    },
    //上传图片接口pos 表示第几个图片 
    handleEditorImgAdd(pos , $file){
      
    },
    handleEditorImgDel(){
    
    }
  }
}
</script>

<style scoped>
.add-article {
  margin: 14px;
  background-color: #fff;
}
</style>