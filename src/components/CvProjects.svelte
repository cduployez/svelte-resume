<script>
    import WorkInProgress from "./WorkInProgress.svelte";
    import CvCategory from "./shared/CvCategory.svelte";

    const categoryTitle = 'Projets informatiques';

</script>

<style type="text/scss">

</style>

<CvCategory categoryTitle={categoryTitle}>
    <WorkInProgress/>
</CvCategory>

