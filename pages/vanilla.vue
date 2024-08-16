<script setup lang="ts">
import { onMounted } from 'vue';
import {
  Button,
  DownloadIcon,
  WikiIcon
} from "omorphia";

const updateIframeUrl = () => {
  const iframe = document.getElementById('vanilla-embed') as HTMLIFrameElement;
  if (!iframe) return; // Exit if the iframe is not found

  const currentSearchParams = new URLSearchParams(window.location.search);
  const iframeUrl = new URL(iframe.src, window.location.origin);
  currentSearchParams.forEach((value, key) => {
    iframeUrl.searchParams.set(key, value); // Append or overwrite existing search parameters
  });

  iframe.src = iframeUrl.toString(); // Update the iframe src with new parameters
};

const todo = () => {
  alert("Soon!");
};

onMounted(() => {
  try {
    updateIframeUrl();
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
	<h1 id="title">{{ $t("content.vanilla.title") }}</h1>
  <!--
  <h2>{{ $t("content.vanilla.title.installer") }}</h2>
  <Button color="green" @click="todo">
    <DownloadIcon />{{ $t("content.vanilla.button.windows") }}
  </Button>
  <Button color="gray" @click="todo">
    <DownloadIcon />{{ $t("content.vanilla.button.macos") }}
  </Button>
  <Button color="gray" @click="todo">
    <DownloadIcon />{{ $t("content.vanilla.button.linux") }}
  </Button>
  <Button color="gray" @click="todo">
    <DownloadIcon />{{ $t("content.vanilla.button.linuxManual") }}
  </Button>
  <h2>{{ $t("content.vanilla.title.manual") }}</h2>
  -->
  <div class="iframe-container">
    <iframe id="vanilla-embed" src="../vanilla-embed.html" frameborder="0" height="100em"></iframe>
  </div>
  <br>
  <Button color="blue" @click="navigateTo(`https://wiki.download.fo/install-instructions#minecraft-launcher-vanilla`, { external: true })">
    <WikiIcon />{{ $t("content.vanilla.button.howto") }}
  </Button> 
		<p><b>{{ $t("content.vanilla.button.disclaimer.important") }}</b> {{ $t("content.vanilla.button.disclaimer.text") }}</p>
</template>


<style>
.iframe-container {
  align-self: center;
}

@media (max-width: 999px) {
  #vanilla-embed {
    width: 100% !important;
    margin-inline-start: -1em !important;
  }
}

#vanilla-embed {
  width: 50%;
}
</style>
