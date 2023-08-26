/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(le1, le2) {
    var mergedHead = { val : -1, next : null },
        crt = mergedHead;
    while(le1 && le2) {
        if(le1.val > le2.val) {
            crt.next = le2;
            le2 = le2.next;
        } else {
            crt.next = le1;
            le1 = le1.next;
        }
        crt = crt.next;
    }
    crt.next = le1 || le2;
    
    return mergedHead.next;
};