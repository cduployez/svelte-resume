<script>
    import {iconConsts} from '../consts/icon-consts.js';
    import FaIcon from "./FaIcon.svelte";

</script>

<style type="text/scss">
    @import "src/assets/styles/variables.scss";

    div {
        text-align: center;
        color: var(--secondary);
        background-color: var(--on-secondary);
        transition: $transition-delay;
    }

</style>

<div>
    <FaIcon faIcon="{iconConsts.faCode}"/>
</div>
