<template>
  <div class="list">
    <Header></Header>  
    <header1></header1>
    <scroller 
        style="padding-top:68px"
        :on-refresh="refresh"
        :on-infinite="infinite"
        >
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
                  <div class="news_imgs" v-if="item.has_image ? item.image_list.length : false">
                    <img v-for="(img, index) in item.image_list" v-lazy="img.url" style="width: 30%" :key="index" v-if="index < 3">
                  </div>
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
     </scroller>
  </div>
</template>

<script>
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

import Header from '@/components/Header/Header'
import header1 from '@/components/header1/header1'
export default {
    data () {
        return {
          nowTime:Math.round(new Date() / 1000),     //时间戳
          listCon :{},
          mescroll: null,
        };
    },
    created(){
      this.fetchData();
    },
    components:{
      Header,
      header1,
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      // '$route': 'fetchData'
      '$route' (to, from) {
          // console.log(this.getStatus(this.$route.path))
          this.fetchData();      //再次调起我要执行的函数
      }
    },
    mounted(){
      this.fetchData();
    },
    methods :{
      fetchData() {
          // 使用 axios获取数据
           axios({
              url: 'https://m.toutiao.com/list/?tag='+this.$route.params.id+'&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time='+this.nowTime,
              adapter: jsonpAdapter
          }).then((res) => {
              this.listCon =res.data.data
              console.log(this.listCon)
          });
        },
        refresh(){
          
        },
        infinite(){
          
        }
    }
}

</script>
<style lang='stylus' scoped>
@import "../../common/stylus/index";
.list
  pading-top 68px
  z-index 0
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