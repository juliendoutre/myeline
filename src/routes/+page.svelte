<script>
    import { Heading, P, Span } from "flowbite-svelte";
</script>

<div class="text-center">
    <Heading
        tag="h1"
        class="mb-4"
        customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
    >
        Welcome to <Span
            gradient
            gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
            >Myeline</Span
        >!
    </Heading>
    <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        A platform helping you accelerating your projects and decision making by
        inventorying and surfacing digital assets and their relationships within
        a single pane of glass.
    </P>
</div>
