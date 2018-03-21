<template>
  <div class="the-header">
    <div class="header_slogan">
      <span class="hsl1">Развивающие и творческие занятия для детей и взрослых<br></span>
      <span class="hsl2">Мы работаем для самых важных людей!</span>
      <slot />
    </div>
  </div>
</template>
<script>

export default {
}
</script>
<style lang="less">
@import '~assets/less/vars.less';
.the-header {
  width: 100%;
  flex: none;
  background: rgba(203,217,57,0.2);
  padding-bottom: 40px;
}

.header_slogan {
  .max-width;

  text-align: center;
  color: white;
  font-family: 'MorrisModernC', Arial, serif;
  padding-top: 20px;
  text-shadow: 1px 0px 5px black;

  .hsl1 {
    font-size: 1.1rem;
  }

  .hsl2 {
    font-size: 1.9rem;

    @media @mobile {
      display: none;
    }
  }
}
</style>
