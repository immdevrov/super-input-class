<template>
  <div class="s-input-wrapper">
    <label :for="id" class="s-input-label">{{ label }}</label>
    <div class="s-input-area">
      <Suffix type="prepend" @click:prepend="$emit('click:prepend')">
        <slot name="prepend"></slot>
      </Suffix>
      <input
        ref="input"
        :id="id"
        class="s-input"
        v-mask="mask"
        v-model="currValue"
        :type="type"
        :placeholder="placeholder"
      >
      <Suffix type="append"  @click:append="$emit('click:append')">
        <slot name="append"></slot>
      </Suffix>
    </div>
    <div class="s-input-hint">
      <slot name="hint"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Suffix from './Suffix.vue'

import { randomHash } from '@/helpers'

const idByDefault = randomHash()

@Component({
  components: { Suffix }
})
export default class Input extends Vue {
  @Prop({ type: String, default: '' }) readonly value!: string
  @Prop({ type: String, default: '' }) readonly placeholder!: string
  @Prop({ type: String, default: '' }) readonly label!: string
  @Prop({ type: String, default: idByDefault }) readonly id!: string
  @Prop({ type: String, default: 'text' }) readonly type!: string
  @Prop({ type: String, default: '' }) readonly mask!: string
  @Prop({ type: Boolean, default: false }) readonly onError!: boolean

  private currValue = ''

  @Watch('currValue')
  onInput (val: string) {
    this.$emit('input', val)
  }
}
</script>

<style scoped>

.s-input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

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
  align-items: center;
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

.s-input-label {
  color: var(--input-label-color, Teal);
  font-size: var(--input-label-font-size, .9em);
  margin: var(--input-label-margin, 0px 0px 5px 0px)
}

</style>
