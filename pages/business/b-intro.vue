<template>
  <div class="b-intro">
    <div class="m-coo-map-bg">
    <div class="m-coo-map f-cb">
      <div class="m-coo-left">
        <chart class="u-coo-map" :options="map" v-on:click="getProvince"></chart>
      </div>
      <div class="m-coo-right">
        <div class="u-coo-list u-coo-empty" v-if="isEmpty">
          <div class="u-title">{{ province }}</div>
          <div class="u-empty">
            <p class="u-tips">本省暂无接入商家，快来成为第一批淘金者吧！</p>
            <span @click="changeTab('/us/link-us')">
              <nuxt-link class="u-btn-main" to="/us/link-us">立即申请加入</nuxt-link>
            </span>
          </div>
        </div>
        <span v-else>
        <div class="u-title f-cb">
          <span class="l">{{ province }}</span>
          <span class="r">合计：{{ list && list.length}} 家</span>
        </div>
          <ul class="u-coo-list">
            <li class="u-item" v-for="( item, i ) in list">
              <div class="tbox">
                <span class="t">{{ item.name }}</span>
              </div>
              <div class="cbox">
                <span class="c">{{ item.address }}</span>
              </div>
            </li>
           <!-- <li class="u-box">
            </li>-->
          </ul>
        </span>
      </div>
    </div>
  </div>
    <div class="child-platform-1">
      <h1>数据合作平台</h1>
      <div class="content">
        <div v-for="item in platform">
          <img :src="item.image" alt="CNICG 子平台">
        </div>
      </div>
    </div>
    <div class="child-platform-wrap">
    <div class="child-platform-2">
      <h1>授权代理商</h1>
      <div class="content">
        <div v-for="item in company">
          <img :src="item.image" alt="CNICG 子平台">
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts.vue'
  import map from '~/api/cooMap'
  import 'echarts/lib/chart/map'
  import 'echarts/lib/component/tooltip'
  import chinaMap from '~/api/china.json'
  import { mapState } from 'vuex'
  import getUrl from '~/config/url'

  ECharts.registerMap('china', chinaMap)

  export default {
    name: 'cooProxy',
    computed: {
      ...mapState({
        platform: state => state.business.childPlatform,
        company: state => state.business.childCompany
      })
    },
    data () {
      return {
        title: '平台代理分布',
        map,
        params: '',
        isEmpty: false,
        province: '广东',
        list: []
      }
    },
    async asyncData ({store, app}) {
      let url = getUrl('/api/v1/company/')
      let { data } = await app.$axios.get(url, {params: {province: 44, status: 2}})
      return {list: data.results, isEmpty: data.results.length === 0, companyList: {44: data.results}}
    },
    fetch ({store, app}) {
      let list = store.state.business.childPlatform
      if (list.length === 0) {
        let url1 = getUrl('/api/v1/cooperation/platforms')
        let url2 = getUrl('/api/v1/cooperation/businesses')
        return Promise.all([app.$axios.get(url1), app.$axios.get(url2)]).then(res => {
          return store.commit('business/B_INTRO_CHILD', [res[0].data.results, res[1].data.results])
        })
      }
    },
    methods: {
      getProvince: async function (event) { // 每次点击切换省份的公司
        let id = event.data.id
        this.province = event.data.name
        if (!this.companyList[id]) { // 判断是否存在这个省
          let url = getUrl('/api/v1/company/')
          let { data } = await this.$axios.get(url, {params: {province: id, status: 2}})
          this.companyList[id] = data.results
        }
        this.list = this.companyList[id]
        this.isEmpty = this.list.length === 0
      },
      changeTab (name) {
        // this.$store.commit('CHANGE_ACTIVE_INDEX', name)
      }
    },
    components: {
      chart: ECharts
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/mixins.scss";
  .m-coo-map-bg {
    min-width: 1200px;
    background: url("~/assets/img/map-bac.png");
    height: 460px;
    overflow: hidden;
  }

  .m-coo-map {
    width: 1200px;
    margin: 30px auto;
    .u-coo-map {
      width: 600px;
      height: 400px;
    }
    .m-coo-left {
      float: left;
    }
    .m-coo-right {
      width: 440px;
      height: 330px;
      margin: 40px 0;
      float: right;
    }
    .u-title {
      width: 100%;
      background-color: #57687c;
      color: #fff;
      padding: 0 20px;
      line-height: 46px;
      height: 46px;
      .l {
        float: left;
        font-size: 18px;
      }
      .r {
        float: right;
        font-size: 14px;
      }
    }
    .u-coo-list {
      height: 284px;
      overflow-y: auto;
      border: 1px solid #49596b;
      background: #334151;
      .u-item {
        border-bottom: 1px solid #49596b;
        padding: 10px 20px;
        background: #334151;
        .t {
          font-size: 16px;
          line-height: 1.2;
          color: #e5e5e5;
          vertical-align: top;
        }
        .tbox {
          height: 30px;
        }
        .cbox {
          height: 20px;
        }
        .c {
          font-size: 14px;
          line-height: 1.5;
          color: #eaeaea;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          vertical-align: top;
        }
      }
      .u-box {
        text-align: center;
        padding: .20px 16px;
      }
      .more {
        color: #00adef;
        font-size: 16px;
        cursor: pointer;
      }
      .u-empty {
        text-align: center;
        .u-tips {
          font-size: 18px;
          color: #fff;
          margin-top: 60px;
        }
        .u-btn-main {
          background: #1783d8;
          padding: 10px 24px;
          color: #fff;
          font-size: 16px;
          border: none;
          display: inline-block;
          margin: 0 auto;
          margin-top: 40px;
          line-height: 1;
          cursor: pointer;
        }
      }
    }
  }
  .child-platform-1, .child-platform-2 {
    @extend %title;
    height: 498px;
    .content {
      margin-top: 50px;
      @include clearfix;
    }
  }
  .child-platform-1 .content {
    div {
      display: inline-block;
      margin-bottom: 12px;
      height: 286px;
      width: 388px;
      &:nth-child(3n+2) {
        margin: 0 18px;
      }
      img {
        width: 388px;
        height: 286px;
      }
      &:hover {
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
      }
    }
  }
  .child-platform-wrap {
    width: 100%;
    min-width: 1200px;
    background-color: #f5f5f5;
  }
  .child-platform-2 {
    height: auto;
  }
  .child-platform-2 .content {
    div {
      display: inline-block;
      margin-bottom: 36px;
      width: 290px;
      height: 90px;
      margin-right: 13.3px;
      img {
        width: 290px;
        height: 90px;
      }
      &:last-child, &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
</style>
