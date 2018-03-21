<template>
  <wordpress-content
    :slug="slug"
    :link="link"
    :content="content"
  >
    <no-ssr>
      <yandex-map-block />
    </no-ssr>
  </wordpress-content>
</template>
<script>
import WordpressContent from '~/components/WordpressContent';
import YandexMapBlock from '~/components/YandexMapBlock';
import axios from 'axios';
export default {
  components: {
    WordpressContent,
    YandexMapBlock,
  },
  async asyncData () {
    const slug = 'contacts';
    const type = 'pages';
    const { data: [data] } = await axios.get(`https://beliyslon-klin.ru/wp-json/wp/v2/${type}?slug=${slug}`);
    return {
      content: data.content.rendered,
      title:  data.title.rendered,
      type,
      slug,
      link: `/${slug}`,
    };
  },
	head() {
		return {
			title: 'Белый слон главная',
		};
  },

};
</script>
