<template>
  <div class="list">
      <ul>
          <router-link v-for="(item, index) in listCon" 
            :key="index" 
            :to="{path: '/content/' + item.item_id}"
            tag="li"
            class="news_box"
            v-if="item.title"
           
            >
              <div class="news_title" v-html="item.title"></div>
              <div class="news_imgs" v-if="item.has_image ? item.image_list.length : false">
                <img v-for="(img, index) in item.image_list" v-lazy="img.url" style="width: 30%" :key="index" v-if="index < 3">
              </div>
              <div class="news_info">
                <span class="media_name">{{item.media_name}}</span>
                <span class="comment_count">评论 {{item.comment_count}}</span>
                <span class="datetime">{{item.datetime}}</span>
              </div>
          </router-link>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
export default {
    data () {
        return {
          id: this.$route.params,
          nowTime:Math.round(new Date() / 1000),
          listCon :{}
        };
    },
    created(){
       axios({
              url: 'https://m.toutiao.com/list/?tag='+this.id.id+'&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time='+this.nowTime,
              adapter: jsonpAdapter
          }).then((res) => {
              this.listCon =res.data.data
              console.log(this.listCon)
          });
    }
}

</script>
<style lang='stylus' scoped>
.list
  position relative
  top 68px
  z-index -1
</style>