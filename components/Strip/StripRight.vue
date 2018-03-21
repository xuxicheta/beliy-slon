<template>
  <div class="right-strip">
    <div class="block-socials">
      <span class="socialname"><em>Мы в соцсетях:</em></span>
      <span class="sociallinks">
        <a href="https://vk.com/beliyslon_klin" class="socials_vk">
          <img src="~assets/img/socials/vk.svg">
        </a>
        <a href="https://ok.ru/group/54489475383410" class="socials-ok">
          <img src="~assets/img/socials/ok.svg">
        </a>
        <a href="https://www.instagram.com/beliyslon_klin" class="socials-ig">
          <img src="~assets/img/socials/ig.svg">
        </a>
      </span>
    </div>
    <div class="block-rules">
      <span>
        <em>
          <router-link to="/rules" class="rules">
            Правила детского клуба
          </router-link>
        </em>
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
.right-strip {
  width: 50%;
  box-sizing: border-box;
  text-align: right;

  @media @mobile {
    width: 100%;
  }

  .sociallinks {
    background-size: 100% 100%;
    display: inline-block;

    a {
      display: inline-block;
      width: 25px;
      padding-right: 8px;
    }
  }

  span {
    line-height: 1.7rem;
    em {
      color: white;
      text-shadow: 1px 1px 2px grey;
      font-style: normal;
      padding-right: 10px;

      .rules {
        color: white;
      }
    }

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      img {
        width: 100%;
        height: auto;
      }

    }
  }

  .socialname {
    line-height: 25px;
    display: inline-block;
    vertical-align: top;
  }

}
</style>
