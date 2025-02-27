<script>
    import {
        Navbar,
        NavBrand,
        DarkMode,
        ToolbarButton,
        Tooltip,
        Avatar,
        Dropdown,
        DropdownItem,
        DropdownHeader,
    } from "flowbite-svelte";
    import { GithubSolid } from "flowbite-svelte-icons";
    import { SignIn, SignOut } from "@auth/sveltekit/components";
    import { page } from "$app/stores";
</script>

<Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b">
    <NavBrand href="/">
        <span
            class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >
            Myeline
        </span>
    </NavBrand>
    <div class="flex items-center ml-auto">
        <ToolbarButton
            size="lg"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/juliendoutre/myeline"
            class="dark:hover:text-white hover:text-gray-900"
        >
            <GithubSolid />
        </ToolbarButton>
        <Tooltip class="dark:bg-gray-900" placement="bottom"
            >View on GitHub</Tooltip
        >
        <DarkMode
            class="inline-block dark:hover:text-white hover:text-gray-900"
        />
        <Tooltip class="dark:bg-gray-900" placement="bottom"
            >Toogle dark mode</Tooltip
        >
        {#if $page.data.session}
            <div class="flex items-center md:order-2">
                <Avatar
                    id="avatar-menu"
                    src={$page.data.session.user?.image ?? ""}
                    class="cursor-pointer"
                />
            </div>
            <Dropdown placement="bottom" triggeredBy="#avatar-menu">
                <DropdownHeader>
                    <span class="block text-sm"
                        >{$page.data.session.user?.name}</span
                    >
                    <span class="block truncate text-sm font-medium"
                        >{$page.data.session.user?.email}</span
                    >
                </DropdownHeader>
                <DropdownItem><SignOut>Sign out</SignOut></DropdownItem>
            </Dropdown>
        {:else}
            <SignIn provider="gitlab" />
        {/if}
    </div>
</Navbar>
