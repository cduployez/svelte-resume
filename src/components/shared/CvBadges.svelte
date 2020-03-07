<script>
    import CvBadge from "./CvBadge.svelte";
    /**
     * SkillBadge[]
     */
    export let badges;
</script>

<style type="text/scss">
    div {
        margin-top: .5rem;
        margin-bottom: .5rem;
    }
</style>

<div>
    {#each badges as badge}
        <CvBadge badge={badge}/>
    {/each}
</div>

