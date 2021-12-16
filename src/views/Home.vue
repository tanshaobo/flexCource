<template>
	<div class="home">
		<h2>
			flex教程
			<button @click="init">初始化</button>
			<button @click="copy">复制</button>
			<input type="text" v-model="currentStyle" ref="copySelect" />
		</h2>
		<main>
			<aside>
				<section v-for="(item, index) in attrList" :key="index">
					<h3>
						{{ item.name }}
						<span>{{ item.discribe }}</span>
						<i class="slideUp"></i>
					</h3>
					<ul>
						<li>
							<label>可选值</label>
							<p>含义</p>
						</li>
						<li
							v-for="(i, j) in item.value"
							:key="j"
							@click="showExample(item.name, i.key, index, j)"
						>
							<label :class="activeList[index] == j ? 'active' : ''">
								{{ i.key }}
							</label>
							<p>{{ i.de }}</p>
						</li>
					</ul>
				</section>
			</aside>
			<article :style="flexStyle">
				<div
					v-for="(i, j) in exampleList"
					:key="j"
					class="example"
					:style="{
						background:
							'rgba(' +
							((j % 7) + 1) * 20 +
							',' +
							((j % 7) + 2) * 20 +
							',' +
							((j % 7) + 3) * 20 +
							',' +
							((j % 4) + 1) * 0.2 +
							')',
					}"
				>
					{{ i }}
				</div>
			</article>
		</main>
	</div>
</template>

<script>
import attrList from "../config/attrList"
export default {
	name: "Home",
	components: {},
	data() {
		return {
			// 内容数组
			attrList,
			// 演示盒子数组
			exampleList: [],
			activeList: [0, 0, 0, 0, 0, 0],
			flexStyle: {
				flexDirection: "row",
				flexWrap: "nowrap",
				flexFlow: "row nowrap",
				justifyContent: "flex-start",
				alignItems: "flex-start",
				alignContent: "flex-start",
			},
			currentStyle:
				"{flex-direction:'row';flex-wrap:'nowrap';flex-flow:'row nowrap';justify-content:'flex-start';align-items:'flex-start';align-content:'flex-start'}",
		}
	},
	created() {
		this.init()
	},
	methods: {
		// 初始化
		init() {
			this.flexStyle = {
				flexDirection: "row",
				flexWrap: "nowrap",
				flexFlow: "row nowrap",
				justifyContent: "flex-start",
				alignItems: "flex-start",
				alignContent: "flex-start",
			}
			this.exampleList.length = 20
			console.log(this.exampleList)
			this.exampleList.fill(1, 0, 20)
			this.exampleList = this.exampleList.map((item, index) => index + 1)
			console.log(this.exampleList)
			this.activeList = [0, 0, 0, 0, 0, 0]
			this.currentStyle = `{flex-direction:${this.flexStyle.flexDirection};flex-wrap:${this.flexStyle.flexWrap};flex-flow:${this.flexStyle.flexFlow};justify-content:${this.flexStyle.justifyContent};align-items:${this.flexStyle.alignItems};align-content:${this.flexStyle.alignContent}}`
		},
		// 复制
		copy() {
			let e = this.$refs.copySelect
			e.select()
			document.execCommand("Copy")
		},
		// 选中并渲染
		showExample(a, b, e, f) {
			let c
			if (a.indexOf("-") > -1) {
				c = a.replace(/-\w/g, (m) => {
					return m.toUpperCase()
				})
				c = c.replace(/-/g, "")
			} else {
				c = a
			}
			this.activeList[e] = f
			this.flexStyle[c] = b
			this.currentStyle = `{flex-direction:${this.flexStyle.flexDirection};flex-wrap:${this.flexStyle.flexWrap};flex-flow:${this.flexStyle.flexFlow};justify-content:${this.flexStyle.justifyContent};align-items:${this.flexStyle.alignItems};align-content:${this.flexStyle.alignContent}}`
		},
	},
}
</script>

<style scoped lang="stylus">
.home
  h2
    margin auto
    text-indent 10%
    line-height 80px
    box-shadow 0 0 8px 2px rgba(255,25,250,.8)
    font-size 24px
    button
      padding 8px 12px
      width 88px
      color #FFFFFF
      border-radius 4px
      background #1E90FF
      border none
      margin 0 0 0 20px
      outline none
      opacity .7
      cursor pointer
      &:active,
      &:focus
      &:hover
        opacity 1
    input
      width 60%
      height 32px
      line-height 32px
      padding 0 12px
      box-sizing border-box
      margin 0 0 0 20px
  main
    width 80%
    min-width 1200px
    margin 20px auto
    display flex
    justify-content space-between
    aside
      width 67%
      min-width 800px
      height calc(100vh - 120px)
      overflow-y scroll
      section
        width 96%
        margin 10px auto 20px
        box-shadow 0 0 4px 0 rgba(255,25,250,8)
        h3
          line-height 60px
          text-indent 20px
          font-size 20px
          border-bottom 1px solid #FFA500
          span
            font-size 16px
            font-weight 500
            padding 0 20px
        ul
          padding-left 20px
          li
            display flex
            height 42px
            line-height 42px
            font-size 16px
            label
              width 300px
              color #1E90FF
              position relative
              cursor pointer
              user-select none
              &:after
                content ''
                width 2px
                height 20px
                background #9400D3
                display block
                position absolute
                right 12px
                top 0
                bottom 0
                margin auto
            &:first-child
              label
                color #333
                cursor not-allowed
            .active
              color #ffa631
    article
      width 33%
      height calc(100vh - 120px)
      border 1px solid #191970
      display flex
      .example
        min-width 17%
        height 18%
        text-align center
        line-height 80px
        font-size 24px
        color rgba(221,12,122,.95)
</style>
