<script setup lang="ts">
import { Avatar } from "omorphia";
</script>

<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <i18n-t keypath="footer.legal_notice" tag="p">
        <a href="https://imb11.dev/" target="_blank">IMB11</a>
      </i18n-t>
      <div class="link-rows">
        <div class="link-row">
          <h4>{{ $t("footer.header.contribute") }}</h4>
          <NuxtLink to="/translate" :external="true">{{
            $t("footer.links.translate")
          }}</NuxtLink>
          <NuxtLink to="/contribute" :external="true">{{
            $t("footer.links.contribute")
          }}</NuxtLink>
          <NuxtLink to="/github" :external="true">GitHub</NuxtLink>
        </div>
        <div class="link-row">
          <h4>{{ $t("footer.header.discuss") }}</h4>
          <NuxtLink to="/rate" :external="true">{{
            $t("footer.links.rate")
          }}</NuxtLink>
          <NuxtLink to="/discord" :external="true">Discord</NuxtLink>
          <NuxtLink to="/mastodon" :external="true">Mastodon</NuxtLink>
          <NuxtLink to="/wiki" :external="true">{{
            $t("navbar.links.wiki")
          }}</NuxtLink>
        </div>
        <div class="link-row">
          <h4>{{ $t("footer.header.download") }}</h4>
          <NuxtLink to="/curseforge">CurseForge</NuxtLink>
          <NuxtLink to="/modrinth">Modrinth</NuxtLink>
          <NuxtLink to="/vanilla">{{
            $t("footer.links.vanilla")
          }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  border-top-right-radius: var(--gap-xl);
  border-top-left-radius: var(--gap-xl);
  text-align: center;
  background-color: var(--color-raised-bg);
  color: var(--color-base);
  padding: 3rem;
  margin-bottom: 0rem;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.link-rows {
  display: flex;
  flex-direction: row;
  gap: var(--gap-xl);
  justify-content: space-evenly;
  margin-top: var(--gap-xl);

  // Align all link rows together.
  .link-row {
    display: flex;
    flex-direction: column;

    a {
      color: var(--color-brand);
    }
  }
}

.image {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: var(--gap-md);

  .username {
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>
