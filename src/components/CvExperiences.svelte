<script>
    import {experienceFactory} from "../server/experience-factory";
    import CvCategory from "./shared/CvCategory.svelte";
    import CvItemContainer from "./shared/CvItemContainer.svelte";
    import CvDatePrefix from "./shared/CvDatePrefix.svelte";
    import CvTitle from "./shared/CvTitle.svelte";
    import CvSubtitle from "./shared/CvSubtitle.svelte";
    import CvDescriptions from "./shared/CvDescriptions.svelte";
    import CvBadges from "./shared/CvBadges.svelte";


    const categoryTitle = 'Expériences';
    const experienceItems = experienceFactory.getAll();

</script>

<style type="text/scss">

</style>

<CvCategory categoryTitle={categoryTitle}>
    {#each experienceItems as item}
        <CvItemContainer>
            <div>
                <CvDatePrefix cvDate={item.cvDate}/>
                <CvTitle detail={item.jobType} title={item.enterprise}/>
            </div>
            <div>
                {#if item.project}
                    <CvSubtitle subtitle={item.project}/>
                {/if}
                <CvDescriptions descriptions={item.descriptions}/>
                <CvBadges badges={item.skills}/>
            </div>
        </CvItemContainer>
    {/each}
</CvCategory>
