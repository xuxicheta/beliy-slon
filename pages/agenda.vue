<template>
  <wordpress-content
    :slug="slug"
    :link="link"
    :content="content"
    :title="title"
  />
</template>
<script>
import WordpressContent from '~/components/WordpressContent';
import axios from 'axios';
export default {
  components: {
    WordpressContent,
  },
  async asyncData () {
    const slug = 'agenda';
    const type = 'pages';
    const { data: [data] } = await axios.get(`${process.env.baseUrl}${type}?slug=${slug}`);
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
