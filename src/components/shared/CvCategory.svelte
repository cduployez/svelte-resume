<script>
    import {slide, fade} from 'svelte/transition';
    import CvCategoryTitle from "./CvCategoryTitle.svelte";

    export let categoryTitle;

    let categoryDisplayed = true;
    let visible = true;

    /**
     * Open/Close category
     */
    function toggle() {
        if (categoryDisplayed) {
            close();
        } else {
            open();
        }
    }

    function open() {
        categoryDisplayed = true;
        visible = true;
    }

    function close() {
        categoryDisplayed = false;
        visible = false;
    }

</script>

<style type="text/scss">
    .category-title {
        cursor: pointer;
    }
</style>

<div on:click={toggle} class="category-title">
    <CvCategoryTitle
            categoryDisplayed={categoryDisplayed}
            categoryTitle={categoryTitle}
    />
</div>

{#if visible}
    <div transition:slide>
        <slot></slot>
    </div>
{/if}
