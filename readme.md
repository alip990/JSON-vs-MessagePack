## JSON vs. MessagePack Performance Comparison

This repository compares the performance of JSON and @msgpack/msgpack for serializing and deserializing large objects. It generates a large object with a configurable size, measures the serialization and deserialization times, and calculates the size of the serialized data for both formats. The script highlights the efficiency of MessagePack in terms of speed and compactness compared to JSON.

To run the comparison, clone the repository, install dependencies, and execute the script using Node.js. Results include serialization time, deserialization time, and serialized data size for each format. You can customize the object size by modifying the generateLargeObject function. Ideal for understanding the trade-offs between JSON and MessagePack in data-intensive applications.

### Outout

```bash 
Generating large object...
Large object generated.

--- Performance Comparison ---

--- JSON ---
Serialization Time: 51.53 ms
Serialized Size: 2377781 bytes
Deserialization Time: 66.38 ms

--- @msgpack/msgpack ---
Serialization Time: 48.64 ms
Serialized Size: 1977785 bytes
Deserialization Time: 137.58 ms
```


