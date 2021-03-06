// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * This file contains the constant strings to be used in the code logic to allow for easy editing
 * Below are eslint comments to enforce JSON like syntax since strings are usually stored in JSON
 * They are written in JavaScript for easier organization of the data and in case functions are used
 */

/* eslint quote-props: ["error", "always"] */
/* eslint quotes: ["error", "double"] */

// eslint-disable-next-line quotes
const deepFreeze = require('deep-freeze');

const categories = [
  {
    "category": "colors",
    "suggestion": "Colors",
    "facts": [
      "My favorite color is blue.",
      "My favorite color is blue.",
      "My favorite color is blue."
    ],
    "factPrefix": "Okay, here's a headquarters fact."
  },
  {
    "category": "history",
    "suggestion": "History",
    "facts": [
      "Google was founded in 1998.",
      "Google was founded by Larry Page and Sergey Brin.",
      "Google went public in 2004.",
      "Google has more than 70 offices in more than 40 countries."
    ],
    "factPrefix": "Sure, here's a history fact."
  }
];

const content = {
  "images": [
    [
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Search_GSA.2e16d0ba.fill-300x300.png",
      "Google app logo"
    ],
    [
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Logo.max-900x900.png",
      "Google logo"
    ],
    [
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Dinosaur-skeleton-at-Google.max-900x900.jpg",
      "Stan the Dinosaur at Googleplex"
    ],
    [
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Wide-view-of-Google-campus.max-900x900.jpg",
      "Googleplex"
    ],
    [
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Bikes-on-the-Google-campus.2e16d0ba.fill-300x300.jpg",
      "Biking at Googleplex"
    ]
  ],
  "link": "https://www.google.com/about/"
};

const cats = {
  "suggestion": "Cats",
  "facts": [
    "Cats are animals.",
    "Cats have nine lives.",
    "Cats descend from other cats."
  ],
  "images": [
    [
      "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg",
      "Gray Cat"
    ]
  ],
  /**
   * This sample uses a sound clip from the Actions on Google Sound Library
   * https://developers.google.com/actions/tools/sound-library
   */
  "sounds": [
    "https://actions.google.com/sounds/v1/animals/cat_purr_close.ogg"
  ],
  "link": "https://www.google.com/search?q=cats",
  "factPrefix": "Alright, here's a cat fact. <audio src=\"%s\"></audio>"
};

const transitions = {
  "content": {
    "heardItAll": "Looks like you've heard all there is to know about the %s of Google. I could tell you about its %s instead.",
    "alsoCats": "By the way, I can tell you about cats too."
  },
  "cats": {
    "heardItAll": "Looks like you've heard all there is to know about cats. Would you like to hear about Google?"
  }
};

const general = {
  "heardItAll": "Actually it looks like you heard it all. Thanks for listening!",
  /** Used to give responses for no inputs */
  "noInputs": [
    "I didn't hear that.",
    "If you're still there, say that again.",
    "We can stop here. See you soon."
  ],
  "suggestions": {
    /** Google Assistant will respond to more confirmation variants than just these suggestions */
    "confirmation": [
      "Sure",
      "No thanks"
    ]
  },
  "nextFact": "Would you like to hear another fact?",
  "linkOut": "Learn more",
  "wantWhat": "So what would you like to hear about?",
  "unhandled": "Welcome to Facts about Google! I'd really rather not talk about %s. Wouldn't you rather talk about Google? I can tell you about Google's history or its headquarters. Which do you want to hear about?"
};

// Use deepFreeze to make the constant objects immutable so they are not unintentionally modified
module.exports = deepFreeze({
  categories,
  content,
  cats,
  transitions,
  general
});
