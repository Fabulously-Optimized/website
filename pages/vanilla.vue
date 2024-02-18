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
  renderHighlightedString,
  UpdatedIcon,
  DiscordIcon,
} from "omorphia";
</script>
<script lang="ts">
export default {
  methods: {
    updateIframeUrl() {
      const iframe = document.getElementById('vanilla-embed');
      if (!iframe) return; // Exit if the iframe is not found

      let src = iframe.src;
      const url = new URL(src);
      url.searchParams.set('download', 'latest'); // Set the query parameter

      iframe.src = url.toString(); // Update the iframe src
    }
  }
}
</script>
  

<template>
	<h1 id="title">{{ $t("content.vanilla.title") }}</h1>
  <h2>{{ $t("content.vanilla.title.installer") }}</h2>
  <Button color="green" @click="updateIframeUrl">
    <DownloadIcon />{{ $t("content.vanilla.button.windows") }}
  </Button>
  <Button color="gray" @click="updateIframeUrl">
    <DownloadIcon />{{ $t("content.vanilla.button.macos") }}
  </Button>
  <Button color="gray" @click="updateIframeUrl">
    <DownloadIcon />{{ $t("content.vanilla.button.linux") }}
  </Button>
  <Button color="gray" @click="updateIframeUrl">
    <DownloadIcon />{{ $t("content.vanilla.button.linuxManual") }}
  </Button>
  <h2>{{ $t("content.vanilla.title.manual") }}</h2>
  <div class="iframe-container">
    <iframe id="vanilla-embed" src="./vanilla.html" frameborder="0" width="50%" height="100em"></iframe>
  </div>
  <br>
  <Button color="blue" @click="navigateTo(`https://wiki.download.fo/readme/install-instructions#minecraft-launcher-vanilla`, { external: true })">
    <DownloadIcon />{{ $t("content.vanilla.button.howto") }}
  </Button> 
		<p><b>{{ $t("content.vanilla.button.disclaimer.important") }}</b> {{ $t("content.vanilla.button.disclaimer.text") }}</p>
</template>


<style>
.iframe-container {
  align-self: center;
}
</style>
