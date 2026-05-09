// Falcron | AeroX Development
// Author: itsfizys  |  AeroX Development           
export const config = {
        token: process.env.DISCORD_TOKEN || '',
        clientId: process.env.DISCORD_CLIENT_ID || '',
        prefix: '-',
        ownerIds: process.env.OWNER_IDS ? process.env.OWNER_IDS.split(',') : [],
        ownerOnly: false,

        links: {
                supportServer: 'https://discord.gg/AeroX',
                invite: 'https://discord.com/oauth2/authorize?client_id=1497418632383172731',
        },

        cache: {
                maxSize: process.env.NODE_ENV === 'production' ? 100000 : 50000,
                flushOnStart: false,
                flushOnShutdown: false,
        },

        database: {
                uri: process.env.MONGO_URL || process.env.MONGODB_URI || '',
        },

        presence: {
                status: 'dnd',
                activity: {
                        name: 'repentw',
                        type: 'Custom',
                },
        },

        watermark: '',
        version: '1.0.0',
};

/**
 * Project: Falcron
 * Author: itsfizys (Aegis)
 * Organization: AeroX Development
 * GitHub: https://github.com/AeroXDevs
 * License: Custom
 *
 * © 2026 AeroX Development. All rights reserved.
 */
