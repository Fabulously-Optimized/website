<script setup lang="ts">
import { ref } from 'vue';
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
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const projectDetails = ref([]);

    async function fetchProjectVersions() {
      console.log('Fetching project versions...');
      const response = await fetch(`https://api.modrinth.com/v2/project/1KVo5zza/version?featured=true`);
      const versions = await response.json();
      return versions.find(version => version.version_type === "release");
    }

    async function fetchProjectDetails(projectIds) {
      console.log('Fetching project details...');
      const response = await fetch(`https://example.com/v2/projects?ids=[${projectIds.map(id => `"${id}"`).join(',')}]`);
      return response.json();  
    }

    async function displayProjects() {
      console.log('Displaying projects...');
      const version = await fetchProjectVersions();
      if (!version || !version.dependencies) {
        console.log('No version or dependencies found.');
        return; // Exit if no version or dependencies found
      }

      const projectIds = version.dependencies.map(dep => dep.project_id).filter(id => id); // Filter out falsy values
      const projects = await fetchProjectDetails(projectIds);

      // Sort projects by title
      projects.sort((a, b) => a.title.localeCompare(b.title));

      projectDetails.value = projects;
      console.log('Projects updated:', projectDetails.value);
    }

    // Directly call displayProjects.
    displayProjects().catch(console.error);

    return {
      projectDetails,
    };
  },
};
</script>

<template>
    <h1>{{ $t("content.thanks.title") }}</h1>
<p>{{ $t("content.thanks.supportMessage") }}</p>

<h2>{{ $t("content.thanks.modsTitle") }}</h2>
<p>{{ $t("content.thanks.modsDescription") }}</p>
<ul id="projects"></ul>
<p><a href="https://download.fo/mods">{{ $t("content.thanks.modsLink") }}</a></p>
<p>{{ $t("content.thanks.modsAutomaticListFetch") }}</p>

<h2>{{ $t("content.thanks.modpackTitle") }}</h2>
<p>{{ $t("content.thanks.modpackSupportWays") }}</p>

<ul>
    <li>
        <strong>{{ $t("content.thanks.modpackLaunchersTitle") }} <a href="https://download.fo/curseforge">{{ $t("content.thanks.modpackLaunchersCurseforge") }}</a> {{ $t("content.thanks.modpackLaunchersOr") }} <a href="https://download.fo/modrinth">{{ $t("content.thanks.modpackLaunchersModrinth") }}</a></strong>
        <ul>
            <li>{{ $t("content.thanks.modpackLaunchersMoneyInfo") }}</li>
            <li><a href="https://download.fo/install">{{ $t("content.thanks.modpackLaunchersInstallInstructions") }}</a></li>
        </ul>
    </li>
    <li>
        <strong><a href="https://download.fo/rate">{{ $t("content.thanks.modpackAltToHeartTitle") }}</a></strong>
        <ul>
            <li>{{ $t("content.thanks.modpackAltToHeartSignupInfo") }}</li>
        </ul>
    </li>
    <li>
        <strong><a href="https://wiki.download.fo/readme/free-cape">{{ $t("content.thanks.modpackFreeCapeTitle") }}</a></strong>
    </li>
    <li>
        <strong><a href="https://docs.modrinth.com/docs/details/ads/#browser-extensions">{{ $t("content.thanks.modpackAdBlockerTitle") }}</a> {{ $t("content.thanks.modpackAdBlockerAnd") }} <a href="https://modrinth.com/user/robotkoer">{{ $t("content.thanks.modpackAdBlockerCheckOutProjects") }}</a></strong>
    </li>
    <li>
        <strong><a href="https://download.fo/host">{{ $t("content.thanks.modpackMinecraftServer") }}</a></strong>
    </li>
    <li>
        <strong><a href="https://download.fo">{{ $t("content.thanks.modpackShare") }}</a></strong>
    </li>
</ul>

<h2>{{ $t("content.thanks.contributeTitle") }}</h2>
<p>{{ $t("content.thanks.contributeAdditionalSupportMessage") }}</p>
<ul>
    <li>
        <strong><a href="https://github.com/Fabulously-Optimized/fabulously-optimized/issues?q=is%3Aissue+is%3Aopen+label%3A%22feedback%2Ftesters+wanted%22">{{ $t("content.thanks.contributeTestModsTitle") }}</a></strong>
    </li>
    <li>
        <strong><a href="https://download.fo/translate">{{ $t("content.thanks.contributeTranslateTitle") }}</a></strong>
    </li>
    <li>
        <strong><a href="https://github.com/Fabulously-Optimized/wiki/issues">{{ $t("content.thanks.contributeWikiTitle") }}</a></strong>
    </li>
    <li>
        <strong><a href="https://github.com/Fabulously-Optimized/fabulously-optimized/labels/help%20wanted">{{ $t("content.thanks.contributeProgrammingTitle") }}</a></strong>
    </li>
</ul>
</template>


<style>
.iframe-container {
  align-self: center;
}
</style>
