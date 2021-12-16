/*
 * @Author: tanshaobo
 * @Date: 2021-12-16 15:29:11
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-16 15:29:12
 * @Description: file content
 * @FilePath: \flexCourse\src\config\content.js
 */

const attrList = [
  {
    name: "flex-direction",
    discribe: "决定主轴的方向（即项目的排列方向）",
    value: [
      { key: "row", de: "横向(默认)" },
      { key: "row-reverse", de: "反横向" },
      { key: "column", de: "纵向" },
      { key: "column-reverse", de: "反纵向" },
    ],
  },
  {
    name: "flex-wrap",
    discribe: "一条轴线排不下时换行方式",
    value: [
      { key: "nowrap", de: "不换行(默认)" },
      { key: "wrap ", de: "换行，第一行在上方" },
      { key: "wrap-reverse", de: "换行，第一行在下方" },
    ],
  },
  {
    name: "flex-flow",
    discribe:
      "flex-direction属性和flex-wrap属性的简写形式 <flex-direction> || <flex-wrap>",
    value: [
      { key: "row nowrap", de: "横向 || 不换行(默认)" },
      { key: "row wrap", de: "横向 || 换行第一行在上方" },
      { key: "row wrap-reverse", de: "横向 || 换行第一行在下方" },
      { key: "row-reverse nowrap", de: "反横向 || 不换行" },
      { key: "row-reverse wrap", de: "反横向 || 换行第一行在上方" },
      {
        key: "row-reverse wrap-reverse",
        de: "反横向 || 换行第一行在下方",
      },
      { key: "column nowrap", de: "纵向 || 不换行" },
      { key: "column wrap", de: "纵向 || 换行第一行在上方" },
      { key: "column wrap-reverse", de: "纵向 || 换行第一行在下方" },
      { key: "column-reverse nowrap", de: "反纵向 || 不换行(默认)" },
      { key: "column-reverse wrap", de: "反纵向 || 换行第一行在上方" },
      {
        key: "column-reverse wrap-reverse",
        de: "反纵向 || 换行第一行在下方",
      },
    ],
  },
  {
    name: "justify-content",
    discribe: "在主轴上的对齐方式",
    value: [
      { key: "flex-start", de: "起始" },
      { key: "flex-end ", de: "结束" },
      { key: "center ", de: "居中" },
      { key: "space-between", de: "两端" },
      { key: "space-around", de: "散列" },
    ],
  },
  {
    name: "align-items",
    discribe: "交叉轴上对齐方式",
    value: [
      { key: "flex-start", de: "起始" },
      { key: "flex-end ", de: "结束" },
      { key: "center ", de: "居中" },
      { key: "stretch", de: "两端（会拉伸元素）" },
      { key: "baseline", de: "第一行文字基线" },
    ],
  },
  {
    name: "align-content",
    discribe: "多根轴线的对齐方式",
    value: [
      { key: "flex-start", de: "交叉轴起始" },
      { key: "flex-end ", de: "交叉轴结束" },
      { key: "center ", de: "交叉轴居中" },
      { key: "space-between", de: "交叉轴两端" },
      { key: "space-around", de: "交叉轴散列" },
      { key: "stretch", de: "交叉轴两端且占满整个交叉轴(拉伸元素)" },
    ],
  },
]

export default attrList
