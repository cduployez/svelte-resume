<script>
    export let title;
    export let detail;
</script>

<style type="text/scss">
    @import "src/assets/styles/variables.scss";

    .title {
        font-weight: bold;
        color: var(--on-background);
        transition: $transition-delay;
    }

    .detail {
        margin-left: .2rem;
        color: var(--on-background);
        transition: $transition-delay;
    }
</style>

<span class="title">{title}</span>
{#if detail}
    <span class="detail">({detail})</span>
{/if}
