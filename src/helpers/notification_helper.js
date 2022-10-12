export const showNotification = (show) => {
    show(true);
    setTimeout(()=> {
        show(false);
    }, 2000)
} 