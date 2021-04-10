<template>
  <div class="wrapper__story">

     <Map />
  </div>
</template>

<script>
import Map from '@/components/viz/Map';

export default {
  name: 'View2',
  components: {
    Map,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      step: 1,
      slideStep: 0,
      finalStep: 5
    };
  },
  methods: {
    handleStep(event) {
      if (event === 'back' && this.step > 1) {
        this.step--;
      } else if (event === 'next' && this.step === this.finalStep) {
        this.step = this.finalStep; // just in case
      } else if (event === 'next') {
        this.step++;
      }

      if (this.step <= 3) {
        this.slideStep = 0;
      } else if (this.step >= 4) {
        this.slideStep = 1;
      }
    },     
  },
}
</script>