"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var like = new like_component_1.LikeComponent(5, false);
like.onClick();
console.log(like.getStatus());
like.onClick();
console.log('Total Like : ' + like.likeCount);
console.log('Like Status :' + like.isSeleted);
