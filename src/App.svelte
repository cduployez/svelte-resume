<script>
    import Nested from "./Nested.svelte";

    const name = 'World';
</script>

<style>
    p {
        color: purple;
        font-family: 'Roboto', cursive;
        font-size: 2em;
    }
</style>

<h1>Hello {name}!</h1>

<Nested/>


