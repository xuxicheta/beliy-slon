<template>
  <div id="app" class="app">
    <photoswipe-template />
    <the-header />
    <the-strip />
    <div class="the-content">
      <nuxt />
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader';
import TheStrip from '~/components/Strip/TheStrip';
import TheFooter from '~/components/TheFooter';
import PhotoswipeTemplate from '~/components/PhotoswipeTemplate';
export default {
  components: {
    TheHeader,
    TheStrip,
    TheFooter,
    PhotoswipeTemplate,
  },
}
</script>
<style lang="less">
@import '~assets/less/vars.less';
@import '~/assets/font/BebasNeue/font.css';
@import '~/assets/font/MorrisModernC/font.css';
body {
  overflow-y: scroll;
  margin: 0;
  padding: 0;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background: url('/bg_allheader.jpg') 50% 0 no-repeat;
}

.the-content {
  flex: auto;
  height: 100%;
  width: 100%;
  background: #fffbe5;
  padding-top: 30px;

  h1 {
    font-family: "Bebas Neue Bold";
    font-size: 1.5em;
    background:yellow;
    background: linear-gradient(to right, #fbf30b, #fff);
    padding: 8px 0 8px 20px;
    text-align: left;
    box-sizing: border-box;
  }
}
.page-enter-active, .page-leave-active {
  transition: opacity .2s;
  opacity: 0;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

</style>
