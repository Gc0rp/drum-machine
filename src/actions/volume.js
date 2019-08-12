const CHANGE_VOLUME = 'CHANGE_VOLUME';

export const volumeControl = (volumeControl) => {
    return {
        type: CHANGE_VOLUME, 
        volumeControl
    };
};
