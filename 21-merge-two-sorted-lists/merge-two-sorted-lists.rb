# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
    head = nil
    curr = nil
    l1 = list1 
    l2 = list2

    if l1 == nil
        return l2
    elsif l2 == nil
        return l1
    end

    if l1.val < l2.val
        head = l1
        curr = l1
        l1 = l1.next
    else 
        head = l2
        curr = l2
        l2 = l2.next
    end

   while l1 != nil && l2 != nil
        if (l1.val < l2.val)
            curr.next = l1
            curr = l1
            l1 = l1.next
        else
            curr.next = l2
            curr = l2
            l2 = l2.next
        end
    end

    while l1 != nil
        curr.next = l1
        curr = l1
        l1 = l1.next
    end 

    while l2 != nil
        curr.next = l2
        curr = l2
        l2 = l2.next
    end

    head     
end