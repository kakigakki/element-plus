<script setup lang="ts">
import { computed } from 'vue'
import sponsorLocale from '../../i18n/component/sponsor.json'
import { useLang } from '../composables/lang'
import VPSponsorSmall from './vp-sponsor-small.vue'
import VPSponsorLarge from './vp-sponsor-large.vue'

const lang = useLang()
const sponsor = computed(() => sponsorLocale[lang.value])
</script>

<template>
  <div class="sponsors">
    <p class="sponsors-title">{{ sponsor.sponsoredBy }}</p>
    <VPSponsorLarge />
    <VPSponsorSmall />
  </div>
</template>

<style lang="scss" scoped>
.sponsors {
  padding: 0.35rem 1.5rem 0.35rem 1.25rem;
  .sponsors-title {
    color: var(--text-color-lighter);
    font-weight: 300;
    font-size: 14px;
  }
}
</style>
