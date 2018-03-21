<template>
  <div class="strip-navi" :class="{ 'navi-fixed': isFixed }">
    <div class="strip-navi-holder">
      <div class="left-strip-navi">
        <navi-button to="/courses">Курсы</navi-button>
        <navi-button to="/agenda">Расписание</navi-button>
      </div>
      <!-- <div class="center-strip-navi">
        <router-link to="/" class="strip-slon" />
      </div> -->
      <div class="right-strip-navi">
        <navi-button to="/price">Цены</navi-button>
        <navi-button to="/contacts">Контакты</navi-button>
      </div>
    </div>
  </div>
</template>
<script>
import NaviButton from './NaviButton';
export default {
  components: {
    NaviButton,
  },
  data() {
    return {
      scroll: 0,
    }
  },
  mounted() {
    window.onscroll = () => {
      this.scroll = window.pageYOffset || document.documentElement.scrollTop;
    }
  },
  computed: {
    isFixed() {
      return this.scroll > 255;
    }
  }
}
</script>
<style lang="less">
@import '~assets/less/vars.less';
.strip-navi {
  position: absolute;
  width: 100%;
  bottom: 20px;
  z-index: 5;

  @media @mobile {
    bottom: 0px;
  }

}
.navi-fixed {
  position: fixed;
  top: -13px;
  height: 40px;
  background:rgba(203,220,57,0.85);
  transition: background 10s;

  .strip-slon {
    flex: none;
    display: block;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    border-radius: 16px;
    background: url('../../assets/img/slon_kurs.svg');
    background-size: 100%;

  }
}
.strip-navi-holder {
  .max-width;
  display: flex;
  justify-content: space-between;

  @media @mobile {
    justify-content: space-around;
  }

  .left-strip-navi, .right-strip-navi {
    // width: 50%;
    @media @mobile {
      display: flex;
      justify-content: space-around;
    }

    span {
      flex-grow: 2;
    }
  }
}
</style>
