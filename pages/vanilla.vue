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
  <Button color="green" @click="updateIframeUrl">
    <DownloadIcon />{{ $t("content.vanilla.button.latest") }}
  </Button>
  <div class="iframe-container">
    <iframe id="vanilla-embed" src="./vanilla.html" frameborder="0" width="50%" height="500px"></iframe>
  </div>
  <Button color="gray" @click="navigateTo(`https://www.curseforge.com/minecraft/modpacks/fabulously-optimized/files?showAlphaFiles=show`, { external: true })">
    <DownloadIcon />{{ $t("content.vanilla.button.older") }}
  </Button>
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
