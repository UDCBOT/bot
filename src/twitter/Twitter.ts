const Twit = require('twit');
const fs = require('fs');
const config = require('./config');
const T = new Twit(config);

let obj = {lastPost: []};
let lastPost;
const feed = {f: []};

export default class TwitterConnect {
    /**
     * Reads lastPost.json to find the last Post, if the Bot restarts.
     * checks the feed for update.
     * send the link into the channel
     * @param channel needs channel to send the twitterFeed
     */
    public static getTwitter(channel) {
        /**
         * reads the file to load the last PostID
         */
        fs.readFile('lastPost.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                lastPost = JSON.parse(data);

            }
        });
        /**
         * pulling the feed from Twitter.
         * user_id hs to be ther TwitterID from the person.
         */
        T.get('statuses/user_timeline', {user_id: '1010051739276533760', count: 1}, function (err, data, response) {
                let lastId = lastPost.lastPost[0].id;

            /**
             * Checks the Posts IDs.
             * If the Post IDs are different, the new ID will be saved into the file.
             * Send the Post to the Channel.
             */
            if (lastId !== data[0].id) {
                    lastId = data[0].id;
                    obj.lastPost.push({
                        id: data[0].id,
                    });
                    const json = JSON.stringify(obj);
                    fs.writeFile('lastPost.json', json, 'utf8');
                    channel.send('https://twitter.com/DevTest86247159/status/' + data[0].id_str);
                    console.log('success');
                    obj = {lastPost: []};
                }
            },
        );

    }
}
