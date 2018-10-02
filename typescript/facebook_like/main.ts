
import { LikeComponent } from './like.component';

let like = new LikeComponent(5, false);
like.onClick();
console.log(like.getStatus());
like.onClick();
console.log('Total Like : ' + like.likeCount);
console.log('Like Status :' + like.isSeleted);

