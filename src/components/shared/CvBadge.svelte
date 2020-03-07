<script>
    import {onDestroy, onMount} from "svelte";
    import {
        activeSkills,
        activeChildrenSkills
    } from '../../stores/active-skills-store';

    /**
     * SkillBadge
     */
    export let badge;

    let active = false;
    let mouseInside = false;
    let selected = false;

    onMount(() => {
        const activeSkillsSub = activeSkills.subscribe(checkActive);
        onDestroy(activeSkillsSub);
    });

    function checkActive(skills) {
        if (!mouseInside) {
            if (skills) {
                active = skills.some(s => badge.keywords ? badge.keywords.includes(s) : false);
            } else {
                active = false;
            }
        }
    }

    function enableBadge() {
        mouseInside = true;
        activeSkills.set(badge ? badge.keywords : []);
        activeChildrenSkills.set(badge ? badge.childrenKeywords : []);
    }

    function disableBadge() {
        mouseInside = false;
        activeSkills.set(null);
        activeChildrenSkills.set(null);
        active = false;
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
        cursor: default;
    }

    span:hover, span.active {
        color: var(--badge);
        background-color: var(--on-badge);
    }
</style>

<span on:mouseenter={enableBadge}
      on:mouseleave={disableBadge}
      class:active>{badge.title}</span>
