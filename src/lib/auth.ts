import { SvelteKitAuth } from "@auth/sveltekit";
import GitLab from "@auth/sveltekit/providers/gitlab";
import { AUTH_GITLAB_ID, AUTH_GITLAB_SECRET } from '$env/static/private';

export const { handle, signIn, signOut } = SvelteKitAuth({
    providers: [
        GitLab({
            clientId: AUTH_GITLAB_ID,
            clientSecret: AUTH_GITLAB_SECRET,
            issuer: "https://gitlab.com",
            authorization: { params: { scope: "openid read_user" } },
        }),
    ],
    callbacks: {
        session: async ({ session, token }) => {
            session.id_token = token.id_token as string;

            return session;
        },
        jwt: async ({ token, account }) => {
            if (account) {
                token.id_token = account.id_token;
            }

            return token;
        }
    },
});
