<template>
  <v-container class="view-landing" inner fill-height align-center py-12>
    <v-row>
      <v-col cols="12" md="12" xl="10">
        <h1 class="text-h2 mb-8">
          HI! This is a sample landing page with full height in desktop. 
        </h1>
        <h2 class="text-body-3 mb-4">
          I'm making this blank project because so that I can pull project layouts and codes from here as and when I need them. 
          Feel free to utilise this! 
        </h2>
        <h2 class="text-body-3">            
          I'm storing the following layouts in this place:
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import SectionLanding from '@/components/views/story/SectionLanding.vue';
// import SectionContent from '@/components/views/story/SectionContent.vue';

export default {
  name: 'View1',
  // components: {
  //   SectionLanding,
  //   SectionContent,
  // },
  data() {
    return {
      refs: [
        {name: 'Kontinentalist', source: 'Kontinentalist', date: '27/1/2021', link: 'www.kontinentalist.com'}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.view-landing {
  height: calc(100vh - $offset-top);
}
</style>