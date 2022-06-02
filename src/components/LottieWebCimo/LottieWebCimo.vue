<template>
  <div ref="lottieBox"></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  name: 'LottieWebCimo',
  data() {
    return {
      lottie: {},
    };
  },
  props: ['animationData', 'path', 'loop', 'animationSpeed'],
  methods: {
    stop: function () {
      this.lottie.stop();
    },

    play: function () {
      this.lottie.play();
    },

    pause: function () {
      this.lottie.pause();
    },

    onSpeedChange: function () {
      this.lottie.setSpeed(this.animationSpeed);
    },

    isLottieFinish: function () {
      this.lottie.removeEventListener('data_ready', this.isLottieFinish);
      this.$emit('isLottieFinish', true);
    },

    initLottie: function () {
      this.lottie = lottie.loadAnimation({
        container: this.$refs.lottieBox,
        renderer: 'svg',
        loop: this.loop || true,
        animationData: this.animationData,
        path: this.path,
      });

      this.lottie.addEventListener('data_ready', this.isLottieFinish, { once: true });
    },
  },
  mounted() {
    this.initLottie();
  },
  // beforeDestroy() {
  //   this.lottie.destroy();
  //   this.lottie = null;
  // },
  watch: {
    animationSpeed: function (n, o) {
      this.onSpeedChange();
    },
  },
};
</script>
