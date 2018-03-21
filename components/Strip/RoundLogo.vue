<template>
  <div class="roundlogo">
    <nuxt-link to="/">
      <img src="/roundlogo.png" class="roundlogo_img">
      <img src="~assets/img/logosvg.svg" class="svglogo_img">
    </nuxt-link>
  </div>
</template>
<style lang="less">
@import '~assets/less/vars.less';
.roundlogo {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  margin-left: -120px;
  margin-top: -125px;
  z-index: 5;

  @media @tablet {
    width: 120px;
    margin-left: -60px;
    margin-top: -50%;
  }
  @media @mobile {
    display: none;
  }

  img {
    width: 100%;
    height: auto;
  }
}
.svglogo_img {
  display: none;
}
</style>
