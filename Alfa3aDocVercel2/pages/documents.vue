<template>
<div>    <Header />
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-yellow-500 font-semibold tracking-wide uppercase">
          Service Informatique - Data management
        </h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Documentation
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Derniers sujets traités.
        </p>
      </div>
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="doc in documents" :key="doc.title" class="relative">
           <nuxt-link :to="{ name: 'docs-slug', params: { slug: doc.slug } }">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <!-- <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" /> -->
                <outline-annotation-icon class="w-8 h-8" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{ doc.title }} - <span class="text-pink-500">[ {{ doc.app }} ]</span>
              </p>

            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ doc.description }}
            </dd>
            </dt>
        </nuxt-link>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
  name: "Documentation",
  components: { Header },
  async asyncData({ $content, params }) {
    const documents = await $content("docs/passage", params.slug)
      .only(["title", "description", "img", "slug", "dir", "createdAt", "app"])
      .fetch();
    return { documents };
  },
};
</script>