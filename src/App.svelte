<script>
    import {onMount, onDestroy} from 'svelte';
    import {themeStore} from './stores/theme-store.js';
    import {themeUtils} from './utils/theme-utils.js';
    import CvMenuBar from "./components/CvMenuBar.svelte";
    import CvBodyConf from "./components/CvBodyConf.svelte";
    import CvHeader from "./components/CvHeader.svelte";
    import CvBanner from "./components/CvBanner.svelte";
    import CvExperiences from "./components/CvExperiences.svelte";
    import CvProjects from "./components/CvProjects.svelte";
    import CvFormations from "./components/CvFormations.svelte";
    import CvSkills from "./components/CvSkills.svelte";
    import CvLanguages from "./components/CvLanguages.svelte";
    import CvHobbies from "./components/CvHobbies.svelte";
    import CvFooter from "./components/CvFooter.svelte";

    onMount(async () => {
        themeUtils.onThemeChange($themeStore);
        let themeStoreUnsubscribe = themeStore.subscribe(themeInfo => themeUtils.onThemeChange(themeInfo));
        onDestroy(themeStoreUnsubscribe);
    });

</script>

<style type="text/scss">
    @import "src/assets/styles/variables.scss";

    main {
        margin: 0;
        padding: 0 10% 5rem;

        .columns {
            display: flex;
            flex-flow: row-reverse wrap;
            justify-content: space-between;

            div {
                width: calc(50vw - 15%);
            }
        }

        .footer {
            display: none;
        }
    }

    @media (max-width: $tablet-width) {
        main {
            padding: 0 5% 5rem;

            .columns {
                div {
                    width: 100%;
                }
            }

            .footer {
                display: block;
            }
        }
    }

    @media (max-width: $phone-width) {
        main {
            padding: 0 2% 5rem;
        }
    }
</style>

<CvBodyConf/>
<CvMenuBar/>

<main>
    <CvHeader/>

    <CvBanner/>

    <div class="columns">
        <div>
            <CvExperiences/>
            <CvProjects/>
        </div>
        <div>
            <CvFormations/>
            <CvSkills/>
            <CvLanguages/>
            <CvHobbies/>
        </div>
    </div>

    <div class="footer">
        <CvFooter/>
    </div>
</main>



