    // console.log(chrome.history);
    // chrome.history.deleteUrl(
    //     details: UrlDetails,
    //     callback?: function,
    // );

// chrome.action.onClicked.addListener(async () => {
//     // si c'est activé, alors on va activer content-script.js
//     const isActionEnabled = await chrome.action.isEnabled();
//     console.log(isActionEnabled);
//     if (isActionEnabled) {
//         //   chrome.action.disable();
//         // await chrome.action.setBadgeBackgroundColor({color: '#EEEEFF'});
//         await chrome.action.setBadgeTextColor({color: '#111111'});
//         await chrome.action.setBadgeText({text: 'ON'});
//     } 
//     else {
//         //   chrome.action.enable();
//         // await chrome.action.setBadgeBackgroundColor({color: '#EEEEFF'});
//         await chrome.action.setBadgeTextColor({color: '#111111'});
//         await chrome.action.setBadgeText({text: 'OFF'});
//     }
//     // sinon, on va desactiver content-script.js
//     // if (tab.url.includes('youtube.com')) {
//     //     chrome.scripting.executeScript({
//     //         target: { tabId: tab.id },
//     //         func: myFunc
//     //     });
//     // }
// });
