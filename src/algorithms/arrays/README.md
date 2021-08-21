## Big O

### Time Complexity

-   Sorting O(nLog(n))
-   Looping O(n)
-   Nested Looping O(n^2)

## Time Complexity - Notes

-   Looping multiple times (non nested) is OK as this gives us a constant that we can drop, ie looping 3 times gives us O(n+n+n) or O(3n) where we can drop constants and give ourselves O(n).
-   Looping and traversing out in either direction (longest peaks) can also give us an O(n), if we can be smart about not repeating traverses

### Space Complexity

-   Stroing variables, and accessing array indices in place will give us O(1) constant space.
-   Uing something like a hash table will typically give us O(n) if we are just storing up to (n), all items in the array.
-   Uing something like a hash table where we are storing up to (n), all items in the array, AND additional array data (four number sum) might give us O(n^2) where we're storing exponentially more data as the array grows.

### Notes

-   Always look to find a way to traverse the array in O(n), this could be achieved by storing data in a hash table
-   If using a hash table, see if you can complete the data scanning you need by either:

    1.  Looping through array multiple times O(n)
    2.  Looping through array once, but traversing to left && right of each number, using hash table to keep track of data you've seen

-   If not using a hash table, perhaps you can store markers in place in the array itself (mark items in array as negative, or as different values) if you've seen them (first duplicate value)
