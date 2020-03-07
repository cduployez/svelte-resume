<script>
    import {projectConsts} from '../consts/project-consts.js';
    import {linkConsts} from '../consts/link-consts.js';
    import {iconConsts} from '../consts/icon-consts.js';
    import {sessionStorageUtils} from "../utils/session-storage-utils.js";
    import FaIcon from "./FaIcon.svelte";
    import {themeUtils} from "../utils/theme-utils.js";
    import {onMount} from "svelte";
    import {themeStore} from '../stores/theme-store.js';

    let minimized = sessionStorageUtils.getMenuBarMinimzed();
    let themeIcon;

    function nextTheme() {
        updateThemeIcon(themeUtils.nextTheme(themeStore, $themeStore));
    }

    function updateThemeIcon(theme) {
        switch (theme) {
            case themeUtils.darkTheme():
                themeIcon = iconConsts.faMoonSolid;
                break;
            default:
                themeIcon = iconConsts.faMoonRegular;
                break;
        }
    }

    function minimize() {
        minimized = true;
    }

    function maximize() {
        minimized = false;
    }

    onMount(async () => {
        updateThemeIcon($themeStore.currentTheme);
    });
</script>

<style type="text/scss">
    @import "src/assets/styles/variables.scss";

    nav {
        background-color: var(--navbar);
        color: var(--on-navbar);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        margin-bottom: 2rem;
        font-size: larger;
        user-select: none;
        transition: $transition-delay;

        -webkit-box-shadow: 0 1px 15px 0 var(--navbar-shadow);
        -moz-box-shadow: 0 1px 15px 0 var(--navbar-shadow);
        box-shadow: 0 1px 15px 0 var(--navbar-shadow);

        .title {
            user-select: none;
        }

        .link {
            text-decoration: none;
            padding: 1rem;
            cursor: pointer;
            transition: $transition-delay;
            color: var(--on-navbar);
        }

        a {
            font-size: larger;
        }

        .minimize {
            font-size: small;
        }

        a.linkedin:hover {
            color: $linkedIn;
        }

        a.pdf:hover {
            color: $pdf;
        }

        .theme-button:hover {
            color: $yellow;
        }

        .minimize:hover {
            color: var(--primary);
        }
    }

    nav.minimized {
        position: absolute;
        right: 0;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column wrap;
        }

        .link {
            padding: .5rem 0;
        }

    }

    .placeholder {
        padding-bottom: 2rem;
    }


</style>

<nav class:minimized>
    {#if !minimized}
        <div class="title">
            <span>CV – { projectConsts.latestRevisionYear }</span>
        </div>
    {/if}
    <div>
        <a href={linkConsts.pdfDownloadUrl} class="pdf link">
            <FaIcon faIcon="{iconConsts.faFilePdf}"/>
        </a>
        <a href={linkConsts.linkedInUrl} class="linkedin link" target="_blank">
            <FaIcon faIcon="{iconConsts.faLinkedIn}"/>
        </a>
        <span on:click={nextTheme} class="link theme-button"><FaIcon
                faIcon={$themeStore.currentTheme === themeUtils.darkTheme() ? iconConsts.faMoonSolid : iconConsts.faMoonRegular}/></span>
        {#if !minimized}
            <span on:click={minimize} class="link minimize"><FaIcon faIcon="{iconConsts.faMinus}"/></span>
        {/if}
        {#if minimized}
            <span on:click={maximize} class="link minimize"><FaIcon faIcon="{iconConsts.faPlus}"/></span>
        {/if}
    </div>
</nav>

{#if minimized}
    <div class="placeholder"></div>
{/if}
