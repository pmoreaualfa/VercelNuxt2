<template>
  <div>
    <Header />
    <article>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("docs/passage", params.slug).fetch();
    return { article };
  },
};
</script>

<style>
article {
  display: block;
  margin: 0 auto;
  padding: 50px 30px;
  max-width: 800px;
}
h1 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 30px;
  margin-left: -20px;
  color:rgb(232, 63, 63);
}
h2 {
  font-size: 20px;
  font-weight: 900;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: -10px;
  color:rgb(232, 63, 63);
}
p {
  margin-bottom: 10px;
}
hr {
  margin-top: 20px;
  margin-bottom: 30px;
  border-top: 2px solid orange;
}
</style>
