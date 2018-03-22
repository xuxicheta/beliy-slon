<template>
  <div class="the-courses">
    <div>
      <h1>Список курсов</h1>
      <a
        v-for="post in posts"
        :href="'/post/'+post.slug"
        :key="post.slug"
        @click.prevent="scrollTo(post.slug)"
        class="course-link"
      > {{ post.title.rendered }}
      </a>
    </div>
    <wordpress-content class="course"
      v-for="post in posts"
      :key="'post'+post.slug"
      :slug="post.slug"
      :content="post.content.rendered"
      :title="post.title.rendered"
      :link="'/courses/'+post.slug"
    />

  </div>
</template>
<script>
import WordpressContent from '~/components/WordpressContent';
import axios from 'axios';
export default {
  components: {
    WordpressContent,
  },
  async asyncData () {
    const { data } = await axios.get(`${process.env.baseUrl}posts?per_page=50`);
    return {
      posts: data,
    };
  },
	head() {
		return {
			title: 'Белый слон курсы',
		};
  },
  methods: {
    scrollTo(slug) {
      document.getElementById(slug).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style lang="less">
@import '~assets/less/vars.less';
.the-courses {
  .max-width;

  .course {
    padding-top: 40px;
  }

  .course-link {
    font-family: "MorrisModernC",Arial,serif;
    font-size: 15px;
    display: inline-block;
    min-width: 50%;
    min-height: 30px;
    line-height: 30px;
    color: black;
    text-decoration: none;
    margin-bottom: 8px;
    padding-left: 40px;
    background: url('~assets/img/slon_kurs.svg') no-repeat;
    background-size: 30px;
    box-sizing: border-box;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
