class LikeComponent {
    private _likeCount:number;
    private _isSeleted: boolean;

    constructor(likeCount: number, _isSeleted: boolean) {
        this._likeCount = likeCount;
        this._isSeleted = _isSeleted;
    }

    onClick() {
        // if(this._isSeleted == true) {
        //     this._likeCount --;
        //     this._isSeleted = false
            
        // } else {
        //     this._likeCount ++;
        //     this._isSeleted = true
        // }

        this._likeCount += (this._isSeleted) ? -1 : +1 
        this._isSeleted = !(this._isSeleted);
    }
   
    getStatus() {
        return 'Total Like :' + this._likeCount + ' and isSelected :' + this._isSeleted;
    }

    get likeCount() {
        return this._likeCount;
    }

    get isSeleted() {
        return this._isSeleted;
    }
}

export { LikeComponent };