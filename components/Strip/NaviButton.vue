<template>
  <span class="navi-button">
    <router-link :to="to"><slot /></router-link>
  </span>
</template>
<script>
export default {
  props: {
    to: String,
  }
}
</script>
<style lang="less">
@import '~assets/less/vars.less';
span.navi-button{
  background:rgba(212,56,129,0.95);
  border-radius:20px;
  display: inline-block;
  margin-right: 20px;

  @media @mobile {
    border-radius:0;
    margin: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  a {
    display:block;
    padding: 0 30px;
    margin:5px;
    line-height:30px;
    font-size: 0.9rem;
    font-style: normal;

    font-family:"MorrisModernC", Arial;
    text-align:center;
    color:white;
    text-shadow: 2px 2px 2px grey;
    text-decoration:none;
    border: 1px dashed white;
    border-radius:20px;

    @media @mobile {
      padding: 0 5px;
      border-radius:2px;
      margin: 1px;
      padding-top: 5px;
    }

    &:hover {
      text-decoration:underline;
    }
  }
}
</style>
