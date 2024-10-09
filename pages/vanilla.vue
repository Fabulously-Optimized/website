<script setup lang="ts">
import { onMounted } from 'vue';
import axios from 'axios';
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

const detectedOS = ref('');

const detectOS = () => {
  const platform = window.navigator.platform.toLowerCase();
  if (platform.includes('win')) {
    detectedOS.value = 'Windows';
  } else if (platform.includes('mac')) {
    detectedOS.value = 'macOS';
  } else if (platform.includes('linux')) {
    detectedOS.value = 'Linux';
  } else {
    detectedOS.value = 'Unknown';
  }
};

const downloadLatestRelease = async (fileExtension: string, isStable: boolean) => {
  const releasesUrl = `https://api.github.com/repos/Fabulously-Optimized/installer/releases`;

  try {
    const response = await axios.get(releasesUrl);
    const releases = response.data;

    const filteredRelease = isStable
      ? releases.find((release: any) => !release.prerelease)
      : releases.find((release: any) => release.prerelease);

    if (!filteredRelease) throw new Error('No release found');

    const asset = filteredRelease.assets.find((asset: any) =>
      asset.name.endsWith(fileExtension)
    );

    if (!asset) downladUrl = releasesUrl;

    const downloadUrl = asset.browser_download_url;
    window.location.href = downloadUrl;
  } catch (error) {
    console.error('Error downloading release:', error);
  }
};

onMounted(() => {
  try {
    updateIframeUrl();
    detectOS();
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
	<h1 id="title">{{ $t("content.vanilla.title") }}</h1>
  <h2>{{ $t("content.vanilla.title.installer") }}</h2>

  <div class="buttons">
    <!-- Display the green button first based on the detected OS -->
    <Button v-if="detectedOS === 'Windows'" color="green" @click="downloadLatestRelease('.exe', false)">
      <DownloadIcon />{{ $t("content.vanilla.button.windows") }}
    </Button>

    <Button v-if="detectedOS === 'macOS'" color="green" @click="downloadLatestRelease('.dmg', false)">
      <DownloadIcon />{{ $t("content.vanilla.button.macos") }}
    </Button>

    <Button v-if="detectedOS === 'Linux'" color="green" @click="downloadLatestRelease('.AppImage', false)">
      <DownloadIcon />{{ $t("content.vanilla.button.linux") }}
    </Button>

    <!-- Gray buttons for the other OSes -->
    <Button v-if="detectedOS !== 'Windows'" color="gray" @click="downloadLatestRelease('.exe', false)">
      <DownloadIcon />{{ $t("content.vanilla.button.windows") }}
    </Button>

    <Button v-if="detectedOS !== 'macOS'" color="gray" @click="downloadLatestRelease('.dmg', false)">
      <DownloadIcon />{{ $t("content.vanilla.button.macos") }}
    </Button>

    <Button v-if="detectedOS !== 'Linux'" color="gray" @click="downloadLatestRelease('.AppImage', false)">
      <DownloadIcon />{{ $t("content.vanilla.button.linux") }}
    </Button>
  </div>
  <br>
  <h2>{{ $t("content.vanilla.title.manual") }}</h2>
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

.buttons {
  display: flex;
  flex-direction: row;
  gap: var(--gap-md);
  flex-wrap: wrap;
}
</style>
