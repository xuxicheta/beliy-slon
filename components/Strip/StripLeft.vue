<template>
  <div class="left-strip">
    <div class="block-phone">
      <span><em>Наш телефон:</em></span>
      <span>
        <a href="tel:+7926 121 75 07"> 8 (926) 121-75-07</a>
      </span>
    </div>
    <div class="block-address">
      <span><em>Наш адрес:</em></span>
      <span>
        <a href="https://yandex.ru/maps/-/CBBFaAFy-C" target="_blank">ул. Карла Маркса, д. 92 <i class="fa fa-map-marker" aria-hidden="true"></i></a>
      </span>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="less">
@import '~assets/less/vars.less';
.left-strip {
  width: 50%;
  // padding-right: 135px;
  box-sizing: border-box;

  @media @mobile {
    width: 100%;
  }

  span {
    line-height: 2rem;

    em {
      color: white;
      text-shadow: 1px 1px 2px grey;
      font-style: normal;
      padding-right: 10px;
    }

    a {
      text-decoration: none;
      color: black;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
