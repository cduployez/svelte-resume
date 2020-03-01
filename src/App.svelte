<script>
    import {onMount, onDestroy} from 'svelte';
    import {themeStore} from './stores/theme-store.js';
    import {themeUtils} from './utils/theme-utils.js';

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

        CvFooter {
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

            CvFooter {
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

<h1>Work in progress</h1>
<!--

&lt;!&ndash;<CvMenuBar/>&ndash;&gt;

<main>
    &lt;!&ndash;<CvHeader/>&ndash;&gt;

    &lt;!&ndash;<CvBanner/>&ndash;&gt;

    <div class="columns">
        <div>
            &lt;!&ndash;<CvExperiences/>&ndash;&gt;
            &lt;!&ndash;<CvProjects/>&ndash;&gt;
        </div>

        <div>
            &lt;!&ndash;<CvFormations/>&ndash;&gt;
            &lt;!&ndash;<CvSkills/>&ndash;&gt;
            &lt;!&ndash;<CvLanguages/>&ndash;&gt;
            &lt;!&ndash;<CvHobbies/>&ndash;&gt;
        </div>

    </div>

    &lt;!&ndash;<CvFooter/>&ndash;&gt;
</main>-->



