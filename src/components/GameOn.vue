<template>
  <b-container>
    <b-modal @shown="focusMyElement">
      <div>
        <b-button>I Don't Have Focus</b-button>
      </div>

      <div>
        <b-form-input></b-form-input>
      </div>

      <div>
        <!-- Element to gain focus when modal is opened -->
        <b-form-input ref="focusThis"></b-form-input>
      </div>

      <div>
        <b-form-input></b-form-input>
      </div>
    </b-modal>
    <div id="game-progress">
      <div v-for="(bar, i) in bars" :key="i" class="row mb-1">
        <div class="col-sm-2">{{ bar.variant }}:</div>
        <div class="col-sm-10 pt-1">
          <b-progress :value="bar.value" :variant="bar.variant" :key="bar.variant"></b-progress>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
    data() {
        return {
        bars: [
            { variant: 'success', value: 75 },
            { variant: 'info', value: 75 },
            { variant: 'warning', value: 75 },
            { variant: 'danger', value: 75 },
            { variant: 'primary', value: 75 },
            { variant: 'secondary', value: 75 },
            { variant: 'dark', value: 75 }
        ],
        timer: null
        }
    },
    mounted() {
        this.timer = setInterval(() => {
          this.bars.forEach(bar => (bar.value = 25 + Math.random() * 75))
        }, 2000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
        this.timer = null
    }
}
</script>
