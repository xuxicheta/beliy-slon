<template>
  <div class="the-strip">
    <div class="strip-wrap" >
      <strip-left />
      <strip-right />
    </div>
    <strip-navi />
    <round-logo />
  </div>
</template>
<script>


import StripLeft from './StripLeft';
import StripRight from './StripRight';
import StripNavi from './StripNavi';
import RoundLogo from './RoundLogo';
export default {
  components: {
    StripLeft,
    StripRight,
    StripNavi,
    RoundLogo,
  },
}
</script>
<style lang="less">
@import '~assets/less/vars.less';
.dash_mixin {
  position: absolute;
  width: 100%;
  height: 4px;
  content: '';
  background:url('~assets/img/bg_dash.png');
}
.the-strip {
  display: flex;
  flex: none;
  height:180px;
  width: 100%;
  padding: 15px 0 18px 0;
  box-sizing: border-box;
  font:  20px "Bebas Neue";
  background:rgba(203,220,57,0.85);
  position: relative;



  &:before {
    .dash_mixin;
    top: 9px;
  }
  &:after {
    .dash_mixin;
    bottom: 9px;
  }

  .strip-wrap {
    .max-width;
    display: flex;

    @media @mobile {
      display: block;
    }
  }
}
</style>
