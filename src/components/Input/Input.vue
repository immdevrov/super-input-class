<template>
  <div class="s-input-wrapper">
    <label for="s-input" class="s-input-label">{{ label }}</label>
    <div class="s-input-area">
      <Suffix type="prepend" @click:prepend="$emit('click:prepend')">
        <slot name="prepend"></slot>
      </Suffix>
      <input
        id="s-input"
        v-model="currValue"
        class="s-input"
        :placeholder="placeholder"
      >
      <Suffix type="append"  @click:append="$emit('click:append')">
        <slot name="append"></slot>
      </Suffix>
    </div>
    <div class="s-input-hint">{{ hint }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Suffix from './Suffix.vue'

@Component({
  components: { Suffix }
})
export default class Input extends Vue {
  @Prop({ type: String, required: true }) readonly value!: string
  @Prop({ type: String, default: '' }) readonly placeholder!: string
  @Prop({ type: String, default: '' }) readonly label!: string
  @Prop({ type: String, default: '' }) readonly hint!: string

  private currValue = ''

  @Watch('currValue')
  onInput (val: string) {
    this.$emit('input', val)
  }
}
</script>

<style scoped>

.s-input-area {
  position: relative;
  width: var(--input-element-width, 100%);
  height: var(--input-element-height, 40px);
  padding: var(--input-element-padding, 5px);

  border-width: var(--input-element-border-width-active, 2px);
  border-style: var(--input-element-border-style-active, solid);
  border-color: var(--input-element-border-color-active, teal);
  border-radius: var(--input-element-border-radius, 3px);

  display: inline-flex;
}

.s-input {
  width: 100%;
  height: 100%;

  flex: 1 1 auto;

  border: none;
  padding: none;
}

.s-input-area:active, .s-input-area:focus, .s-input-area:focus-within {
  border-width: var(--input-element-border-width-active, 2px);
  border-style: var(--input-element-border-style-active, solid);
  border-color: var(--input-element-border-color-active, mediumseagreen);
  border-radius: var(--input-element-border-radius-active, 3px)
}
</style>
