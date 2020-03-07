<script>
    import {iconConsts} from '../../consts/icon-consts';
    import FaIcon from "../FaIcon.svelte";

    export let categoryTitle;
    export let categoryDisplayed = false;

</script>

<style type="text/scss">
    @import "src/assets/styles/variables.scss";

    .title {
        background-color: var(--primary);
        transition: $transition-delay;
        color: var(--on-primary);
        border-radius: 5px;
        margin-top: 0;
        margin-bottom: 1rem;

        h3 {
            padding: .2em;
            font-size: 1.3rem;
            text-align: center;
            margin: 0;
            font-variant: small-caps;
        }

        .expand-button {
            cursor: pointer;
            padding: .5rem 1rem;
            font-size: smaller;
            position: absolute;
            margin: auto;
        }
    }
</style>

<div class:open={categoryDisplayed} class:closed={!categoryDisplayed} class="title">
    {#if !categoryDisplayed}
        <span class="expand-button"><FaIcon faIcon={iconConsts.faPlus}/></span>
    {/if}
    <h3>{ categoryTitle }</h3>
</div>


