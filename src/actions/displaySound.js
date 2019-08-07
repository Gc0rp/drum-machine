const DISPLAY_SOUND = "DISPLAY_SOUND";

export const displaySound = (message) => {
    return {
        type: DISPLAY_SOUND,
        message
    };
};