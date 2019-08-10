const CHANGE_VOLUME = 'CHANGE_VOLUME';

export const volumeControl = (volumeNumber) => {
    return {
        type: CHANGE_VOLUME, 
        volumeNumber
    };
};
