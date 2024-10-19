<script setup lang="ts">
import {
  Button,
  DownloadIcon,
  ClientIcon,
  UsersIcon,
  ChartIcon,
  LightBulbIcon,
  VersionIcon,
  PaintBrushIcon,
  UpdatedIcon,
  DiscordIcon,
} from "omorphia";

import FabricIcon from "../components/FabricIcon.vue";

useSeoMeta({
  title: "Fabulously Optimized",
  ogTitle: "Fabulously Optimized",
  description: `A simple Minecraft modpack focusing on performance and graphics enhancements.`,
  ogDescription: `A simple Minecraft modpack focusing on performance and graphics enhancements.`,
  ogImage: "/icon.png",
  twitterCard: "summary",
  twitterImage: "/icon.png",
  themeColor: "#d19321",
});
</script>

<template>
  <div class="columned-hero">
    <div class="column">
      <i18n-t keypath="content.home.columned-hero.title" tag="h1" id="title-with-gradient">
        <span class="supercharge__gradient">{{ $t("content.home.columned-hero.title.supercharge") }}</span>
      </i18n-t>
      <p class="subtitle">{{ $t("content.home.columned-hero.subtitle") }}</p>
      <br />
      <div class="buttons">
        <Button color="orange" @click="navigateTo(`/curseforge`, { external: true })">
          <DownloadIcon />CurseForge
        </Button>
        <Button color="green" @click="navigateTo(`/modrinth`, { external: true })">
          <DownloadIcon />Modrinth
        </Button>
        <Button color="gray" @click="navigateTo(`/vanilla`, { external: true })">
          <DownloadIcon />{{ $t("content.vanilla.title.installer") }}
        </Button>
      </div>
      <div>
        <i18n-t keypath="content.home.columned-hero.disclaimer" tag="p" id="disclaimer-text">
          <a href="/terms">{{ $t("content.home.columned-hero.disclaimer.link") }}</a>
        </i18n-t>
      </div>
    </div>
    <div class="column graph__container">
      <!-- <img class="dramatic-screenshot" src="/dramatic-screenshot.webp" /> -->
      <div class="graph">
        <div class="item">
          <p class="pretitle">Fabulously Optimized</p>
          <div class="bar" style="background-color: #f5a50f !important">
            <p>259 {{ $t("content.home.graph.fps") }}</p>
          </div>
        </div>
        <div class="item">
          <p class="pretitle">{{ $t("content.home.graph.competitor") }}</p>
          <div class="bar">
            <p>56 {{ $t("content.home.graph.fps") }}</p>
          </div>
        </div>
        <div class="item">
          <p class="pretitle">{{ $t("content.home.graph.vanilla") }}</p>
          <div class="bar">
            <p>49 {{ $t("content.home.graph.fps") }}</p>
          </div>
        </div>
      </div>
      <br />
      <div>
        <i18n-t keypath="content.home.graph.subtitle" tag="h3">
          <span class="supercharge__gradient">{{ $t("content.home.graph.subtitle.quicker") }}</span>
        </i18n-t>
      </div>
       <i18n-t keypath="content.home.graph.small" tag="p" id="graph_disclaimer">
          &commat;
        </i18n-t>
    </div>
  </div>
  <div class="centered-hero">
    <h1>{{ $t("content.home.features.title") }}</h1>
    <iframe width="1120" height="630" :src="`https://www.youtube-nocookie.com/embed/${$t(
      'content.home.features.videoID'
    )}`" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
    <div class="features">
      <div class="feature-block">
        <div>
          <h1>
              <ChartIcon class="feature-icon" />
              <span>{{ $t("feature.performance.title") }}</span>
          </h1>
          <div class="markdown-body">
            <i18n-t keypath="feature.performance.desc" tag="p">
              <a href="https://github.com/Fabulously-Optimized/fabulously-optimized/blob/main/INCLUDED-MODS.md#smooth">
                {{ $t("feature.performance.desc.0") }}
              </a>
            </i18n-t>
          </div>
        </div>
      </div>
      <div class="feature-block">
        <div>
          <h1>
              <PaintBrushIcon class="feature-icon" />
              <span>{{ $t("feature.optifine-parity.title") }}</span>
          </h1>
          <div class="markdown-body">
            <i18n-t keypath="feature.optifine-parity.desc" tag="p">
              <a href="https://wiki.download.fo/readme/give-up-optifine">
                {{ $t("feature.optifine-parity.desc.0") }}
              </a>
              <a href="https://wiki.download.fo/readme/free-cape">
                {{ $t("feature.optifine-parity.desc.1") }}
              </a>
            </i18n-t>
          </div>
        </div>
      </div>
      <div class="feature-block">
        <div>
          <h1>
              <LightBulbIcon class="feature-icon" />
              <span>{{ $t("feature.feels-familiar.title") }}</span>
          </h1>
          <div class="markdown-body">
          <i18n-t keypath="feature.feels-familiar.desc" tag="p">
            <a href="https://github.com/Fabulously-Optimized/fabulously-optimized/blob/main/INCLUDED-MODS.md#functional">
              {{ $t("feature.feels-familiar.desc.0") }}
            </a>
          </i18n-t>
          </div>
        </div>
      </div>
      <div class="feature-block">
        <div>
          <h1>
              <ClientIcon class="feature-icon" />
              <span>{{ $t("feature.works-anywhere.title") }}</span>
          </h1>
          <div class="markdown-body">
          <i18n-t keypath="feature.works-anywhere.desc" tag="p">
            <a href="https://github.com/Fabulously-Optimized/fabulously-optimized?tab=readme-ov-file#download">
              {{ $t("feature.works-anywhere.desc.0") }}
            </a>
          </i18n-t>
          </div>
        </div>
      </div>
      <div class="feature-block">
        <div>
          <h1>
              <UpdatedIcon class="feature-icon" />
              <span>{{ $t("feature.up-to-date.title") }}</span>
          </h1>
          <div class="markdown-body">
          <i18n-t keypath="feature.up-to-date.desc" tag="p">
            <a href="https://download.fo/changelog">
              {{ $t("feature.up-to-date.desc.0") }}
            </a>
            <a href="https://wiki.download.fo/readme/update-instructions">
              {{ $t("feature.up-to-date.desc.1") }}
            </a>
          </i18n-t>
          </div>
        </div>
      </div>
      <div class="feature-block">
        <div>
          <h1>
              <FabricIcon class="feature-icon" />
              <span>{{ $t("feature.built-on-fabric.title") }}</span>
          </h1>
          <div class="markdown-body">
          <i18n-t keypath="feature.built-on-fabric.desc" tag="p">
            <a href="https://wiki.download.fo/readme/adding-more-mods">
              {{ $t("feature.built-on-fabric.desc.0") }}
            </a>
          </i18n-t>
          </div>
        </div>
      </div>
      <div class="feature-block">
        <div>
          <h1>
              <VersionIcon class="feature-icon" />
              <span>{{ $t("feature.open-development.title") }}</span>
          </h1>
          <div class="markdown-body">
          <i18n-t keypath="feature.open-development.desc" tag="p">
            <a href="https://download.fo/github">
              {{ $t("feature.open-development.desc.0") }}
            </a>
          </i18n-t>
          </div>
        </div>
      </div>
      <div class="feature-block">
        <div>
          <h1>
              <UsersIcon class="feature-icon" />
              <span>{{ $t("feature.helpful-community.title") }}</span>
          </h1>
          <div class="markdown-body">
          <i18n-t keypath="feature.helpful-community.desc" tag="p">
            <a href="https://download.fo/translate">
              {{ $t("feature.helpful-community.desc.0") }}
            </a>
            <a href="https://download.fo/discord">
              {{ $t("feature.helpful-community.desc.1") }}
            </a>
          </i18n-t>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="centered-hero" style="margin-top: 5rem">
    <DownloadIcon />
    <h1>{{ $t("content.home.download.title") }}</h1>
    <p class="subtitle">
      {{ $t("content.home.download.subtitle") }}
    </p>
    <div class="buttons">
      <Button :large="true" color="orange" @click="navigateTo(`/curseforge`, { external: true })">CurseForge</Button>
      <Button :large="true" color="green" @click="navigateTo(`/modrinth`, { external: true })">Modrinth</Button>
      <Button :large="true" color="gray" @click="navigateTo(`/vanilla`, { external: true })">{{ $t("content.vanilla.title.installer") }}</Button>
    </div>
    <div style="margin: -1em">
    <i18n-t keypath="content.home.columned-hero.disclaimer" tag="p" id="disclaimer-text">
      <a href="/terms">{{ $t("content.home.columned-hero.disclaimer.link") }}</a>
    </i18n-t>
    </div>
    <!-- <DownloadSection class="download-card-fix" /> -->
  </div>
</template>

<style scoped lang="scss">
.download-card-fix {
  border-radius: var(--gap-xl) !important;
}

h3 {
  color: var(--color-contrast) !important;
}

.bg-div {
  //background-image: url('/background.webp');
}

.features {
  // Two columned grid.
  padding: 9%;
  padding-top: 0;

  // make sure text isn't long widthwise
  max-width: 75vw;

  // align everything center
  margin-inline: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0;
}

.feature-block {
  gap: var(--gap-xl);
  align-items: center;
  padding-inline-end: 2%;

  // img {
  //   width: 85%;
  //   height: 85%;
  //   margin-inline: auto;
  //   object-fit: cover;

  //   border-radius: var(--gap-xl);

  //   // Drop Shadow
  //   box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  // }

  div {
    .feature-icon {
      width: 2.5rem;
      height: 2.5rem;
    }

    h1 {
      display: flex;
      gap: var(--gap-md);

      span {
        margin-top: auto;
        margin-bottom: auto;
      }
    }
  }
}

.columned-hero {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  gap: var(--gap-xl);
  align-items: center;
  margin-bottom: 8.75rem;
}

// On mobile, hide graph
@media (max-width: 999px) {
  .columned-hero {
    display: wrap;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin-bottom: 0 !important;
  }

  .graph__container {
    display: none !important;
  }

  .features {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 0 !important;
  }

  // Hide video on mobile.
  .centered-hero {
    margin-top: 5rem !important;
    // iframe {
    //   display: none !important;
    // }
  }
}

.column {
  display: block;
}

.buttons {
  display: flex;
  flex-direction: row;
  gap: var(--gap-md);
  flex-wrap: wrap;
}

#graph_disclaimer {
  font-size: 0.6em;
}

#disclaimer-text{
  color: gray;
}
</style>
