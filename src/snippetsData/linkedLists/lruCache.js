class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity - Maximum number of items the cache can hold.
     *
     * Uses a doubly linked list + hash map to achieve O(1) get and put.
     * Convention: head.next = least recently used, tail.prev = most recently used.
     * head and tail are permanent dummy sentinels — never evicted, never returned.
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();       // key → node, for O(1) lookup

        this.head = new Node(0, 0); // LRU sentinel (least recent end)
        this.tail = new Node(0, 0); // MRU sentinel (most recent end)
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * Inserts a node just inside the head (least-recent end).
     * Called on new insertions and during refresh.
     */
    #insertAtHead(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    /**
     * Splices a node out of the list by rewiring its neighbors.
     * Does NOT touch the map — callers are responsible for that.
     */
    #remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    /**
     * Moves an existing node to the head (marks it as most recently used).
     */
    #refreshPointer(node) {
        this.#remove(node);
        this.#insertAtHead(node);
    }

    /**
     * Returns the value for key, or -1 if not found.
     * Marks the item as most recently used.
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1;
        const node = this.map.get(key);
        this.#refreshPointer(node);
        return node.value;
    }

    /**
     * Inserts or updates a key-value pair.
     * If updating, refreshes the node's position in the list.
     * If inserting and over capacity, evicts the least recently used item.
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.map.has(key)) {
            // Key exists — update value and mark as most recently used
            const node = this.map.get(key);
            node.value = value;
            this.#refreshPointer(node);
        } else {
            // New key — insert at head and register in the map
            const node = new Node(key, value);
            this.map.set(key, node);
            this.#insertAtHead(node);

            // Evict the least recently used item if over capacity
            if (this.map.size > this.capacity) {
                const lru = this.tail.prev;  // LRU item sits just inside the tail sentinel
                this.#remove(lru);
                this.map.delete(lru.key);
            }
        }
    }
}

// DRIVER CODE
// These variables (capacity, operations) will be available when this snippet is evaluated with the provided JSON args.
const cache = new LRUCache(capacity);
return operations.map(op => {
    const result = cache[op.method](...op.args);
    return {
        operation: op.desc || `${op.method}(${op.args.join(', ')})`,
        result
    };
});