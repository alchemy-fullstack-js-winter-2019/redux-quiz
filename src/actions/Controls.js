export const UPDATE_TITLE = 'UPDATE_TITLE';
export const updateTitle = (title) => {
    return {
        type: UPDATE_TITLE,
        payload: title
    };
};
export const UPDATE_SUBTITLE = 'UPDATE_SUBTITLE';
export const updateSubtitle = (subtitle) => {
    return {
        type: UPDATE_SUBTITLE,
        payload: subtitle
    };
};
