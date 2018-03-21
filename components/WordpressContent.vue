<template>
  <div class="wordpress-content" :id="slug">
    <h1 v-if="title" class="title">
      <nuxt-link :to="link" style="color: black; text-decoration: none">
        {{ title }}
      </nuxt-link>
    </h1>
    <div class="content" v-html="content"></div>
    <slot />
  </div>
</template>
<script>
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default  from 'photoswipe/dist/photoswipe-ui-default.min';
export default {
  props: {
    slug: String,
    link: String,
    title: String,
    content: String,
  },
  mounted() {
    const el = this.$el;
    const pswp = document.getElementById('photoswipe-template');
    Array.from(el.querySelectorAll('.psgal'))
      .forEach((galleryElement) => {
        const anchors = Array.from(galleryElement.querySelectorAll('.msnry_item a'));
        const items =
          anchors.map((u, i) => ({
            src: u.getAttribute('href'),
            msrc: u.querySelector('img').getAttribute('src'),
            w: u.getAttribute('data-size').split('x')[0],
            h: u.getAttribute('data-size').split('x')[1],
            index: i,
          }));
          anchors.forEach((u, i) => {
            u.onclick = (event) => {
              event.preventDefault();
              const gallery = new PhotoSwipe(pswp, PhotoSwipeUI_Default, items, { index: i });
              gallery.init();
            }
          });
    });
  },

}
</script>
<style lang="less">
@import '~assets/less/vars.less';
.wordpress-content {
  .max-width;
  font-family: Arial, Helvetica, sans-serif;
  @import '~assets/less/price-table.less';
  @import '~assets/less/rules.less';

  .psgal {
    opacity: 1;
  }
}

</style>
