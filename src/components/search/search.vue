<template>
  <div>
      <v-title>搜索</v-title>
      <header  class="mint-header header">
            <div class="mint-header-button is-left">
                <a href="/">
                    <button data-v-70fccefc="" class="mint-button left mint-button--default mint-button--normal">
                        <label class="mint-button-text">
                            <img data-v-70fccefc="" src="http://s3.pstatp.com/image/toutiao_mobile/header_back.png" alt="" />
                        </label>
                    </button>
                </a>
            </div> 
            <div class="mint-header-button is-center">
                搜索
            </div>
            <div class="mint-header-button is-right">
                    
            </div>
        </header>
        <div  id="search_form" >
            <div id="search_content">
                <a  class="action_chooser action_toutiao" ></a>
                <input type="search"  placeholder="请输入搜索关键词" id="search_input"  @keyup.13="show($event.target.value)">
            </div>
        </div>
        <div class="hot_words">
            <ul>
                <router-link v-for="(item, index) in listCon" 
                :key="index" 
                :to=" {path:'/content/' + item.item_id} "
                tag="li"
                class="news_box"
                v-if="item.title"
                >
                    <div :class="['item_detail',item.image_url ? 'desc' :'' ]">
                    <div class="news_title" v-html="item.title"></div>
                    <!-- <div class="news_imgs" v-if="item.has_image ? item.image_list.length : false">
                        <img v-for="(img, index) in item.image_list" v-lazy="img.url" style="width: 30%" :key="index" v-if="index < 3">
                    </div> -->
                    <div class="news_info">
                        <span v-if="item.label" class="stick_label space">{{item.label}}</span>
                        <span class="media_name">{{item.media_name}}</span>
                        <span class="comment_count">评论 {{item.comment_count}}</span>
                        <span class="datetime">{{item.datetime}}</span>
                    </div>
                    </div>
                    <div v-if="item.image_url" class="list_img_holder"><img v-lazy="item.image_url"></div>
                </router-link>  
            </ul>
        </div>
  </div>
</template>
<script>
import VTitle from '@/components/title/title'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
export default {
    data () {
        return {
            listCon :[],
        };
    },
    methods: {
      getSearch(data) {
        // 使用 axios获取  搜索数据
        axios({
            url: 'https://www.toutiao.com/search_content/?offset='+0+'&format=json&keyword='+data+'&autoload=true&count=20&cur_tab=1',
            adapter: jsonpAdapter
        }).then((res) => {
            this.listCon =res.data.data
        });
      },
      show:function(data){
            this.getSearch(data)
        },
    },
    components: {
        VTitle
    },
}
</script>
<style lang='stylus' scoped>
.header
    width: 100%;
    position: fixed;
    top 0px
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #d43d3d;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    text-align: center;
    white-space: nowrap;
    z-index 1
    .mint-header-button
        -webkit-box-flex: .5;
        -ms-flex: .5;
        flex: .5;
        .mint-button 
            background-color: transparent;
            border: 0;
            -webkit-box-shadow: none;
            box-shadow: none;
            color: inherit;
            display: inline-block;
            padding: 0;
            font-size: inherit;
    .is-left
        text-align left 
        img 
            width 20px
    .is-right  
        text-align right 
        a
            float right 
    .is-center 
        font-size 20px
        font-weight 700
        text-align center
        .center1 
            img
                width 68px
        .center2
            img
                width 16px
#search_form
    background: #c9c9c9;
    position: fixed;
    top 40px
    width 100%
    #search_content
        padding: 5px;
        .action_toutiao
            background-position: 5px -35px;
        .action_chooser
            display: block;
            width: 40px;
            height: 27px;
            position: absolute;
            background: url(http://s3.pstatp.com/image/toutiao_mobile/search_icons.png?ver=201408311655) #fff no-repeat 10px -35px;
            background-size: 20px;
            left: 5px;
        #search_input
            border: 0;
            border-radius: 3px;
            margin: 0;
            width: 100%;
            font-size: 16px;
            -webkit-appearance: none;
            padding: 5px 10px 5px 40px;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            color: #666;
            background: #fff;
.hot_words
    padding-top 78px
    ul
    overflow hidden
    li
      margin 0px 10px
      padding 14px 0px
      border-1px(#999)
      overflow hidden
    .item_detail
      &.desc
        width 67%
        float left
      .news_title
        font-size 18px
        line-height 20px
        margin-right: 24px;
        text-align: justify;
      .news_imgs
          img
            margin-right 4px
            margin-top 8px
      .news_info
        margin-top 6px
        .stick_label 
            border-radius: 4px;
            margin-right 4px
            color: #f85959;
            background-color: white;
            font-size 8px
            border  1px solid #f85959
            display: inline-block;
            padding 2px 2px 1px 2px
            line-height 8px
            vertical-align middle
          .media_name,.comment_count,.datetime
            display: inline-block;
            font-size 10px
            color: #999;
            margin-right 5px
            vertical-align middle
            margin-top 2px
    .list_img_holder
      width 33%
      float left
      img 
        width:100%
</style>