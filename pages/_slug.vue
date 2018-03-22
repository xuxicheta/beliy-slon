<template>
  <wordpress-content
    :slug="slug"
    :link="link"
    :title="title"
    :content="content"
  />
</template>
<script>
import WordpressContent from '~/components/WordpressContent';
import axios from 'axios';
export default {
  components: {
    WordpressContent,
  },
  async asyncData ({ params }) {
    const slug = params.slug;
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
			title: 'Белый слон расписание',
		};
	},
};
</script>
