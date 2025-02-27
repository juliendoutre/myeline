import type Session from '@auth/core/types';

declare module '@auth/core/types' {
    interface Session {
        id_token?: string;
    }
}
