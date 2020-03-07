<script>
    import {onDestroy, onMount} from "svelte";
    import {
        activeSkills,
        activeChildrenSkills,
        selectedSkills,
        selectedChildrenSkills
    } from '../../stores/active-skills-store';

    /**
     * SkillBadge
     */
    export let badge;

    let active = false;
    let mouseInside = false;
    let selected = false;

    onMount(() => {
        const activeSkillsSub = activeSkills.subscribe((skills) => {
            checkActive(skills);
        });
        const selectedSkillsSub = selectedSkills.subscribe((skills) => {
            checkSelected(skills);
        });
        onDestroy(activeSkillsSub);
        onDestroy(selectedSkillsSub);
    });

    function checkActive(skills) {
        if (!mouseInside) {
            if (skills) {
                active = skills.some(s => badge.keywords ? badge.keywords.includes(s) : false);
            }
        }
    }

    function checkSelected(skills) {
        if (skills) {
            selected = skills.some(s => badge.keywords ? badge.keywords.includes(s) : false);
        }
    }

    function enableBadge() {
        mouseInside = true;
        activeSkills.update(() => badge ? badge.keywords : null);
        activeChildrenSkills.update(() => badge ? badge.childrenKeywords : null);
    }

    function disableBadge() {
        mouseInside = false;
        activeSkills.update(() => null);
        activeChildrenSkills.update(() => null);
        active = false;
    }

    function selectBadge() {
        if (!selected) {
            selectedSkills.update(() => badge ? badge.keywords : null);
            selectedChildrenSkills.update(() => badge ? badge.childrenKeywords : null);
        } else {
            selectedSkills.update(() => null);
            selectedChildrenSkills.update(() => null);
        }
    }

</script>

<style type="text/scss">
    @import "src/assets/styles/variables.scss";

    span {
        display: inline-block;
        margin: .2rem;
        padding: .2rem;
        border-radius: 5px;
        border: 1px solid var(--on-badge);
        color: var(--on-badge);
        background-color: var(--badge);
        transition: $transition-delay;
        /* Mouse */
        cursor: pointer;
    }

    span:hover, span.active {
        color: var(--badge);
        background-color: var(--on-badge);
    }
</style>

<span on:click={selectBadge}
      on:mouseenter={enableBadge}
      on:mouseleave={disableBadge}
      class:active={active || selected}
>{badge.title}</span>
