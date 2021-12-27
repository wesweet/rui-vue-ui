/*
 * @Description: 加载 widgets JS
 * @Author: panrui
 * @Date: 2021-12-27 11:13:49
 * @LastEditTime: 2021-12-27 11:17:46
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
let addScriptPromise = 0;

const publicProps = {
  lang: {
    type: String,
    default: "zh-cn",
  },
  dnt: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: String,
    default: "light",
  },
  align: {
    type: [String, undefined],
    default: undefined,
  },
  width: {
    type: [String, Number],
    default: "auto",
  },
};
/** timelineProps **/
const timelineProps = {
  // https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference
  ...publicProps,
  sourceType: {
    type: String,
    default: "profile",
  },
  screenName: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    default: "national-parks",
  },
  height: {
    type: [String, Number],
    default: "auto",
  },
  chrome: {
    type: String,
    default: "nofooter",
  },
  borderColor: {
    type: String,
    default: "auto",
  },
  showReplies: {
    type: Boolean,
    default: false,
  },
  tweetLimit: {
    type: [String, Number],
    default: undefined,
  },
  ariaPolite: {
    type: String,
    default: "polite",
  },
};
/** tweetProps **/
const tweetProps = {
  // https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference
  ...publicProps,
  tweetId: {
    type: String,
    required: true,
  },
  conversation: {
    type: String,
    default: "all",
  },
  cards: {
    type: String,
    default: "visible",
  },
};

const publicEmits = ["tweet-load-success", "tweet-load-error"];

const timelineEmits = [...publicEmits];

const tweetEmits = [...publicEmits];

const addPlatformScript = function (src = "//platform.twitter.com/widgets.js") {
  if (!addScriptPromise) {
    const s = document.createElement("script");
    s.setAttribute("src", src);
    document.body.appendChild(s);
    addScriptPromise = new Promise((resolve) => {
      s.onload = () => {
        resolve(window.twttr);
      };
    });
  }
  return addScriptPromise;
};

export {
  addPlatformScript,
  timelineProps,
  tweetProps,
  timelineEmits,
  tweetEmits,
};
