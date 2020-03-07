<script>
    export let descriptions;
</script>

<style type="text/scss">
    @import "src/assets/styles/variables.scss";

    .description {
        margin-top: .2rem;
        margin-bottom: .2rem;
        color: var(--on-background);
        transition: $transition-delay;
    }
</style>

<div>
    {#each descriptions as description}
        <p class="description">
            {description}
        </p>
    {/each}
</div>
