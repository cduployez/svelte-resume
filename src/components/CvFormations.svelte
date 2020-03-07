<script>
    import WorkInProgress from "./WorkInProgress.svelte";
    import CvCategory from "./shared/CvCategory.svelte";

    const categoryTitle = 'Formation';

</script>

<style type="text/scss">

</style>

<CvCategory categoryTitle={categoryTitle}>
    <WorkInProgress/>
</CvCategory>

