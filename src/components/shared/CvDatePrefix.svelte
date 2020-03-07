<script>
    export let cvDate;

    $: beginDateFormat = cvDate.getBeginDateFormat();
    $: endDateFormat = cvDate.getEndDateFormat();
</script>

<style type="text/scss">
    @import "src/assets/styles/variables.scss";

    .date-range {
        color: var(--primary);
        text-transform: capitalize;
    }

    .date-range:after {
        content: $title-delimiter;
        margin-left: .2rem;
        margin-right: .2rem;
    }
</style>

<span class="date-range">
    <span>{ beginDateFormat }</span>
    {#if cvDate.beginDate !== cvDate.endDate}
        <span> - </span>
        {#if cvDate.endDate}
            <span>{ endDateFormat }</span>
        {/if}
        {#if !cvDate.endDate}
            <span>Actuel</span>
        {/if}
    {/if}
</span>
