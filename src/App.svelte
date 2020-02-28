<script>
    import {onMount} from 'svelte';

    function addBodyClass(className) {
        if (className) {
            window.document.body.classList.add(className);
        }
    }

    function removeBodyClass(className) {
        if (className) {
            window.document.body.classList.remove(className);
        }
    }

    function onThemeChange(themeInfo) {
        if (themeInfo) {
            removeBodyClass(themeInfo.previousTheme);
            addBodyClass(themeInfo.currentTheme);
        }
    }

    onMount(async () => {
        // TODO Subscribe to theme change
        // TODO Get current theme
        onThemeChange({previousTheme: null, currentTheme: 'light-theme'/*themeStore.theme*/});
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



