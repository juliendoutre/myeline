import { SvelteKitAuth } from "@auth/sveltekit";
import Keycloak from "@auth/sveltekit/providers/keycloak"

export const { handle, signIn, signOut } = SvelteKitAuth({
    providers: [Keycloak],
})
