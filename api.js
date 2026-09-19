//==========================//
//    YouView Easy API      //
//    Written by human      //
//==========================//

let api = {
    _fetch: (url) => {
        return fetch(url).then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.text();
        });
    },

    getvideothumbnail: (videoid) => {
        return api._fetch(`https://banner.yt/${videoid}?format=webp&quality=100`)
            .then(data => `data:image/webp;base64,${btoa(data)}`);
    },
    
    getchanneldata: (channelname) => {
        return api._fetch(`https://banner.yt/api/channel/${channelname}?type=handle`)
            .then(data => JSON.parse(data));
    },
    
    getvideofile: () => {/* due to bans, im not adding this*/},
    
    getsearch: (query) => {
        return api._fetch(`https://banner.yt/api/search?q=${query}`)
            .then(data => JSON.parse(data))
    }
};

export default api;
