<template>
  <span
    :class="`s-input-slot-${type}`"
    @click="$emit(`click:${type}`)"
  >
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

const typeValidator = (valueType: string) => ['prepend', 'append'].includes(valueType)

@Component
export default class Suffix extends Vue {
  @Prop({ type: String, required: true, validator: typeValidator }) readonly type!: string
}
</script>

<style scoped>
.s-input-slot-prepend, .s-input-slot-append {
  cursor: pointer;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.s-input-slot-prepend {
  flex: 0 0 var(--input-prepend-element-width, 32px)
}

.s-input-slot-append {
  flex: 0 0 var(--input-append-element-width, 32px)
}
</style>>
