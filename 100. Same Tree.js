var isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (!p || !q) return false;

    if (p && q && p?.val !== q?.val) {
        return false;
    } else {
        if (p?.left && q?.left && p?.right && q?.right) {
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        } else if (!p?.left && !q?.left && p?.right && q?.right) {
            return isSameTree(p.right, q.right);
        } else if (p?.left && q?.left && !p?.right && !q?.right) {
            return isSameTree(p.left, q.left);
        } else if ((p?.left && !q?.left) || (p?.right && !q?.right)
            || (!p?.left && q?.left) || (!p?.right && q?.right)) {
            return false;
        } else {
            return true;
        }
    }
};