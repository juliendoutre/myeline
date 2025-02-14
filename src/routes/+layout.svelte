<script>
    import NavBar from "./NavBar.svelte";
    import Footer from "./Footer.svelte";
</script>

<div class="relative px-8">
    <NavBar />
    <div class="overflow-scroll pb-16 mt-28">
        <div class="container mx-auto py-2">
            <slot />
        </div>
        <Footer />
    </div>
</div>
