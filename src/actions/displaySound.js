const DISPLAY_SOUND = "DISPLAY_SOUND";

export const displaySound = (message, volume) => {
    return {
        type: DISPLAY_SOUND,
        message,
        volume
    };
};